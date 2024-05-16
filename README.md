## Kata: The Hashtag Generator (by BattleRattle) <5 kyu>

### DESCRIPTION:

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return `false`.
If the input or the result is an empty string it must return `false`.

### Examples:

`" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"`

`"    Hello     World   "                  =>  "#HelloWorld"`

`""                                        =>  false`


---
### What I learnt:

1. Sometimes a classic _for_ loop offers more readability then a shorthand .map() method.
2. This kata was good to practise different kinds of checks to deal with the variety of different ways the string could be presented.
