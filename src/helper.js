export const addressTrim = (str) => {
  const trimmedStr = str.slice(0, 6) + '...' + str.slice(38);
  return trimmedStr;
};
