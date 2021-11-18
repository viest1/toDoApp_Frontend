import React, { useState, useCallback, useEffect } from 'react';
import { useEventListener } from '../../../hooks/useEventListener';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { Container, ContainerGap, ContainerResults } from './MiniGameMouse.styles';
import { randomNumber } from 'helpers/randomNumber';
import { timer } from '../../../helpers/timer';
import ButtonAtoms from '../../atoms/ButtonAtoms/ButtonAtoms';

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
      setResults([...results, finishTime]);
      return;
    }
  }, [lengthArrayPoints]);

  useEffect(() => {
    const storageResults = JSON.parse(localStorage.getItem('resultsMiniGame'));
    storageResults !== null && setResults(storageResults);
  }, [setResults]);

  useEffect(() => {
    localStorage.setItem('resultsMiniGame', JSON.stringify(results));
  }, [results]);

  return (
    <Container>
      <h1>{coords.x && coords.y ? `The mouse position is (${coords.x},${coords.y})` : 'Move Mouse'}</h1>
      {!lengthArrayPoints && (
        <ContainerGap>
          <h2>Do you want to play the game?</h2>
          <h2>Warm up...</h2>
          <h2>
            Move Mouse to ({target[0]}, {target[1]}) to START GAME
          </h2>
          <h3>
            Tip: You can go wrong by 1px. Example: ({target[0] + 1}, {target[1] + 1}) or ({target[0] - 1},{' '}
            {target[1] - 1})
          </h3>
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
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Results:</h2>
        <ContainerResults>
          {results &&
            results
              .sort((a, b) => a - b)
              .map((item, index) => (
                <p key={index}>
                  {index + 1}. {item}s
                </p>
              ))}
        </ContainerResults>
      </div>
    </Container>
  );
};

export default MiniGameMouse;
