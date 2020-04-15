function convertToRoman(num) {
 // take num and find highest decimal
 // subtract decimal from num
 // repeat until num == 0
 
 let numeralArr = "";
 const numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 const numerObj = {
   1000: 'M',
   900: 'CM',
   500: 'D',
   400: 'CD',
   100: 'C',
   90: 'XC',
   50: 'L',
   40: 'XL',
   10: 'X',
   9: 'IX',
   5: 'V',
   4: 'IV',
   1: 'I'
 };

let index = 0;

while(index < numArr.length){
  if(num >= numArr[index]){
    numeralArr += numerObj[numArr[index]];
    num -= numArr[index];
  } else {
    index++;
  }
}

 return numeralArr;
}

convertToRoman(3999);
