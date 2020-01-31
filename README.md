# jQuery Reverse Polish Notation Calculator

See the finished app online on [Github Pages](https://captainalan.github.io/jQuery-RPN-calculator/).

Arithmetic is usually taught using **infix** notation, mirroring the way many languages are spoken, with the verb in the middle. For example, we could just as naturally *say* and *write* "1 + 1 = 2". **Reverse Polish Notation** (also called "postfix notation") works differently in that the operator *always* comes at the end. So instead of "1 + 1" we do "1 1 +" in RPN. RPN is used in the old UNIX program [dc](https://en.wikipedia.org/wiki/Dc_(computer_program)) ("desk calculator").

One advantage for this way of doing things is that we can express complex calculations without parentheses. For example, consider the following expression (in infix notation):

> (1 + 2) * (3 + 4)

This could readily be expressed without parentheses in RPN (postfix notation) as:

> 1 2 + 3 4 + *

In addition to plain HTML/CSS/Javascript, this project makes use of Bootstrap and jQuery. The code to parse strings in Reverse Polish Notation is borrowed from [thepolyglotdeveloper.com](https://www.thepolyglotdeveloper.com/2015/04/evaluate-a-reverse-polish-notation-equation-with-javascript/) with some small modifications.
