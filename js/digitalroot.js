//this seems to work when i pass tests however is failing all on Codewars
function digital_root( n) {
  //sum variable starting at 0
  var sum = 0;
  //if n is less than 10
  if (n < 10) {
    return n
  }
  return n.toString().split('').reduce((a, b) =>
  {return parseInt(a) + parseInt(b)}, 0)
}