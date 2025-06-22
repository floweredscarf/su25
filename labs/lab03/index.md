---
layout: page
title: >-
    Lab 03: Intro to Objects and Primitives
has_children: true
parent: Labs
has_toc: false
has_right_toc: true
released: true
---

## [FAQ](faq)

Each assignment will have an FAQ linked at the top. You can also access it by
adding "/faq" to the end of the URL. The FAQ for Lab 3 is located
[here](faq).

{: .warning}
> **Warning:** this assignment is not officially released yet. This spec is subject to change until this warning disappears.

## Before You Begin

Run `git pull skeleton main` in your repo. You should get a `lab03/` folder.
For this, and later labs, we strongly recommend opening up the lab in IntelliJ.

**Note:** You may notice after pulling and setting up your workspace that two of the files, `PathHarness.java` and `PathTest.java`, will have orange coffee mugs next to their name instead of a blue circle. This is ok! We will revisit those files later in the lab.

Also, please note that this lab expects exposure to programming similar to that 
obtained in a course like CS 61A. We will begin diving deep into Java, and moving 
fast. If you are not as comfortable with this material, we recommend you take a 
look at this [Java Crash Course](https://cs61bl.org/su23/java/) as supplemental material.

### Learning Goals

This lab will focus on Java *primitives* and *objects*. Our goals for this lab will
be as follows:

-   Learn the different Java primitives and when to use them.
-   Learn how to define *classes* and use reference-typed variables.
-   Learn how to work with *box-and-pointer* diagrams to identify common
    usage errors.

## Primitives

As you may have noticed, when initializing a variable in Java you must put the
type next to it. Notice that this is different than Python, where you can simply assign
any arbitrary data type to a variable name.

```java
int number = 10;
```

The above line tells Java that the variable `number` is an **integer** that
holds the value `10`. A variable’s type tells us what kind of data is stored in that variable. In the case of the variable `number`, its data type is an integer. In Java, there are a predefined set of *primitive types*.

-   **boolean** : a `boolean` represents the two possible values of `true` and `false`.

-   **byte** : a `byte` represents an 8-bit signed integer.

-   **short** : a `short` represents a 16-bit signed integer.

-   **int** : an `int` represents a 32-bit signed integer. This is the most commonly
    used integer type and can hold values between -2,147,483,648 to
    2,147,483,647 inclusive.

-   **long** : a `long` represents a 64-bit signed integer. Sometimes when we need to
    express large integral numbers we will use this as it ranges from
    -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.

-   **float** : a `float` represents a 32-bit single precision floating point
    number. *Floating point numbers* can approximate a range of real numbers
    including integers, decimals, and special values like infinity. Floating point
    numbers can only represent a finite number of the infinitely many numbers in
    existence. Anything that cannot be represented is encoded as "NaN", which stands
    for "Not a Number". **How float determines what numbers can be represented is a 61C topic. For the purposes of this class, you can work under the assumption that every number can be represented as a float.**

-   **double** : a `double` represents a 64-bit double precision floating point
    number. Most of our decimal numbers will use this type as it provides
    greater precision.

-   **char** : a `char` represents an [ASCII](https://www.asciitable.com/) letter (like the English alphabet).

These words are *reserved* in Java. That is, we cannot use `int` and
`double` in any other context besides declaring a variable of that type. Note
that all primitives begin with a lowercase letter.

Declaring a primitive is very simple. For example, if we wanted to declare a
double, we can write the following.

```java
double pi = 3.14;
```

Certain primitives require an extra letter after the initial value. For example,
to declare a `long` or a `float`, we write the following. Notice the `L` and
the `f` that signify the end of the value.

```java
long num = 9223372036854775807L;
float num2 = 42.0f;
```

Finally, we can declare a `char` using a **single-quoted literal**. For example, if
we want to initialize variable `a` to the letter "a", we would write the following.

```java
char a = 'a';
```

We need not always initialize the value of a primitive. Sometimes, we don't
care about the value at that point in time, and only need a variable to use in
later code. We do so by *declaring* the following:

```java
char a;
double d;
```

Note that primitives have default values - we'll talk about this later.

So *declaring* a variable is like telling Java you have a variable of a certain
type. Java sets aside a little container of memory that can perfectly hold that
type. Once you've declared a variable, *initializing* a variable is when you
actually put a value inside that little container of memory. We can imagine
that these little magic memory boxes can only contain objects of a certain
type. So if you declare a variable of type `int`, and then try to initialize
its value to `false`, your code won't compile because `false` is not an `int`!

```java
int a;
int b;
a = 61; //This line will compile with no errors
b = false; //This line will error during compilation as 'b' is of type int and not boolean
```

## Objects

Java is an *object-oriented* language. This means that everything we want to
represent in Java is defined in terms of *objects*.

Objects are bundles of code that define the *state* and *behavior* of the
construct we wish to represent. Suppose we wish to represent a potato. A potato's
state can be described by its *variety* and *age*, and it also has behaviors such as
*grow* and *flower*.

Now suppose Erik and Alex both have potatoes; Erik has a Yukon Gold and Alex has
a Red Pontiac. Even though Erik and Alex have different varieties of potatoes, they are
both still potatoes. They each have an age, color and variety. Critically, we can
describe an entire group of Potatoes with a set of common descriptors.

In Java we define an Object via its *Class*. Erik's Yukon Gold and Alex's Red
Pontiac would then be called *instances* of the `Potato` class. Let's see how we can
implement a `Potato` class in Java.

### Example

For this section, we will be using the Potato code found below. This can also be found in
`lab03/src/Potato.java`.

```java
public class Potato {

    /* An instance variable representing the potato's species. */
    private String variety;
    /* An instance variable representing the potato's age. */
    private int age;

    /** A constructor that returns a very young russet burbank potato. */
    public Potato() {
        this.variety = "Russet Burbank";
        this.age = 0;
    }

    /** A constructor that allows you to specify its variety and age. */
    public Potato(String variety, int age) {
        this.variety = variety;
        this.age = age;
    }

    /** A getter method that returns the potato's type. */
    public String getVariety() {
        return this.variety;
    }

    /** A getter method that returns the potato's age. */
    public int getAge() {
        return this.age;
    }

    /** A setter method that sets the potato's age to AGE. */
    public void setAge(int age) {
        this.age = age;
    }

    /** A method that grows the potato. Note it increases its age by 1. */
    public void grow() {
        System.out.println("Photosynthesis!");
        this.age = this.age + 1;
    }

    /** Did you know potatoes can flower? No? Neither did I... */
    public void flower() {
        System.out.println("I am now a beautiful potato");
    }
}
```

We will also be looking at `lab03/src/Potato1.java` later on!

### Defining a Class

We've provided a sample `Potato` class in the skeleton files. The steps in this section show you how we made it!

To define a Java class, we make a new `.java` file and encompass the class's code with the following header:

```java
class Potato {
    /** Potato code goes here! */
}
```

There are two things to keep in mind when writing Java classes.

-   Java requires the class name to be the same as the file name. This is why
    the `Potato` class is written in `Potato.java`.

-   By convention, the name of a class always begin with a capital letter and is generally
    named using camel case (ex: `ThisIsCamelCase`)

### Constructors

Now, to initialize a `Potato` object, we must call its *constructor*. The
constructor is a special method that creates and returns a new instance of your
class. This method is where we will initialize all the variables associated
with the class's instance. Unlike other methods, there is **no** return type in
the constructor's signature, and it **must** have the same name as the class itself.
Although we do not specify a return type in the method name and there is no return statement, the constructor creates an instance of the class and returns it. This is a unique property of constructor methods.

It's possible to define a constructor that takes in no arguments.

```java
public Potato() {
    this.variety = "Russet Burbank";
    this.age = 0;
}
```

Creating a constructor that takes in no arguments lets us create a default case. Here, if the user doesn’t give us the type or age of the potato, we’re telling the computer to set the type to “Russet Burbank” and age to 0 by default. 

However, we can also give our user the option to specify arguments in our constructor.

```java
public Potato(String variety, int age) {
    this.variety = variety;
    this.age = age;
}
```

This constructor returns a `Potato` with its `variety` and `age` set to the
values given as arguments. Now we can construct potatoes such as erik's 3
year old Yukon Gold potato.

We will discuss how to declare objects in more detail during the **Boxes and Pointer Diagrams**
section.

{: .info}
> **Caveat:** if no constructors are defined in the object file, then the Java compiler will provide a *default constructor* that accepts no argument. However, if a constructor is defined, then the compiler will **not** provide a *default constructor*. Read more about it [here](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html).

### Instance Variables

Instance variables allow us to represent the state of an object and can be both
primitives or objects. The "has a" test is an easy way to see if something should
be an instance variable of an object. For example, a potato has an age and variety.
Thus, within our `Potato` class, we see that there are two
instance variables: `variety` and `age`.

```java
/* An instance variable representing the potato's species. */
private String variety;
/* An instance variable representing the potato's age. */
private int age;
```

As with any other variable, we must declare what type it is. The `String` keyword
tells us `variety` is a string object and `int` tells us the age is an integer
primitive.

Instance variables have *default values* that correspond to the type of the
variable. If instance variables are not initialized in the constructor or
elsewhere with a value, they will initially contain the default. These defaults
will correspond to a zero value. `0` for `int`, `float`, `double`, etc. `false`
for `boolean`, and `null` for `Object` types. **However, it is not good practice
to rely on default values, as it makes it harder to understand your code.**
Instead, you should explicitly initialize your instance variables.

We can (usually) access the age and variety of the Potato via dot notation.
This is similar to Python's dot notation, which you may have encountered in CS 61A.

```java
Potato eriksPotato = new Potato("Yukon Gold", 3); // erik's potato!
eriksPotato.variety; // returns the variety of erik's potato
eriksPotato.age; // returns the age of erik's potato
```

Notice that we had to first instantiate a new `Potato` object before we could
access `variety` or `age`. The order of the variables that we pass into the
`new Potato` call must match the order of the parameters of the constructor.
Remember that *instance variables* are particular to the object.
Thus we need to create an object first in order to have `variety` and `age`.
Also notice that we have both *declared* and *instantiated* `eriksPotato`
within the same line to make our code a little more compact. 

Doing something like:

```java
Potato eriksPotato;
eriksPotato = new Potato("Yukon Gold", 3);
```

is practically the same. You may want to declare a variable before instantiating it
if the initial assignment of the variable should not be set (e.g. we don't know that 
Erik's potato is currently 3 years old).

When writing object code within its class, we can also employ the `this` keyword.
Its usage is similar to that of `self` in Python.

```java
this.variety; // returns the current instance's variety
this.age; // returns the current instance's age
```

One notable difference, however, is that `this` cannot be reassigned whereas
`self` in Python can be reassigned.

Outside of the `Potato` class, we can’t use `this` to refer to `eriksPotato` since
we only use this to refer to the current instance while inside the class.
Instead, we're trying to refer specifically to `eriksPotato`.

We also have a `private` keyword placed in
front of the `variety` and `age` declaration. This means we cannot access
the `variety` and `age` via dot notation outside of `Potato.java`. We will see more
about why we may want to do this in the **Getter and Setter Method** section
later on.

Finally, it's important to stress that even though all instances of `Potato` will
have the variables `variety` and `age`, their values will be specific to each
instance of `Potato` - hence the name *instance variable*.

### Instance Methods

To facilitate behavior, we can define *instance methods*. For example, `Potato`
has defined in it the `grow()` method.

```java
/** A method that grows the potato. Note it increases its age by 1. */
public void grow() {
    System.out.println("Photosynthesis!");
    this.age = this.age + 1;
}
```

Like instance variables, we can access instance methods using dot notation as
well.

```java
eriksPotato.grow(); // Erik's potato grows!
``` 

We also have a few special instance methods prefixed by the words "get" and
"set". These are aptly named getters and setters, which we'll learn more about
below!

### Getter and Setter Methods

As we have seen, the `private` keyword limits our ability to access instance
variables directly. This is called an **access modifier** and we will be
discussing them in more detail later on in the course.

For now, just know that in general it is good practice to make instance
variables private. One consequence of making our instance variables private
is that we must now define instance methods to access them.

This is where we introduce getter and setter methods. Within `Potato` we have
these methods.

```java
/** A getter method that returns the potato's type. */
public String getVariety() {
    return this.variety;
}

/** A getter method that returns the potato's age. */
public int getAge() {
    return this.age;
}
```

The above two blocks are called *getter* methods since they **get** the value
of their respective instance variables for programs outside of `Potato.java`.
Of course, due to advancements in genetic modification technology, it is also
possible to **set** the age of our potato.

```java
/** A setter method that sets the potato's age to AGE. */
public void setAge(int age) {
    this.age = age;
}
```

This is called a *setter* method as it allows us to set the value of an instance
variable.

Interestingly enough, we don't have a setter method for the `variety` instance
variable. This is because until we develop the technology to support
spud-transmutation (#PotatoDreams), Erik's Yukon Gold potato will forever remain
a Yukon Gold potato.

Of course, this is important in an application sense because now external
programs cannot maliciously change the identity of a potato. Take a look at
`Potato1.java`

```java
/* An instance variable representing the potato's species. */
public String variety;
/* An instance variable representing the potato's age. */
public int age;
```

The `variety` and `age` are public, meaning we can write a program to
change the identity of Erik's potato.

```java
/* eriksPotato is an instance with variety = "Yukon Gold" */
eriksPotato.variety = "Red Pontiac"; // A POTATO IMPOSTER!
```

The practice of using getters and setters is called *information hiding* and it
prevents external programs from unintentionally (or intentionally!) changing
the value of our instance variables.

In one of exercises later, we will be considering a bank account. Without a doubt, we will
want the balance of our bank account to be private, so that other programs cannot simply set `account.balance = 0;`.

## Box and Pointer Diagrams

Throughout this class it will be extraordinarily helpful to draw pictures of the
variables in our programs to help us with debugging by visualizing the state and
changes of objects throughout the code. The diagrams we'll teach you
to use in this class are often referred to as *box and pointer* diagrams, which are
similar to the Environment Diagrams you saw in CS 61A.

Let's start off with something simple. When we declare a primitive, we draw a
box for it, and label the box with the type of primitive, and the name of the
variable. Here, primitives will be in red boxes. For example,

```java
int x;
```

![EmptyInt](img/EmptyInt.jpg)

(We could also have drawn a 0 in the box.)
When we assign a value to the primitive, we fill in the box with the value of
the primitive.

```java
x = 3;
```

![FullInt](img/FullInt.jpg)

Variables can also refer to objects. For example, a variable can refer to a `Potato`
instance. We can declare a `Potato` object the same way as we declare an `int`.

```java
Potato p;
```

This variable is called a *reference*, because it will refer to an object. When
we first declare the reference but don't assign an object to it like in the
code above, we say the reference contains nothing, or `null`. This also occurs
when an instance variable is not assigned a value in the constructor. Here's
how we draw it:

![NullRef](img/NullRef.jpg)

Here we're drawing references in green to emphasize that they are different
from primitives.

Now let's assign a reference to the `Potato` object by calling its
*constructor*. This *instantiates*, or creates, a new instance of the `Potato` class.
Instantiating an object via its constructor **always** requires the `new` keyword.

```java
p = new Potato();
```

Objects in Box and Pointer Diagrams are each drawn as their own separate boxes. Here, there is a large blue box that represents one instance of the Potato class. Inside the large blue box are smaller boxes that represent the instance variables of the class. In our example, the Potato class has one primitive variable, the int ‘age’, and one object variable, the String `variety`. Therefore there are two smaller boxes in the Potato box. Notice how the value for `age` is inside a red box because it is a primitive, just like int `x`.

![NewObj](img/NewObj.jpg)

Here an object is drawn in blue, to emphasize that it is different from a
primitive and a reference. We can now store primitives within the object as
instance variables!

**One critical thing about the object**: unlike the primitive integer, 3, drawn inside
the box for `x`, the `Potato` object is **not** drawn inside the variable `p`.
Instead `p` simply contains an arrow that points to the `Potato` object. This is
why `p` is called a reference or pointer because it just *refers* to the object
but *does not* contain it. The true value of the variable `p` is a **pointer** to
a `Potato` object rather than the `Potato` object itself. A pointer is essentially
just a location in memory where the actual `Potato` object is stored.

This is a very, very important distinction!

Of course, when we call the no argument constructor, it will initialize the `variety`
to `"Russet Burbank"` and the `age` to `0`. Our diagram looks like the following.

![TwoObjects](img/TwoObjects.jpg)

Is this what you expected?

Remember that a `String` in Java is an object, not a primitive. As a result, the
`String` instance variable representing the `variety` of the potato must contain
a pointer to the actual `String` object containing the name we've chosen. For the sake 
of simplicity we don't show the instance variables of the String object. Although it's very 
much out of scope for the purposes of this class, you can take a look at the [source code](https://github.com/openjdk/jdk/blob/master/src/java.base/share/classes/java/lang/String.java) for 
the String class in Java, if you're interested.

{: .info}
> For another explanation, you may read [Section 2.1](https://joshhug.gitbooks.io/hug61b/content/chap2/chap21.html)
from the CS 61B textbook, starting from the section titled "The Mystery of the Walrus" and stopping just before "The Law of the Broken Futon".

### Discussion: Intuition for Drawing Objects

See if you can come up with intuition as to why
these diagrams are drawn the way they are:

-   Why does it make sense that objects are not stored inside variables, but are
    only referred to them?
-   Why isn't the blue object box labeled with the name of the variable?

There aren't necessarily correct answers to these questions, so just see if you
can come up with explanations that make sense to you.

## Pass-by-Value

Java is **pass-by-value**. Methods are
given **copies** of the actual parameters during execution. The original parameters cannot
be changed by the method.

Consider the following code, right before
`tryToIncrement` returns.

{%- capture value -%}
public class passByValue{

    public static void tryToIncrement(int x) {
	      x = x + 1;
	}
	   
    public static void main(String[] args) {
	    int x = 10;
	    tryToIncrement(x);
    }
}

{%- endcapture -%}
{% include java_visualizer.html code=value %}

![PassByValue1](img/PassByValue1.jpg)

When we pass a variable into a method, we copy whatever is inside the box of the variable and put that copy into a new box in the method. For primitives, like x, we copy whatever is inside the box for x (in this case 10), and put that data into the method's **stack frame**, the space in memory that this method uses to track its variables. This means that, like we saw in tryToIncrement(), when we modify primitives in a method we modify the copy of that primitive, not the original.
For objects, this is different. Remember, in our box and pointer diagrams, the object itself is not stored inside the box for the object variable. Instead, what is stored is a pointer to the object in memory (represented by an arrow). Therefore, what is copied over is that pointer, not an entirely new copy of the object. In more technical terms, **when we pass in an object, what is copied is not the object itself, but the reference to the object**.

```java
public static void refresh(Potato p) {
    p.age = 0;
}

public static void main(String[] args) {
    Potato potat = new Potato("Red La Soda", 5);
    refresh(potat);
}
```

![PassByValue2](img/PassByValue2.jpg)

{%- capture pvso2 -%}
public class Potato {

    private String variety;
    private int age;

    public Potato() {
        this.variety = "Russet Burbank";
        this.age = 0;
    }

    public Potato(String variety, int age) {
        this.variety = variety;
        this.age = age;
    }

   
    public static void refresh(Potato p) {
    p.age = 0;
}

    public static void main(String[] args) {
        Potato potat = new Potato("Red La Soda", 5);
        refresh(potat);
}
}

{%- endcapture -%}
{% include java_visualizer.html embed=true height="500px" code=pvso2 %}

What is copied over into the parameter of the `refresh` method is not a copy of
the Potato object, but a copy of the reference (the arrow) to the Potato Object.

### `static`

There's something that we've been kind of waving off up until now: the `static`
keyword. In Java, `static` fields belong to the class instead of a particular
instance. We call these static fields or class variables. During execution,
only one instance of a static field exists throughout, no matter how many
instances of the class are created. You can think of them as living in their
own special space, away from each instance. Static fields can be referenced the
same as instance variables from within a instance method. They can also be
directly referenced as `ClassName.staticVariable`, or by the instance reference
(although this is not recommended for style). 

The code block below shows some of the different ways in which static and non-static methods and variables interact with each other. Read through the code and the comments to get a sense what is happening. Then, run the code using the link to the Java Visualizer and see if your predictions were correct.


{%- capture static -%}
public class Bicycle {

    // Non-static instance variables, each Bicycle(object) has its own copy
    private int speed;
    
    // Static class variable, shared by all Bicycles(objects)
    private static int numberOfBicycles = 0;

    /* Constructor, called when we create a new Bicycle object.
        can reference (use) both static and non-static variables */
    public Bicycle(int startSpeed) {
        speed = startSpeed;

        numberOfBicycles += 1;
    }

    /* Static methods, belong to the class, can only reference (use) static variables and methods. Can not use 'this' in the function body.*/
    public static int getNumberOfBicycles() {
        return numberOfBicycles;
    }

    /* Instance methods, belong to the object, can reference (use) both static and non-static variables and methods. Can use 'this' in the function body. */  
    public int getSpeed() {
        return this.speed;
    }
        
    public void speedUp(int increment) {
        this.speed += increment;
    }

    public static void main(String[] args){
        Bicycle b1 = new Bicycle(10); // create a new Bicycle object b1
        System.out.println("Number of bicycles: " + b1.getNumberOfBicycles()); // valid call to static method using instance reference
        Bicycle b2 = new Bicycle(10); // create a new Bicycle object b2
        System.out.println("Number of bicycles: " + b1.getNumberOfBicycles()); // Updated number of bicycles when called from b1
        System.out.println("Number of bicycles: " + b2.getNumberOfBicycles()); // valid call to same static method using instance reference
        System.out.println("Number of bicycles: " + Bicycle.getNumberOfBicycles()); // valid call to same static method using class name
        System.out.println("Speed of b1: " + b1.getSpeed()); // valid call to instance method using instance reference
        System.out.println("Speed of b2: " + b2.getSpeed()); // valid call to instance method using instance reference
        // System.out.println("Speed of b1: " + Bicycle.getSpeed()); // invalid call to instance method using class name
        b1.speedUp(10); // change the speed of b1, b2 is unaffected
        System.out.println("Number of bicycles: " + getNumberOfBicycles()); // valid call to static method when called from within the class
        // System.out.println("Speed of b1: " + speed); // invalid call to instance variable from within static method
        // System.out.println("Speed of b1: " + getSpeed()); // invalid call to instance variable from within static method

    }
}
{%- endcapture -%}
{% include java_visualizer.html code=static %}

We really recommend you play around with the code above, specifically in the main method, and see what happens when you change things. Use the Java Visualizer to help you understand what is happening.
You can also read the oracle documentation on [class variables](https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html) for more information. 

### The True Meaning of `this`

Did you notice that there was something different between the
`setAge` method and the `refresh` method? Look at the
code segments and think about why that may be.

`setAge` is an *instance method*, which means that it must always be called
through dot notation on an object. Instance methods always have a `this`
variable, which references the object that the method was called on. In
contrast, `refresh` is a static method (marked with the `static` keyword).
Static methods do *not* have a `this` reference in their frame; they belong to
the class rather than to an instance of the class.

We call being inside a static method during execution being in a *static
context*. You cannot directly reference instance variables from a static
context. Instead, you must do so through an object reference (due to the lack
of a `this` reference). Note that static methods can be called from a static
context (like in `main`) and do not need to be called with an instance
associated with them.


## Exercise: Account Management

The next several exercises involve modifications to the Account class, which models a bank account. You should’ve pulled the skeleton code for this class in the Getting Started section at the beginning of this lab. The file you will be working with is Account.java. Open IntelliJ to access this file.

Tests are also provided in the `tests/` folder, you can run `AccountTest.java` in Intellij
to check the correctness of your code. 


### Task: Modifying Withdrawal Behavior

The `withdraw` method is currently returns `void`. Modify it to
return a `boolean`: `true` if the withdrawal succeeds (along with actually
performing the withdrawal) and `false` if it fails.

### Task: Merging Accounts

Implement the `merge` method. This method should transfer all of the money from the
argument account to the current account. In other words, the argument account
balance should be zeroed while the current account's balance increases by the
argument's old balance. We've provided a skeleton of the method in
`Account.java`.

### Task: Overdraft Protection

A convenient feature of some bank accounts is *overdraft protection*: rather
than bouncing a check when the balance would go negative, the bank will deduct
the necessary funds from a second account. One might imagine such a setup for a
student account, provided the student's parents are willing to cover any
overdrafts (!). Another use is to have a checking account that is tied to a
savings account where the savings account covers overdrafts on the checking
account. In our system, we'll be keeping things simple with only one type of
account so we don't have to worry about student or savings accounts.

Implement and test overdraft protection for `Account` objects by completing the
following steps.

1.  Add a `parentAccount` instance variable to the `Account` class; this is the
    account that will provide the overdraft protection, and it may have
    overdraft protection of its own.
2.  Add a two-argument constructor. The first argument will be the initial
    balance as in the existing code. The second argument will be an `Account`
    reference with which to initialize the instance variable you defined in step
    1.
3.  In the one-argument constructor, set the parent account to `null`. We'd like
    to emphasize the fact that there is no parent if the one-argument
    constructor is used by explicitly setting `parentAccount` to `null`.
4.  Modify the `withdraw` method so that if the requested withdrawal can't be
    covered by this account, the difference is withdrawn from the parent
    account. This may trigger overdraft protection for the parent account, and
    then its parent, and so on. The number of accounts connected in this way may
    be unlimited. If the account doesn't have a parent or if the parent (and its
    parents and so forth) can't cover the withdrawal, the `withdraw` method
    should merely print an error message as before and not change any account
    balances.

Note: it is important to check if the parent account is null before executing
any changes to the account.

Here's an example of the desired behavior, with the `Account` object `teresa`
providing overdraft protection for the `Account` object `dom`. Recall this
means the `parentAccount` of `dom` is `teresa`.

Suppose, in each scenario below, `dom` has 100 as their balance while `teresa`
has 500 as their balance.

`dom` attempts to withdraw 50
: `dom` then has 50 remaining in their balance, while `teresa` still has 500.

`dom` attempts to withdraw 200
: `dom` then has 0 remaining in their balance, while `teresa` needed to cover
100 for `dom`, leaving 400 as their balance.

`dom` attempts to withdraw 700
: return false without changing either balance as the withdrawal is denied due
to insufficient funds.

We recommend approaching this problem recursively. Here are some questions that may help you work through the exercise:

1.  If we trigger overdraft protection, what should the new balance of this account be set to after a successful withdrawal?
2.  If we trigger overdraft protection, how much of the initial withdrawal total will the parent account be responsible for?
3.  How can you use the return value of `withdraw` to only deduct balance if the parent accounts can complete the withdrawal?

{: .info}
> To test your code, try copy and pasting the `Account` class into the [online Java Visualizer](https://cscircles.cemc.uwaterloo.ca/java_visualize/#). Make sure to add a `main` method with a few example cases like the ones provided above.

```java
Account teresa = new Account(500);
Account dom = new Account(100, teresa);
teresa.withdraw(50);
```
" %}

### Discussion: Merging Revisited

One proposed solution for merging accounts is the following:

```java
public void merge(Account other) {
    this.balance = this.balance + other.balance;
    other = new Account(0);
}
```

This doesn't work. Explain why not. Highlight the space below to reveal the answer.

<p><span style="color:white"><em>When we set `other = new Account(0);`, we lose 
information regarding the parent account of `other` and this is not intended behavior. </em></span>.</p>

## Exercise: Pursuit Curves

You will now create a class representing a pursuit curve.

*Pursuit curves* provide a powerful way to render curves on a computer. The
traditional method for drawing a path is to analytically define it via some
algebraic formula like $$y(t) = t^2$$ and trace it point-wise. Consider an
alternative where we define two points: the *pursuer* and the *pursued*.

Now suppose the pursued point (in black) follows some fixed path $$F(t)$$. Then the
pursuer (in red) will seek the pursued in the following manner:

![Pursuit](img/pursuit.gif)

We notice that the pursuer always follows the pursued along its tangent, which
gives some serious first order differential equation vibes. Letting the
pursuer's path be given by $$x(t)$$, then the closed form solution for its path is
given by the following equation:

![PursuitMath](img/PursuitMath.jpg)

Of course, we won't require you to solve a differential equation. In fact, let's
see what your task will be!

## Task: Implementing Pursuit Curves

Here's a getting started video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/Y04PPs44sAs?si=cKVAzuqhaeOsLdCL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Implement a simpler version of pursuit curves in order to create a
cool visual by filling out `Path.java`. An additional
file `PathHarness.java` is provided containing code that will render
your code in `Path.java` using Java's graphics framework, uncomment this file after implementing `Path.java`.

Also, testing code has been provided in `PathTest.java`. You can uncomment this file and run these tests in Intellij.

As with the previous assignments,
these tests are not entirely comprehensive. Feel free to add whatever testing code you desire.

`Path.java` will represent the path traveled by the pursuer. You will need to
keep track of the following two points:

-   `curr` will represent where the path currently ends. This will be
    a Point object.

-   `next` will represent where the path (and thus, `curr`) will travel to next. This
    will also be a Point object.

Next, you will need to define a constructor that, given an x and y coordinate,
sets `next` to the starting point (x, y). The constructor may look
something like this.

```java
public Path(double x, double y) {
    // more code goes here!
}
```

When the `Path` object is first constructed, `curr`
can be set to a `Point` instance with any coordinate so long as it is not `null`.
Try playing around with initial `curr` values to see what you can get!

Finally, you will need to implement the following instance methods.

| method name                      | return type | functionality                      |
|----------------------------------|-------------|------------------------------------|
| `getCurrX()`                     | `double`    | Returns the x-coordinate of `curr` |
| `getCurrY()`                     | `double`    | Returns the y-coordinate of `curr` |
| `getNextX()`                     | `double`    | Returns the x-coordinate of `next` |
| `getNextY()`                     | `double`    | Returns the y-coordinate of `next` |
| `getCurrentPoint()`              | `Point`     | Returns `curr`                     |
| `setCurrentPoint(Point point)`   | `void`      | Sets `curr` to `point`             |
| `iterate(double dx, double dy)`  | `void`      | Sets `curr` to `next` and updates the position of `next` to be `next` with movement defined by `dx` and `dy`.  |



A note on `iterate(double dx, double dy)`. If you were to implement a pursuit
curve in full generality, then this is where you would solve a differential
equation. But again, we won't have you do that. Instead we're giving you $$dx$$
and $$dy$$ where, `dx` represents the distance moved in the x-direction and `dy` represents the distance moved in the y-direction. 

To summarize your task:

-   Keep track of `curr` and `next`.

-   Implement a constructor taking in a `double x` and `double y`.

-   Implement the methods listed in the table above.

Here are some tips to keep you on the right track!

-   As `curr` and `next` are both `Point` objects, we've provided
    a class defining `Point`. Make sure to read through and understand what each
    method and constructor does!

-   When defining `iterate(double dx, double dy)` you may find that your
    `curr` and `next` are not being set to what they are coded to
    be. Think about object references and try drawing a box-and-pointer diagram.

{: .info}
> If you want to learn more about pursuit curves, [Wolfram's MathWorld provides a very interesting read](http://mathworld.wolfram.com/PursuitCurve.html).


## `.toString` and `.equals`

You may have also noticed the `.toString` and `.equals` methods in the `Point`
class, which have been copied here for your convenience. Both of these are
special methods which you will use often throughout the rest of this class.

```java
public class Point {
    public double x;
    public double y;

    public String toString() {
        return "(" + this.x + ", " + this.y + ")";
    }
}
```

The `toString` method is used by Java to determine how to represent an object
as a string, like when printing objects to display to the user. In the example
below, we create a new point at the origin, $$(0, 0)$$. When calling
`System.out.println`, Java needs to figure out what exactly to print, so it
invokes the `toString` method which returns `(0.0, 0.0)`. Then, that string is
displayed to the screen.

```java
Point p = new Point();
System.out.println(p);  // (0.0, 0.0)
```

Likewise, the `equals` method is used whenever a user calls `equals`. We might
define equality between two points as follows. We first verify if the object passed in 
is a Point and then check for equality based on the x and y values. 

```java
public class Point {
    public double x;
    public double y;

    public boolean equals(Object o) {
        if (o instanceof Point other){
            return (this.x == other.x) && (this.y == other.y);
        }
        else {
            return false;
        }
    }
}
```

It is very important to understand the difference between the equality and
identity of objects. If you have not already, read over the
[Identity and Equality section of the Java guide](../../java/index.md#identity-and-equality).
 Many tricky bugs can arise from this if you misuse these two related but different concepts.

## Conclusion

Coding is not easy! Keeping track of what references point to what, modifying code
(which you first have to understand), and systematically finding bugs are definitely
not skills that develop overnight. Make sure to practice! You can generate variants of the lab exercises to provide
extra practice.

The exercises on complicated uses of references are easy to produce and
can be verified online using tools such as
[Java Visualizer](http://cscircles.cemc.uwaterloo.ca/java_visualize/)
or by simply running your code through IntelliJ.

The internet is also a great source for more coding practice. Here's a short list
of websites where you can find problems:

- [Advent of Code](https://adventofcode.com/)
- [Project Euler](https://projecteuler.net/) (Warning: mathy)
- [Leetcode](https://leetcode.com/) (very common interview prep)

Many problems you see will rely on things we haven't learned yet. If you see
a problem that you don't know how to do, don't panic! We'll be covering a lot more 
data structures in this class that will help you solve them. 

For coding, practice is crucial so make sure to do so! Finally, if you or anyone you know
is struggling, let a TA know and we'll be more than happy to help.

### Deliverables

To quickly recap what you need to do for this lab:

-   Make sure you understand Box and Pointer Diagrams
-   `Account.java`
-   `Path.java`