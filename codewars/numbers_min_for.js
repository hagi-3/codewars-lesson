/**
 * 最小4個の正の整数の配列が与えられたときに、2つの最小の正の数の合計を返す関数を作成します。
 * 浮動小数点や非正の整数は渡されません。
 * 例えば、[19, 5, 42, 2, 77]のような配列が渡された場合、出力は7となります。
 * @param {*} numbers 
 */

function sumTwoSmallestNumbers(numbers) {  
  numbers.sort(asc);
  sum = numbers[0] + numbers[1];
  return sum;
}

function asc(a, b) {
  return a - b;
}

const result = sumTwoSmallestNumbers([19,5,42,2,77]);
console.log(result);