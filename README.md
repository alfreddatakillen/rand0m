# rand0m

Deterministic pseudo-random value generator in JavaScript.

Very simple implementation in pure JavaScript, without any dependencies.
Compatible with Browsers, Node.js, React Native, etc.

This generator will return deterministic results according to a given seed.
This is NOT a cryptographically secure random number generator. It is quite
the opposite! The intention is to generate a sequence of random numbers that
can be re-generated.

## How to use it

```
const Rand0m = require('rand0m');

const seed = 1337; // Some seed, must be an integer!
const randomGenerator = new Rand0m(seed);

randomGenerator.int(); // Returns an integer between 0 and 4294967295.
randomGenerator.float(); // Returns a float between 0 and 1.
randomGenerator.int(1, 10); // Returns an integer between 1 and 10.
randomGenerator.float(10.5, 19.2); // Returns an float between 10.5 and 19.2.
```

