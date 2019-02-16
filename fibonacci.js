function fib(n) {
  var a = 0,
      b = 1,
      c = null;
      
      for (var i = 1; i <= n - 1; i++) {
        c = a + b;
        a = b;
        b = c;
      }
      
      return c;
}

console.log(fib(77));