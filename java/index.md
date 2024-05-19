---
layout: page
title: "A Java Crash Course"
tags: [Java]
released: true
---

## Goals

In this assignment, we will go through basic Java syntax concepts. While this
assignment is optional and you will not submit your answers, it is highly
recommended for those with no prior Java experience. The labs will NOT cover
this material explicitly, though you are expected to understand it.

This tutorial assumes that you have significant (at least one semester)
experience with some programming language, and is intended only to highlight
"the Java way" of doing some previously familiar things.

While we hope this document should stand alone for the curious and
self-motivated student, you may find it helpful to read the suggested
supplementary reading when provided.

**Feel free to skim and read at whatever pace you feel comfortable with.** It's
okay to skip parts of this assignment. Use your best judgment. The directions
are a bit more verbose than is probably necessary.

## A Basic Program

In Lab 1, we'll learn how to run Java code on your computer. Since lab 1 hasn't
happened yet, we'll instead use an in-browser Java compiler for this assignment
only.

> If you can't see the Online [Java Visualizer][] below, use the **Visualize
> Code** button in the caption.

[Java Visualizer]: https://cscircles.cemc.uwaterloo.ca/java_visualize/

{%- capture ourFirstProgram -%}
public class OurFirstProgram {
    public static void main(String[] args) {
        int x = 5;
        x = x + 1;
        System.out.println(x);
        int y = x;
        x = x + 1;
        System.out.println("x is: " + x);
        System.out.println("y is: " + y);
    }
}
{%- endcapture -%}
{% include java_visualizer.html embed=true height="460px"
    caption="Values and variables in the Online Java Visualizer"
    code=ourFirstProgram %}

There sure is a lot of weird stuff here, like `public class` and `public static
void main(String[] args)`. We'll discuss these in more detail later, but for
this assignment, you should ignore all of this mysterious garbage.

**Click on the 'Forward >' link twice.** You'll see an `x` appear in a blue box
the right with the value `5` once the line `int x = 5` executes. Perhaps
unsurprisingly, this statement assigns the value 5 to the variable `x`.

Unlike other programming languages (like Python, Scheme, and MATLAB), Java
variables have a static type. By this, we mean that `x` will only ever be able
to store an integer. If you tried to put a number like `5.3` into it, the code
would fail.

Also unlike these other languages, every statement in Java must be followed by
a semicolon. The semicolon is very important, as it tells Java where one
statement ends and another begins.

**Click forward again**, and you'll see that `x` has changed to `6`. **Click
forward one more time**, and you'll see that `x` is printed in the **Program
output** box below using the rather verbose command name `System.out.println`.
Yes, this is really how you print in Java.

Ordinarily, when you write Java programs, you won't be able to see into your
program's brain (i.e. there will be no blue box listing all the variables).
However, this visualizer is a pedagogical tool that makes such brain scanning
possible.

**Click forward until the program completes execution.** Everything should
behave more or less as you'd expect. If anything surprises you, please ask
on the ticketing system.

**Try editing the code and running it again.** Experiment and see what
happens as you tweak the program. If you have any
questions arise, ask on the ticketing system. Maybe try assigning a real number
(like 3.3) and see what occurs. (We promise your computer won't explode.)

## Conditionals

> Supplementary Reading: [Shewchuk](conditionals.txt)

### Basic Conditionals

{%- capture conditionals -%}
public class Conditionals {
    public static void main(String[] args) {
        int x = 5;

        if (x < 10)
            x = x + 10;

        if (x < 10)
            x = x + 10;

        System.out.println(x);
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="Conditional statements"
    code=conditionals %}

**Visualize the code, and step forward until the program completes. Then,
observe the flow of the program.** The `if` statement in java checks the
condition that you put inside parentheses, and if the result is true, it
executes the next statement below.

### Boolean Operators

#### Equality and Relational Operators

The equality and relational operators determine if one operand is greater than,
less than, equal to, or not equal to another operand.

`==`
: equal to

`!=`
: not equal to

`>`
: greater than

`>=`
: greater than or equal to

`<`
: less than

`<=`
: less than or equal to

The way that we've defined the operators here only holds true for numbers.
We'll revisit some of these operations later and define how they work for other
kinds of data as well.

> A common mistake is to use `=` (assignment) instead of `==` when testing if
> two numbers are equal.

#### Negation

The value of a boolean expression can also be negated using the `!` operator,
similar to how `not` in Python works.

{%- capture negation -%}
public class Negation {
    public static void main(String[] args) {
        int x = 5;

        System.out.println(x == 5);
        System.out.println(!(x == 5));
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="Negation"
   code=negation %}

Note that the expression needs to be parenthesized to say, "take the result of
evaluating `x == 5` and negate it."

#### Conditional Operators

Boolean expressions can be combined with the `||` conditional-OR and `&&`
conditional-AND operators. These are equivalent to Python's `or` and `and`
operators.

{%- capture logicalOperators -%}
public class LogicalOperators {
    public static void main(String[] args) {
        int x = 5;
        int y = 10;

        if (x < 10 && y > 5)
            System.out.println(x + y);
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="Logical operators"
   code=logicalOperators %}

For more complex expressions, we'll want to make sure Java gets the order of
operations right by introducing extra parentheses. **Add parentheses and
negation operators to the conditional expression below so that the program
executes the print statement.**

{%- capture logicalOperatorsNoParentheses -%}
public class LogicalOperators {
    public static void main(String[] args) {
        int x = 5;

        if (x + 1 > 6 && x * x != 25 || x + 5 < 10 && x / 2 > 0)
            System.out.println(x);
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="Logical operators practice"
   code=logicalOperatorsNoParentheses %}

They also short-circuit following the same rules as languages like Python.

### Curly Braces (and Conditionals)

It is also possible to execute multiple statements in response to a single
condition. We do this by wrapping the statements in curly braces.

{%- capture conditionalsWithBlocks -%}
public class ConditionalsWithBlocks {
    public static void main(String[] args) {
        int x = 5;

        if (x < 10) {
            System.out.println("I shall increment x by 10.");
            x = x + 10;
        }

        if (x < 10) {
            System.out.println("I shall increment x by 10.");
            x = x + 10;
        }

        System.out.println(x);
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="Conditional statements with blocks"
    code=conditionalsWithBlocks %}

Curly braces are very important in Java! Unlike Python, statements are grouped
by braces, and **not** by indentation. For an example of how this can go
terribly wrong, try running the following program, which is supposed to print
the absolute value of `x`. **Then try changing the value of `x` to a positive
number. Run it and make sure you understand why things go wrong.**

{%- capture printAbsoluteValue -%}
public class PrintAbsoluteValue {
    public static void main(String[] args) {
        int x = -5;

        if (x < 0)
            System.out.println("I should negate X");
            x = -x;

        System.out.println(x);
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="Missing curly braces"
    code=printAbsoluteValue %}

Unlike Python, most whitespace including indentation does not matter with
regards to the functionality of your program. In fact, you can get away with
replacing every whitespace in your entire program with a single space (given
that semicolons are the separators between statements), though this is a
horrible idea and we will be very sad if you write programs like the following
valid Java program:

```java
public class OurFirstProgram { public static void main(String[] args) { int x = 5; if (x < 10) { System.out.println("I shall increment x by 10."); x = x + 10; } if (x < 10) { System.out.println("I shall increment x by 10."); x = x + 10; } System.out.println(x); } }
```

### Curly Brace Standards

There are two common styles for curly braces:

```java
if (x > 5) {
    x = x + 5;
}
```

and,

```java
if (x > 5)
{
    x = x + 5;
}
```

Which of these two styles is a bit of a holy war. In this course, however, we
will stick to the first convention. Note that, in this example, we've wrapped
curly braces around a single statement, which isn't required in Java. In this
course, we'll *always* use curly braces, even if we have only one statement to
execute. This is to avoid bugs. Don't fret too much about these little details,
the automated style checker will yell at you if you do something uncouth.

For more than you ever wanted to know about indentation styles, see the
Wikipedia article on [Indent style][].

[Indent style]: https://en.wikipedia.org/wiki/Indent_style

## Else

The `else` keyword allows you to specify behavior that should occur if a
condition is false.

{%- capture elseStatements -%}
public class ElseStatements {
    public static void main(String[] args) {
        int x = 9;
        if (x - 3 > 8) {
            System.out.println("x - 3 is greater than 8");
        } else {
            System.out.println("x - 3 is not greater than 8");
        }
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="else statement"
    code=elseStatements %}

We can also chain else statements.

{%- capture chainedElseStatements -%}
public class ChainedElseStatements {
    public static void main(String[] args) {
        int dogSize = 20;
        if (dogSize >= 50) {
            System.out.println("woof!");
        } else if (dogSize >= 10) {
            System.out.println("bark!");
        } else {
            System.out.println("yip!");
        }
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="Chained else statements"
    code=chainedElseStatements %}

Note that in the code above, we used `>=`, which means greater than or equal.

## While

> Supplementary Reading: [Shewchuk](loops.txt)

The `while` keyword lets you repeat a block of code as long as some condition is
true.

{%- capture bottles99 -%}
public class Bottles {
    public static void main(String[] args) {
        int bottles = 99;
        while (bottles > 0) {
            System.out.println(bottles + " bottles of beer on the wall.");
            bottles = bottles - 1;
        }
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="while loops"
   code=bottles99 %}

**Try running this program, and watch what happens.** Note that as soon as the
code inside curly braces is completed, we head straight back to the while
condition.

Optionally, experiment a bit: Try and see what happens if you start bottles off
at -4. Also try and see what happens if you remove the line:
`bottles = bottles - 1`;

Important note: You should think of your program as running in order, line by
line. If the condition becomes false in the middle of the loop, the code does
not simply stop. So for example, the program below will print "-312 bottles of
beer on the wall." even though -312 is not greater than 0.

{%- capture bottles5 -%}
public class Bottles5 {
    public static void main(String[] args) {
        int bottles = 5;
        while (bottles > 0) {
            bottles = -312;
            System.out.println(bottles + " bottles of beer on the wall.");
        }
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="while loops still run line-by-line"
   code=bottles5 %}

## Doubles and Strings

Above, all of our variables have been of type `int`. There are many other types
that you can use in Java. Two examples of these are `double` and `String`.
`double` stores approximations of real numbers, and `String` stores strings of
characters. The program below simulates a race between Achilles and a Tortoise.
Achilles is twice as fast, so should overtake the Tortoise (who has a head
start of 100 distance units).

{%- capture achillesTortoise -%}
public class AchillesTortoise {
    public static void main(String[] args) {
        String a = "Achilles";
        String t = "Tortoise";
        double aPos = 0;
        double tPos = 100;
        double aSpeed = 20;
        double tSpeed = 10;
        double totalTime = 0;
        while (aPos < tPos) {
            System.out.println("At time: " + totalTime);
            System.out.println("    " + a + " is at position " + aPos);
            System.out.println("    " + t + " is at position " + tPos);

            double timeToReach = (tPos - aPos) / aSpeed;
            totalTime = totalTime + timeToReach;
            aPos = aPos + timeToReach * aSpeed;
            tPos = tPos + timeToReach * tSpeed;
        }
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="Achilles vs. the Tortoise"
   code=achillesTortoise %}

## Identity and Equality

Strings are a little different from the integers and doubles we've seen so far.
For one, they start with a capital letter: `String` rather than `string`.

In Java, this is a common naming convention. Strings are **objects** in Java.
We'll learn later in lab exactly what objects are, but the implication of
strings being *objects* is that we can now have **different objects with the
same value**.

In the example below, we create two different objects with the same string
value, "potato". We now discuss the ideas of identity and equality and how they
relate to these two objects:

- **Identity** defines two objects as being 'the same' if they really are
  referring to the same, exact object.
- **Equality**, on the other hand, defines two objects as being 'the same' if
  they contain the same value(s).

If you've learned Python before, this is exactly the same as the difference
between the `is` (identity) and `==` (equality) operators. In Java, however,
`==` **determines identity** while `.equals` is for equality. As you might
expect, this mix-up catches a lot of students off-guard.

**Visualize the following code to get a sense of what's going on.**

{%- capture stringEquality -%}
public class StringTest {
    public static void main(String[] arg) {
        String potato = "potato";

        System.out.println("Identity: is potato the same object as potato?");
        System.out.println(potato == potato);
        System.out.println("Equality: is potato considered equal to potato?");
        System.out.println(potato.equals(potato));

        // Another way to make a string "potato" but ensures that it is a new object
        String newPotato = new String("potato");

        System.out.println("Identity: is newPotato the same object as potato?");
        System.out.println(newPotato == potato);
        System.out.println("Equality: is newPotato considered equal to potato?");
        System.out.println(newPotato.equals(potato));
    }
}
{%- endcapture -%}
{% include java_visualizer.html embed=true height="580px"
   caption="String equality test" code=stringEquality %}

> When visiting the standalone [Java Visualizer][] website, make sure to enable
> the option to **Show String/Integer/etc objects, not just values** so that
> strings are pointed-to rather than displayed in the box. This is the
> representation we will be using in this class.

## Exercise 0

Finally! A chance to do something on your own.

Your goal is to create a program that prints the following figure. Your code
should use loops (i.e. shouldn't just be five print statements, that's no fun).

```text
*
**
***
****
*****
```

Some of the following lines of code may be helpful.

```java
col = col + 1;
int col = 0;
int row = 0;
int SIZE = 5;
row = row + 1;
System.out.print('*');
System.out.println('*');
System.out.println();
while (col <= row) {
while (col < row) {
while (row < SIZE) {
while (row <= SIZE) {
}
```

Run your code and verify that it works correctly by comparing it by eye to the
program above. In lab, we'll discuss more sophisticated ways of
verifying program correctness.

Save your code someplace (say by emailing it to yourself), as you'll need it
again soon.

## Defining Functions (a.k.a. Methods)

The following four pieces of code are all equivalent in Python, MATLAB, Scheme,
and Java. Each defines a function that returns the maximum of two values and
then prints the maximum of 5 and 15.

### Python

```python
def max(x, y):
    if (x > y):
        return x
    return y

print(max(5, 15))
```

### MATLAB

```matlab
function m = max(x, y)
    if (x > y)
        m = x
    else
        m = y
    end
end

disp(max(5, 15))
```

### Scheme

```cl
(define max (lambda (x y) (if (> x y) x y)))
(display (max 5 15)) (newline)
```

### Java

```java
public static int max(int x, int y) {
    if (x > y) {
        return x;
    }
    return y;
}

public static void main(String[] args) {
    System.out.println(max(10, 15));
}
```

Functions in Java, like variables, have a specific return type. The `max`
function has a return type of `int` (indicated by the word int right before the
function name). Also functions in Java are called methods, so we're going to
start calling them that from this moment on.

We refer to the entire string `public static int max(int x, int y)` as the
method's **signature**, as it lists the parameters, return type, name, and any
modifiers. Here our modifiers are `public` and `static`, though we won't learn
what these mean for a few days.

For this assignment, all methods are going to have "public static" at the front
of their signature. We'll talk more about this on in a future lab.

## Exercise 1

Starting from the default program in the [Online Java Visualizer][], create a
program with one additional method (in addition to the default main method that
is there when you open the visualizer).

[Online Java Visualizer]: http://cscircles.cemc.uwaterloo.ca/java_visualize/#

Name this new method `drawTriangle` and give it a return type of `void` (this
means that it doesn't return anything at all).

The `drawTriangle` method should take one parameter named `n`, and it should
print out a triangle exactly like your triangle from [exercise 0][], but `n`
asterisks tall instead of 5.

[Exercise 0]: #exercise-0

After writing `drawTriangle`, modify the main function so that it calls
`drawTriangle(10)`.

Depending on your programming background, you may find this task quite
challenging. We encourage you to work with others or post to Piazza. If you're
just confused about where to start, try adapting the code from the example for
`max` in Java above and rename the function `drawTriangle` and change its
return type from `int` to `void`.

## Arrays

> Supplementary Reading: [Shewchuk](arrays.txt)

Our final new syntax item of this introduction to Java is the array. Arrays are
like vectors in Scheme, lists in Python, and arrays in MATLAB.

The following four programs in Python, MATLAB, Scheme, and Java declare a new
array of the integers 4, 7, and 10, and then prints the 7.

### Python

```python
numbers = [4, 7, 10]
print(numbers[1])
```

### MATLAB

```matlab
numbers = [4 7 10]
disp(numbers(2))
```

### Scheme

```cl
(define numbers #(4 7 10))
(display (vector-ref numbers 1)) (newline)
```

### Java

```java
int[] numbers = new int[3];
numbers[0] = 4;
numbers[1] = 7;
numbers[2] = 10;
System.out.println(numbers[1]);
```

Or in an alternate (but less general) shorthand:

```java
int[] numbers = new int[]{4, 7, 10};
System.out.println(numbers[1]);
```

You can get the length of an array by using `.length`. For example, the
following code would print 3:

```java
int[] numbers = new int[]{4, 7, 10};
System.out.println(numbers.length);
```

## Exercise 2

Using everything you've learned so far on this homework, you'll now create a
function with the signature `public static int max(int[] arr)` that returns the
maximum value of an int array. You may assume that all of the numbers are
greater than or equal to zero.

Modify the code below so that `max` works as described. Furthermore, modify
`main` so that the `max` method is called on the given array and its max
printed out (in this case, it should print 22).

{%- capture arrayMax -%}
public class ArrayMax {
    /** Returns the maximum value from arr. */
    public static int max(int[] arr) {
        return 0;
    }
    public static void main(String[] args) {
        int[] numbers = new int[]{9, 2, 15, 2, 22, 10, 6};
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="Exercise 2" code=arrayMax %}

## For Loops

Consider the function below, which sums the elements of an array.

```java
public class ArraySum {
    /** Uses a while loop to sum a. */
    public static int whileSum(int[] a) {
        int sum = 0;
        int i = 0; // initialization
        while (i < a.length) { // termination
            sum = sum + a[i];
            i = i + 1; // increment
        }
        return sum;
    }
}
```

Programmers in the 1950s observed that it was very common to have code that
featured **initialization** of a variable, followed by a loop that begins by
checking for a **termination** condition and ends with an **increment**
operation. Thus was born the [for
loop](https://en.wikipedia.org/wiki/For_loop).

The `sum` function below uses a basic `for` loop to do the exact same job of
the `whileSum` function above.

{%- capture arraySum -%}
public class ArraySum {
    /** Uses a basic for loop to sum a. */
    public static int sum(int[] a) {
        int sum = 0;
        for (int i = 0; i < a.length; i = i + 1) {
            sum = sum + a[i];
        }
        return sum;
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="for loop array sum" code=arraySum %}

In Java, the [`for`
keyword](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html)
has the syntax below:

```java
for (initialization; termination; increment) {
    statement(s)
}
```

The initialization, termination, and increment must be semicolon separated.
Each of these three can feature multiple comma-separated statements, e.g.

```java
for (int i = 0, j = 10; i < j; i += 1) {
    System.out.println(i + j);
}
```

Comma separated `for` loops should be used sparingly.

## Exercise 3

Rewrite your solution to Exercise 2 so that it uses a `for` loop.

{%- capture arrayMax -%}
public class ArrayMax {
    /** Returns the maximum value from m using a for loop. */
    public static int forMax(int[] m) {
        return 0;
    }
    public static void main(String[] args) {
        int[] numbers = new int[]{9, 2, 15, 2, 22, 10, 6};
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="Exercise 3" code=arrayMax %}

## Break and Continue

Occasionally, you may find it useful to use the `break` or `continue` keywords.
The `continue` statement skips the current iteration of the loop, effectively
jumping straight to the increment condition.

For example the code below prints each string from an array three times, but
skips any strings that contain "horse".

{%- capture continueDemo -%}
public class ContinueDemo {
    public static void main(String[] args) {
        String[] a = {"cat", "dog", "laser horse", "ketchup", "horse", "horbse"};

        for (int i = 0; i < a.length; i += 1) {
            if (a[i].contains("horse")) {
                continue;
            }
            for (int j = 0; j < 3; j += 1) {
                System.out.println(a[i]);
            }
        }
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="continue keyword" code=continueDemo %}

By contrast, the `break` keyword completely terminates the innermost loop when
it is called. For example the code below prints each string from an array three
times, except for strings that contain horse, which are only printed once.

{%- capture breakDemo -%}
public class BreakDemo {
    public static void main(String[] args) {
        String[] a = {"cat", "dog", "laser horse", "ketchup", "horse", "horbse"};

        for (int i = 0; i < a.length; i += 1) {
            for (int j = 0; j < 3; j += 1) {
                System.out.println(a[i]);
                if (a[i].contains("horse")) {
                    break;
                }
            }
        }
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="break keyword" code=breakDemo %}

`break` and `continue` also work for `while` loops and `do-while` loops. If
you're curious about `do-while` loops, see the [official Java looping
tutorial](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html).

## Optional Exercise 4

This is a particularly challenging exercise, but strongly recommended.

Write a function `windowPosSum(int[] a, int n)` that replaces each element
`a[i]` with the sum of `a[i]` through `a[i + n]`, but only if `a[i]` is
positive valued. If there are not enough values because we reach the end of the
array, we sum only as many values as we have.

For example, suppose we call `windowPosSum` with the array `a = {1, 2, -3, 4,
5, 4}`, and `n = 3`. In this case, we'd:

- Replace `a[0]` with `a[0] + a[1] + a[2] + a[3]`.
- Replace `a[1]` with `a[1] + a[2] + a[3] + a[4]`.
- Not do anything to `a[2]` because it's negative.
- Replace `a[3]` with `a[3] + a[4] + a[5]`.
- Replace `a[4]` with `a[4] + a[5]`.
- Not do anything with `a[5]` because there are no values after `a[5]`.

Thus, the result after calling `windowPosSum` would be `{4, 8, -3, 13, 9, 4}`.

As another example, if we called `windowPosSum` with the array `a = {1, -1, -1,
10, 5, -1}`, and `n = 2`, we'd get `{-1, -1, -1, 14, 4, -1}`.

{%- capture breakContinue -%}
public class BreakContinue {
    public static void windowPosSum(int[] a, int n) {
        /** your code here */
    }

    public static void main(String[] args) {
        int[] a = {1, 2, -3, 4, 5, 4};
        int n = 3;
        windowPosSum(a, n);

        // Should print 4, 8, -3, 13, 9, 4
        System.out.println(java.util.Arrays.toString(a));
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="Exercise 4" code=breakContinue %}

Hint 1: Use two `for` loops.

Hint 2: Use `continue` to skip negative values.

Hint 3: Use `break` to avoid going over the end of the array.

## The Enhanced For Loop

Java also supports iteration through an array using an "enhanced for loop". The
basic idea is that there are many circumstances where we don't actually care
about the index at all. In this case, we avoid creating an index variable using
a special syntax involving a colon.

For example, in the code below, we do the exact thing as in `BreakDemo` above.
However, in this case, we do not create an index `i`. Instead, the String `s`
takes on the identity of each String in `a` exactly once, starting from `a[0]`,
all the way up to `a[a.length - 1]`.

{%- capture enhancedForBreakDemo -%}
public class EnhancedForBreakDemo {
    public static void main(String[] args) {
        String[] a = {"cat", "dog", "laser horse", "ketchup", "horse", "horbse"};

        for (String s : a) {
            for (int j = 0; j < 3; j += 1) {
                System.out.println(s);
                if (s.contains("horse")) {
                    break;
                }
            }
        }
    }
}
{%- endcapture -%}
{% include java_visualizer.html caption="Enhanced for loop"
   code=enhancedForBreakDemo %}

## Optional Exercise 5

Redo each of the exercises above using recursion. These get progressively more
and more challenging, but they're good practice for skills we'll need for the
next few weeks of the course.

- [Exercise 1](#exercise-1)
- [Exercise 2](#exercise-2), [Exercise 3](#exercise-3)
- [Optional Exercise 4](#optional-exercise-4)
