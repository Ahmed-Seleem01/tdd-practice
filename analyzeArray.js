function analyzeArray(arr) {
  function averageArr(arr) {
    const sum = arr.reduce((pre, cur) => cur + pre, 0);
    return sum / arr.length;
  }

  function calcMin(arr) {
    const min = arr.reduce((pre, cur) => {
      return pre > cur ? cur : pre;
    });
    return min;
  }

  function calcMax(arr) {
    const max = arr.reduce((pre, cur) => {
      return pre < cur ? cur : pre;
    });
    return max;
  }

  const average = averageArr(arr);
  const length = arr.length;
  const min = calcMin(arr);
  const max = calcMax(arr);

  return { average, length, min, max };
}
console.log(analyzeArray([1, 8, 3, 4, 2, 6, -2, 10, 9, 20]));

export default analyzeArray;
