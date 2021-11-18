export const timer = (isActive, setActuallyTime) => {
  let interval = null;
  if (isActive) {
    console.log('time');
    interval = setInterval(() => {
      setActuallyTime(Date.now());
    }, 10);
  } else {
    return () => clearInterval(interval);
  }
};
