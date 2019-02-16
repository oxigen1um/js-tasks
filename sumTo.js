// loop method
function sumTo(n) {
  var result = null;
  for (var i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

// recursion method
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

// formula method
function sumTo(n) {
  return ((1 + n) / 2) * n;  
}
