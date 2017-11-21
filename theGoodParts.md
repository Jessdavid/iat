Chapter 3

  When we make changes to an object, the object's prototype is not touched.

  p.23 - hasOwnProperty method

Chapter 4 - Function Literals

  A function literal has 4 parts:

  1) the resereved word function.  Look up ES6 to use fat arrow functions.  => replaces function
  2) a function name - can be used to call itself recursively
  3) parameters of the function (a, b)
  4) a set of statements wrapped in curly braces - body of the function

  Closure

    A function nested inside a function that has access to it's outter function

  Invocation - p.28, See: http://doctrina.org/Javascript-Function-Invocation-Patterns.html

    Functions receive two additional parameters - this and arguments.

      1)  Method Invocation Pattern - The binding of this to the object happens at innvocation time.
          Methods that get their object context from this are called public methods.