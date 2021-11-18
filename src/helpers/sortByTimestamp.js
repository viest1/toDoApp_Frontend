export const sortByTimestamp = (arr) => {
  return [...arr].sort((a, b) => a.timestamp - b.timestamp);
};
