# TypeScript Bug: Stack Overflow in Recursive Object Comparison

This repository demonstrates a common bug in TypeScript when recursively comparing objects: stack overflow errors due to circular references. The `bug.ts` file contains the buggy code, and `bugSolution.ts` provides a corrected version.

## Bug Description
The `compareObjects` function uses recursion to compare two objects.  However, if the objects contain circular references (e.g., object A refers to object B, and object B refers to object A), the recursion will never terminate, leading to a stack overflow error.

## Solution
The solution involves using a `Set` to track visited objects. Before comparing two objects, the solution checks if either object has already been visited. If so, it avoids further recursion, preventing the stack overflow.

## How to Reproduce
1. Clone this repository.
2. Open `bug.ts` and `bugSolution.ts` in a TypeScript environment.
3. Run the tests (provided within the corrected file) to observe the difference between the buggy and corrected code.

## License
MIT