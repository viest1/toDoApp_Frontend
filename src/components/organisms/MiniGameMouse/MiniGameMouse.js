import React, { useState, useCallback, useEffect, useContext } from 'react';
import { useEventListener } from '../../../hooks/useEventListener';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import {
  Container,
  ContainerGap,
  ContainerResults,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH1,
} from './MiniGameMouse.styles';
import { randomNumber } from 'helpers/randomNumber';
import { timer } from '../../../helpers/timer';
import ButtonAtoms from '../../atoms/ButtonAtoms/ButtonAtoms';
import { ToDoAppContext } from '../../../providers/GeneralProvider';
import CardResult from '../../molecules/CardResult/CardResult';

const MiniGameMouse = () => {
  const { height, width } = useWindowDimensions();
  const goalPoints = 2;
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [timeStart, setTimeStart] = useState(0);
  const [actuallyTime, setActuallyTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [arrayPoints, setArrayPoints] = useState([]);
  const [target, setTarget] = useState([500, 500]);
  const [results, setResults] = useState([]);
  const [result, setResult] = useState(0);
  const lengthArrayPoints = arrayPoints.length;
  const { name, userId, setName, avatarSrc } = useContext(ToDoAppContext);
  const handler = useCallback(
    ({ clientX, clientY }) => {
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );
  useEventListener('mousemove', handler);

  const targetPoints = useCallback(() => {
    if (lengthArrayPoints < goalPoints) {
      const pointX = randomNumber(1, width - 1);
      const pointY = randomNumber(1, height - 1);
      setTarget([pointX, pointY]);
    }
  }, [height, width, lengthArrayPoints, goalPoints]);

  const isReachedPoint = () => {
    if (
      (coords.x === target[0] && coords.y === target[1]) ||
      (coords.x === target[0] + 1 && coords.y === target[1] + 1) ||
      (coords.x === target[0] - 1 && coords.y === target[1] - 1)
    ) {
      setArrayPoints([...arrayPoints, target]);
      return true;
    }
  };

  const handleResetGame = () => {
    setArrayPoints([]);
  };

  const fetchResults = async () => {
    try {
      const responseData = await fetch(process.env.REACT_APP_BACKEND_URL + `/results`);
      const responseDataJson = await responseData.json();
      await setResults(
        responseDataJson.map((item) => ({ time: item.time, name: item.name, avatarSrc: item.avatarSrc }))
      );
    } catch (err) {}
  };

  useEffect(() => {
    targetPoints();
  }, [targetPoints]);

  useEffect(() => timer(isActive, setActuallyTime), [isActive, setActuallyTime]);

  useEffect(() => {
    if (lengthArrayPoints === 1) {
      setIsActive(true);
      setTimeStart(Date.now());
    }
    if (lengthArrayPoints === goalPoints) {
      setIsActive(false);
      const dateEnd = Date.now();
      const finishTime = ((dateEnd - timeStart) / 1000).toFixed(2);
      setResult(finishTime);
      // setResults([...results, finishTime]);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lengthArrayPoints]);

  useEffect(() => {
    fetchResults();
  }, []);

  useEffect(() => {
    const getName = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
      const jsonResponse = await response.json();
      setName(jsonResponse.name);
    };

    if (userId) {
      getName();
    }
  }, [userId, setName]);

  useEffect(() => {
    const saveResultsToDb = async () => {
      await fetch(process.env.REACT_APP_BACKEND_URL + '/results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          name,
          time: result,
          avatarSrc,
        }),
      });
    };
    if (result > 0) {
      saveResultsToDb().then(() => {
        fetchResults();
      });
    }
  }, [result, name, avatarSrc, userId]);

  return (
    <Container>
      <StyledH1>
        {coords.x && coords.y ? `The mouse position is (${coords.x},${coords.y})` : 'Move Mouse'}
      </StyledH1>
      {!lengthArrayPoints && (
        <ContainerGap>
          <StyledH3>Do you want to play the game?</StyledH3>
          <StyledH2>
            Move Mouse to ({target[0]}, {target[1]}) to START GAME
          </StyledH2>
          <StyledH4>
            Tip: You can go wrong by 1px. Example: ({target[0] + 1}, {target[1] + 1}) or ({target[0] - 1},{' '}
            {target[1] - 1})
          </StyledH4>
        </ContainerGap>
      )}
      {lengthArrayPoints < goalPoints && isReachedPoint() && targetPoints()}
      {lengthArrayPoints > 0 && lengthArrayPoints < goalPoints ? (
        <ContainerGap>
          <h2>You Started!</h2>
          <h2>
            Your score: {lengthArrayPoints - 1}/{goalPoints - 1}
          </h2>
          <h2>Your Time: {((actuallyTime - timeStart) / 1000).toFixed(2)}s</h2>
          <h2>
            Next Point = ({target[0]}, {target[1]})
          </h2>
        </ContainerGap>
      ) : (
        lengthArrayPoints === goalPoints && (
          <ContainerGap>
            <h2>You Won</h2>
            <h2>Your Time: {result}s</h2>
            <ButtonAtoms onClick={handleResetGame} text="Play Again" />
          </ContainerGap>
        )
      )}
      <div>
        <StyledH2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Results:</StyledH2>
        <ContainerResults>
          {results &&
            results
              .sort((a, b) => a.time - b.time)
              .map((item, index) => <CardResult key={index} item={item} index={index} />)}
        </ContainerResults>
      </div>
    </Container>
  );
};

export default MiniGameMouse;
