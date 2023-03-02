function getMinMax(str) {
  let  newStr = str.split(' ')
               .map((item) => parseFloat(item))
               .filter(item => Number.isFinite(item))

 return  { min: + `${Math.min(...newStr)}`,
           max: + `${Math.max(...newStr)}` }
}
