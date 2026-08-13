function disemvowel(str) {
  return str.replace(/[oiuea]/gi, '');
}

console.log(disemvowel('manzi'));