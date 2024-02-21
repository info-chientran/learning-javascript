const prompt = require('prompt-sync')({ sigint: true });

const arr = [];
let sum = 0;

// Function
const updateArr = (num) => {
  arr.push(Number(num));
}

const sumArr = (array) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = sum + element;
  }

  return sum;
}

const calculateRemainderAB = (firstNumber, secondNumber) => {
  return secondNumber % firstNumber;
}

const calculateRemainderABC = (firstNumber, secondNumber, thirdNumber) => {
  return (secondNumber % firstNumber) + (thirdNumber % secondNumber);
}

// Input
for (let index = 0; index < 3; index++) {
  const num = prompt(`Nhập số thứ ${index + 1}: `);
  if (num <= 0) {
    console.log("Nhập số tự nhiên");
    process.exit();
  }

  switch (arr.length) {
    case 0:
      updateArr(num);
      break;
    
    case 1:
      if (arr[0] < num && num % 2 === 0) {
        updateArr(num);
      } else {
        console.log(`Nhập số tự nhiên lớn hơn ${index--} và chia hết cho 2`);
      }
      break;
    
      case 2:
        if (num < arr[0] && num < arr[1]) {
          updateArr(num);
        } else {
          console.log(`Nhập số tự nhiên nhỏ hơn số thứ ${index} & số thứ ${--index}`);
        }
        break;
  }
}

// Log
console.log("Mảng: ", arr);
console.log("Tổng các phần tử: ", sumArr(arr));
console.log("Phần dư a/b: ", calculateRemainderAB(arr.at(0), arr.at(1)));
console.log("Tổng của phần dư a/b + c/b: ", calculateRemainderABC(arr.at(0), arr.at(1), arr.at(2)));