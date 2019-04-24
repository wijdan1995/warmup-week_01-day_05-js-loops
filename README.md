[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Warm Up Javascript Loops

Create a file in this repository named `warmup.js` to save your solutions.

Write a function named `singSong()` that will `console.log` the song.  

"99 Bottles of coke" is a traditional reverse counting song. 

It is popular to sing on long trips, as it is repetitive and easy to memorize but -- it can take a long time to sing.

Lets try and make it run a little quicker using code:

The song's lyrics are as follows:
```
99 bottles of coke on the wall, 99 bottles of coke.
Take one down, pass it around, 98 bottles of coke on the wall.

98 bottles of coke on the wall, 98 bottles of coke.
Take one down, pass it around, 97 bottles of coke on the wall.
```
The same verse is repeated, each time with one bottle fewer, until there are none left.


Be careful, not all verses are the same. The verse for the final 3 are:

```
2 bottles of coke on the wall, 2 bottles of coke.
Take it down and pass it around, 1 bottle of coke on the wall.

1 bottle of coke on the wall, 1 bottle of coke.
Take it down and pass it around, no more bottles of coke on the wall.

No more bottles of coke on the wall, no more bottles of coke.
Go to the store and buy some more, 99 bottles of coke on the wall.
```

#### Bonus:

- Write a function `singSong()` that takes the number of bottles as an argument and sings the song starting from the number you've passed all the way to the end _(ie, 0)_. `singSong(200)`.
- Be able to count between a range of numbers (ie, 200 to 5). `singSong(200, 5)`
