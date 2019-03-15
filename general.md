#Language Typing, STATIC vs DYNAMIC, STRONG vs WEAK

Statically typed programming languages are type-checked at compile time.
Dynamically typed languages are type-checked at run time.

In a weakly typed language, variables can be implicitly coerced to unrelated types, whereas in a strongly typed language they cannot, and an explicit conversion is required.

#Big O Notation

RUNTIME COMPLEXITY

Simplified analysis of an algorithms efficiency
-gives an algorithms complexity in terms of input size, N
-machine independent analysis, interested in computer steps
-typically worst-case, best-case and average-case are analyzed
-low order terms are dropped or 'dominated' by higher order terms

O(1) < O(logn) < O(n) < 0(nlogn) < O(n^2) < O(2^n) < O(n!)

good ........... fair ... bad .... horrible

^^relative complexity (see chart)

https://www.youtube.com/watch?v=__vX2sjlpXU

FIBONACCI and MEMOIZATION

The Fibonacci series, when done recursively, is NOT a very efficient function, as each call to fib(n) has a tree of calls beneath it that lead to fib(1) and fib(0). However, there is a way to memoize the function such that any repeat calls that have already been done can simply refer to the result rather than re-calling that function.
