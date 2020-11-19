function addTwoDigits(n: any): any {
  const nums = n.toString().split('');

  return nums.reduce((acc, ele)=>{
    return parseInt(acc) + parseInt (ele);
  },0)


}

console.log(addTwoDigits(85));