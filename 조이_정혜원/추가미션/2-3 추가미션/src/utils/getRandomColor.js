export const getRandomColor = () => {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += Math.floor(Math.random() * 10);
  }
  return randomColor;
};

// Math.floor 소수점값이 존재할 때 소수값을 버림
// Math.random() 0이상 1 미만의 난수
