function checkSpam(str) {
  let strNew = str.toUpperCase();
  
  if (strNew.includes('1XBET') || strNew.includes('XXX')){
      return true;
  }

  return false;
}
