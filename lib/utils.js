export const leftPad = function(number) {
  const pad = '00';
  return pad.substr(0, pad.length - number.length) + number;
}
export const formattedTime = function(milliseconds) {
  const totalSeconds = parseInt(milliseconds / 1000 , 10)
  const minutes = parseInt(totalSeconds / 60, 10);
  const seconds = parseInt(totalSeconds % 60, 10);
  return `${minutes}:${leftPad(seconds.toString())}`;
}


