function sum(num) {
    let sum = 0;
  
    for (let i = 0; i < num.length; i++) {
      if (array[i] > 0) {
        sum += array[i];
      }
    }
  
    return sum;
  }
  
  const array = [2, -4, 8, 0, -1, 6];
  const result = sum(array);
  console.log(result);