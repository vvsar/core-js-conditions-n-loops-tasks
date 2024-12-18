/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a >= b + c || b >= a + c || c >= a + b) {
    return false;
  }
  if (a === b || a === c || b === c) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  function convertTens(str) {
    switch (str) {
      case '1':
        return 'X';
      case '2':
        return 'XX';
      case '3':
        return 'XXX';
      default:
        return '';
    }
  }
  function convertUnits(str) {
    switch (str) {
      case '1':
        return 'I';
      case '2':
        return 'II';
      case '3':
        return 'III';
      case '4':
        return 'IV';
      case '5':
        return 'V';
      case '6':
        return 'VI';
      case '7':
        return 'VII';
      case '8':
        return 'VIII';
      case '9':
        return 'IX';
      default:
        return '';
    }
  }
  const numStr = num.toFixed();
  if (numStr.length === 1) {
    return convertUnits(numStr);
  }
  return convertTens(numStr[0]) + convertUnits(numStr[1]);
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        res += 'minus';
        break;
      case '.':
        res += 'point';
        break;
      case ',':
        res += 'point';
        break;
      case '0':
        res += 'zero';
        break;
      case '1':
        res += 'one';
        break;
      case '2':
        res += 'two';
        break;
      case '3':
        res += 'three';
        break;
      case '4':
        res += 'four';
        break;
      case '5':
        res += 'five';
        break;
      case '6':
        res += 'six';
        break;
      case '7':
        res += 'seven';
        break;
      case '8':
        res += 'eight';
        break;
      case '9':
        res += 'nine';
        break;
      default:
        break;
    }
    if (i < numberStr.length - 1) {
      res += ' ';
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
    if (i >= str.length - 1 - i) {
      break;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numStr = num.toFixed();
  const digitStr = digit.toFixed();
  for (let i = 0; i < numStr.length; i += 1) {
    if (numStr[i] === digitStr) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const obj1 = {};
  const obj2 = {};
  let sum1 = 0;
  let sum2 = 0;
  const len = arr.length - 1;
  for (let i = 0; i < arr.length; i += 1) {
    sum1 += arr[i];
    sum2 += arr[len - i];
    obj1[i] = sum1;
    obj2[len - i] = sum2;
  }
  for (let j = 0; j < arr.length; j += 1) {
    if (obj1[j] === obj2[j]) return j;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = new Array(size);
  for (let k = 0; k < size; k += 1) {
    arr[k] = new Array(size);
  }
  let curr = 1;
  let i = 0;
  let j = 0;
  let dir = 'right';
  function right() {
    while (j < size) {
      arr[i][j] = curr;
      curr += 1;
      j += 1;
      if (arr[i][j] || j >= size) {
        j -= 1;
        i += 1;
        dir = 'down';
        break;
      }
    }
  }
  function down() {
    while (i < size) {
      arr[i][j] = curr;
      curr += 1;
      i += 1;
      if (!arr[i] || arr[i][j] || i >= size) {
        i -= 1;
        j -= 1;
        dir = 'left';
        break;
      }
    }
  }
  function left() {
    while (j >= 0) {
      arr[i][j] = curr;
      curr += 1;
      j -= 1;
      if (arr[i][j] || j < 0) {
        j += 1;
        i -= 1;
        dir = 'up';
        break;
      }
    }
  }
  function up() {
    while (i >= 0) {
      arr[i][j] = curr;
      curr += 1;
      i -= 1;
      if (!arr[i] || arr[i][j] || i < 0) {
        i += 1;
        j += 1;
        dir = 'right';
        break;
      }
    }
  }
  while (curr <= size ** 2) {
    if (dir === 'right') {
      right();
    } else if (dir === 'down') {
      down();
    } else if (dir === 'left') {
      left();
    } else {
      up();
    }
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newM = matrix;
  const copy = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < newM.length; i += 1) {
    for (let j = 0; j < newM.length; j += 1) {
      newM[i][j] = copy[newM.length - j - 1][i];
    }
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length < 2) return;
  function swap(array, a, b) {
    const ar = array;
    [ar[a], ar[b]] = [ar[b], ar[a]];
  }
  function partition(array, lowIdx, highIdx) {
    const ar = array;
    const pivot = ar[highIdx];
    let i = lowIdx - 1;
    for (let j = lowIdx; j <= highIdx - 1; j += 1) {
      if (arr[j] < pivot) {
        i += 1;
        swap(ar, i, j);
      }
    }
    swap(ar, i + 1, highIdx);
    return i + 1;
  }
  function quickSort(array, lowIdx, highIdx) {
    const ar = array;
    if (lowIdx < highIdx) {
      const pivotIdx = partition(ar, lowIdx, highIdx);
      quickSort(ar, lowIdx, pivotIdx - 1);
      quickSort(ar, pivotIdx + 1, highIdx);
    }
  }
  const newArr = arr;
  quickSort(newArr, 0, newArr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  function shfl(string) {
    let str1 = '';
    let str2 = '';
    for (let i = 0; i < string.length; i += 2) {
      str1 = `${str1}${string[i]}`;
    }
    for (let i = 1; i < string.length; i += 2) {
      str2 = `${str2}${string[i]}`;
    }
    return `${str1}${str2}`;
  }
  let newStr = str;
  let it = iterations;
  let j = 1;
  while (j <= it) {
    newStr = shfl(newStr);
    if (newStr === str) {
      it %= j;
      j = 0;
    }
    j += 1;
  }
  return newStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  function getArrayOfDigits(str) {
    const arr1 = [];
    for (let j = 0; j < str.length; j += 1) {
      arr1.push(str[j]);
    }
    return arr1.map((el) => +el);
  }
  const nLength = number.toFixed().length;
  for (let i = 2; i <= nLength; i += 1) {
    const a = Math.floor(number / 10 ** i) * 10 ** i;
    const b = number % 10 ** i;
    let bStr = b.toFixed();
    while (bStr.length < i) {
      bStr = `0${bStr}`;
    }
    const arr = getArrayOfDigits(bStr);
    if (arr[0] < Math.max(...arr)) {
      const c = arr[0];
      arr.sort((x, y) => x - y);
      let idx;
      for (let f = arr.length - 1; f >= 0; f -= 1) {
        if (arr[f] === c) {
          idx = f;
          break;
        }
      }
      const mid = (arr[idx + 1] || arr[idx]) * 10 ** (i - 1);
      let endStr = '';
      const filteredArr = arr.filter((_, index) => index !== idx + 1);
      for (let m = 0; m < filteredArr.length; m += 1) {
        endStr = `${endStr}${filteredArr[m]}`;
      }
      const end = +endStr;
      const newNumber = a + mid + end;
      if (newNumber > number) {
        return newNumber;
      }
    }
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
