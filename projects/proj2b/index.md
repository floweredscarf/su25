---
layout: page
title: "Project 2B: Ngordnet (Wordnet)"
nav_order: 4
parent: Projects
has_children: true
has_toc: false
has_right_toc: true
description: >-
  Project 2B spec.
released: true
---

## [FAQ](faq.md)

Each assignment will have an FAQ linked at the top. You can also access it by adding "/faq" to the end of the URL. The
FAQ for Project 2B is located
[here](faq.md).

## Checkpoint & Design Doc Due 3/21/2025

## Coding Due 4/4/2025

In this project, you'll complete your implementation of the NGordnet tool.

As this is a quite new project, there may be occasional bugs or confusion with the spec. If you notice anything of this sort, please post on Ed.

{: .danger}

> **IMPORTANT NOTE:** After you read the 2B spec, you may be tempted to start coding. Don't do this!
>
> Before implementing ANY code for 2B, complete the [Project 2B: Checkpoint](https://www.gradescope.com/courses/961758/assignments/5737910) and [Design Document](https://www.gradescope.com/courses/961758/assignments/5737948) before starting coding.

### Design Notes

When designing your project, think about all of the requirements in advance. Planning ahead will ensure you don't need to rewrite all of your code when you get to certain points in the project.

If you find yourself copy-pasting or repeating a lot of the same code you've already written, there is probably an opportunity to reuse it directly, or slightly modify it so you don't have to repeat yourself as often.

## Project Setup

{: .danger}
**THE SETUP FOR THIS PROJECT IS DIFFERENT THAN THE OTHER LABS / PROJECTS. PLEASE DO NOT SKIP THIS STEP!**

### Skeleton Setup

1. Similar to other assignments in this class, run `git pull skeleton main` to get the skeleton code for this project.
2. Download the `data` files for this project
   using [this link](https://drive.google.com/file/d/1Gr6kiSXQK0FUXW_hKbLKQs3Tzb0SRJSL/view?usp=sharing)
   and move them into your `proj2b` folder on the same level as `src`.
3. Copy your implementation from 2A for `ngrams`, including `TimeSeries` and `NGramMap`, into the `proj2b.src.ngrams` package.

{: .warning}
**If you did not complete 2A**, skip step 3 of the Skeleton Setup. We have provided a stripped-down solution for 2A in the skeleton files. It contains an implementation for `NGramMap` that supports the `countHistory` method, which should be sufficient for completing 2B. However, it does not contain an implementation for `TimeSeries`. Many parts of the skeleton files expect a `TimeSeries` class to be defined to compile, so you will have to either comment out these sections or add your own implementation of a `TimeSeries`.

{: .info}
In past semesters, some inefficient implementations of `NGramMap` and `TimeSeries` passed the 2A autograder, but failed on 2B. **We recommend restoring to the staff solution for 2A if you are experiencing autograder timeouts.**

{: .info}
If you replaced `NGramMap` with your own implementation but realized later that you would prefer to use the staff solution, you should `git restore` back to the original skeleton version (inspect your `git log`). You can read more about this in [Lab 4](https://sp25.datastructur.es/labs/lab04/). Alternatively, you can copy and paste from this part of the [skeleton repo](https://github.com/Berkeley-CS61B/skeleton-sp25/blob/main/proj2b/src/ngrams/NGramMap.java).

Once you are done, your `proj2b` directory should look like this:

```sh
proj2b
├── data
│   ├── ngrams
│   └── wordnet
├── src
│   ├── <2B helper files>
│   ├── browser
│   ├── demo
│   ├── main
│   ├── ngrams
│   │   ├── <Your NGramMap implementation from 2A>
│   │   └── <Your TimeSeries implementation from 2A>
│   └── plotting
├── static
└── tests
```

## Getting Started

{: .warning}
**IMPORTANT NOTE:** You should _really_ complete **[Project 2B: Checkpoint](https://www.gradescope.com/courses/961758/assignments/5737910)** first before starting coding, or even designing your project. We think this would be helpful for your understanding of the project. We will also require you to submit a [design document](https://docs.google.com/document/d/15j1vyx8zKwEi29JQ1Sd6Vl6R9AtbmJLWmL2BECFyx-w/edit?usp=sharing) to Gradescope. More details about the design document can be found in [Deliverables and Scoring](#deliverables-and-scoring).

{: .task}

> Complete **[Project 2B: Checkpoint](https://www.gradescope.com/courses/961758/assignments/5737910)**
>
> After finishing the checkpoint, complete and submit your **[Design Document](https://www.gradescope.com/courses/961758/assignments/5737948)**

This part of the project is designed for you to come up with efficient and correct design for your implementation. The design you come up with will be very important to handle these cases. Please read the 2B spec carefully before starting your design document.

The course staff has created a couple of introductory videos to the project and the starter code
available [here](https://www.youtube.com/playlist?list=PLNpmrGKEeMf727KwSrG8Ez1o3odK--o9i). Bear in mind we have changed the structure of the project so some information might be outdated!

We've also created two wonderful tools that you can (and should!) use to explore the dataset, see how the staff solution
behaves for specific inputs, and get expected outputs for your unit tests (see [Testing Your Code](#testing-your-code)).
We'll link them here, as well as in other relevant parts of the spec.

- [Wordnet Visualizer](https://www.qxbytes.com/wordnet/): Useful for visually understanding how synsets and hyponyms work and testing
  different words/lists of words for potential test case inputs. Click on the "?" bubbles to learn how to use the various
  features of this tool!
- [Staff Solution Webpage](https://ngordnet.datastructur.es/): Useful for generating expected outputs for different test
  case inputs. Use this to write your unit tests!

## Using the WordNet Dataset

Before we can incorporate WordNet into our project, we first need to understand the WordNet dataset.

[WordNet](http://en.wikipedia.org/wiki/WordNet) is a "semantic lexicon for the English language" that is used
extensively by computational linguists and cognitive scientists; for example, it was a key component in IBM's Watson.
WordNet groups words into sets of synonyms called synsets and describes semantic relationships between them. One such
relationship is the is-a relationship, which connects a **hypo**nym (more specific synset) to a **hyper**nym (more
general synset). For example, "change" is a **hypernym** of "demotion", since "demotion" is-a (type of) "change".
"change" is in turn a **hyponym** of "action", since "change" is-a (type of) "action". A visual depiction of some hyponym
relationships in English is given below:

![WordNet](wordnet-fig1.png "WordNet")

Each node in the graph above is a **synset**. Synsets consist of one or more words in English that all have the same
meaning. For example, one synset
is ["jump, parachuting"](http://wordnetweb.princeton.edu/perl/webwn?o2=&o0=1&o8=1&o1=1&o7=&o5=&o9=&o6=&o3=&o4=&s=jump&i=6&h=000010000000000000000000#c)
, which represents the act of descending to the ground with a parachute. "jump, parachuting" is a hyponym of "descent",
since "jump, parachuting" is-a "descent".

Words in English may belong to multiple synsets. This is just another way of saying words may have multiple meanings.
For example, the word "jump" also belongs to the
synset ["jump, leap"](http://wordnetweb.princeton.edu/perl/webwn?o2=&o0=1&o8=1&o1=1&o7=&o5=&o9=&o6=&o3=&o4=&s=jump&i=2&h=100000000000000000000000#c)
, which represents the more figurative notion of jumping (e.g. a jump in attendance) rather the literal meaning of jump
from the other synset (e.g. a jump over a puddle). The hypernym of the synset "jump, leap" is "increase", since "jump,
leap" is-an "increase". Of course, there are other ways to "increase" something: for example, we can increase something
through "augmentation,"
and thus it is no surprise that we have an arrow pointing downwards from "increase" to "augmentation" in the diagram
above.

Synsets may include not just words, but also what are known as [collocations](http://en.wikipedia.org/wiki/Collocation).
You can think of these as single words that occur next to each other so often that they are considered a single word,
e.g. [nasal_decongestant](http://wordnetweb.princeton.edu/perl/webwn?s=nasal+decongestant+&sub=Search+WordNet&o2=&o0=1&o8=1&o1=1&o7=&o5=&o9=&o6=&o3=&o4=&h=)
. To avoid ambiguity, we will represent the constituent words of collocations as being separated with an underscore \_
instead of the usual convention in English of separating them with spaces. For simplicity, we will refer to collocations
as simply "words" throughout this document.

A synset may be a hyponym of multiple synsets. For example, "actifed" is a hyponym of both "antihistamine" and "
nasal_decongestant", since "actifed" is both of these things.

{: .info}

> If you're curious, you can browse the Wordnet database
> by [using the web interface](http://wordnetweb.princeton.edu/perl/webwn?o2=&o0=1&o8=1&o1=1&o7=&o5=&o9=&o6=&o3=&o4=&r=1&s=sturgeon&i=3&h=1000#c)
> , though this is not necessary for this project.

## Hyponyms (Basic Case)

### Setting up a HyponymsHandler

1. In your web browser, open the `ngordnet.html` file in the `static` folder. As a refresher, you can find how to do that [here](../proj2a/index.md#historytexthandler) in bullet point 1. You'll see that there is a new button: "Hyponyms". Note that there is also a new input box called `k`.

2. Try clicking the Hyponyms button. You'll see nothing happens (and if you open the developer tools feature of your web
   browser, you'll see that your browser shows an error).

In Project 2B, your primary task is to implement this button, which will require reading in a different type of dataset
and synthesizing the results with the dataset from Project 2A. Unlike 2A, it will be entirely up to you to decide what
classes you need to support this task.

1. Edit the file called `HyponymsHandler` to simply return the word "Hello!" when the user clicks the
   Hyponyms button in the browser. You'll need to make the `HyponymsHandler` class extend
   the `NgordnetQueryHandler` class. See your other Handler classes for examples. Make sure when you register your
   handler that you use the string "hyponyms" as the first argument to the `register` method, and not "hyponym".
2. Start by opening your `ngordnet.main.Main.java` file.
3. Once you've modified `Main` so that your new handler is registered to handle hyponyms requests, start up `Main` and
   try clicking the Hyponyms button in your web browser again. You should see text appear that says "Hello".

{: .info}
If you see some error like "Could not load file `some_file_here.txt`", it probably means that your project is not set up correctly. Be sure that you have the same structure as stated in the [Project Setup](#project-setup) section.

### Hyponyms Handler (Basic Case)

Next, you'll create a partial implementation of the Hyponyms button. For now, this button should:

- Assume that the "words" entered is only a single word.
- Ignore startYear, endYear, and k.
- Return a string representation of a list of the hyponyms of the single word, including the word itself. The list
  should be in **alphabetical order**, with **no repeated words**.

For example, suppose the WordNet dataset looks like the diagram below (given to you as the input files `synsets11.txt`
and `hyponyms11.txt`). Suppose that the user enters "descent" and clicks on the Hyponyms button.

![fig 1](wordnet-fig1.png)

In this case, the output of your handler should be the string representation of a list containing "descent", "jump"
and "
parachuting", i.e `[descent, jump, parachuting]`. Note that the words are in alphabetical order.

As another example, suppose we're using a bigger dataset such as the one below (given to you as the input
files `synsets16.txt` and `hyponyms16.txt`):

![synsets16](wordnet-fig3.png)

Suppose the user enters "change" and clicks on the Hyponyms button. In this case, the hyponyms are all the words in the
blue nodes in the diagram below:

![synsets16-change-hyponyms](wordnet-fig3-change-hyponyms.png)

That is the output
is `[alteration, change, demotion, increase, jump, leap, modification, saltation, transition, variation]`. Note that
even though "change" belongs to two different synsets, it only appears once.

**Note**: Try not to overthink this. Specifically, observe that the output **does
not** include:

- Synonyms of synonyms (e.g. does not include `"adjustment"`)
- Hyponyms of synonyms (e.g. does not include `"conversion"`)
- Hyponyms of other definitions of hyponyms (e.g. does not include `"flashback"`, which is a hyponym of another
  definition of `"transition"`)

{: .task}

> Implement `HyponymsHandler.java` and any helper classes.
>
> **Note:** Please read the tips below, since you shouldn't be writing all of your code in this class.

{: .warning}

> To complete this task, you'll need to decide what classes you need to create to support the `HyponymsHandler`. **DO NOT
> DO ALL THE WORK IN HYPONYMS HANDLER.** Instead, you should have helper classes. For example, in 2A, to handle the \"History\"
> button, we created an `NGramMap` class. You'll want to do something similar in 2B, with your own classes.
>
> You'll also need to understand the input format of the WordNet dataset. This description is
> given in the section below.

{: .danger}

> For this part, you may NOT import any existing graph library into your code. That is you can't import, for example, the
> graph implementations from the optional Princeton algorithms textbook. Instead, you should build your own graph class or
> classes.

#### Tips

- Just like 2A's NGramMap, you'll want your helper classes to only parse the input files once, in the constructor. **DO NOT
  CREATE METHODS WHICH HAVE TO READ THE ENTIRE INPUT FILE EVERY TIME THEY ARE CALLED.** This will be too slow!
- We strongly recommend creating at least two classes for this part of the project as follows: One which implements the
  idea of a directed graph. One which reads in the WordNet dataset and constructs an instance of the directed graph
  class. This second class should also be able to take a word and return its hyponyms. You may also want additional
  helper classes that represent the idea of a traversal but this is not required - you can implement your traversal within your graph class as well.
- Don't worry about writing Truth tests yet, we'll talk about how to do that later in the spec. Simply use the web front
  end to check the two input examples ("descent" and "change") from the diagrams above for `synsets16.txt` and
  `hyponyms16.txt`.
- While you can (and should) write unit tests for the helper classes/methods that you create for this project, another
  good way to test and see what's going on with your code is to simply run `Main.java`, open `ngordnet.html`, enter some
  inputs into the boxes, and click the "Hyponyms" button. You may find visual debugging can lead to some useful
  discoveries in this project.

### WordNet File Format

We now describe the two types of data files that store the WordNet dataset. These files are in comma separated format,
meaning that each line contains a sequence of fields, separated by commas.

- File Type #1: List of noun synsets. The file `synsets.txt` (and other smaller files with `synset` in the name) lists all
  the synsets in WordNet. The first field is the synset id (an integer), the second field is the synonym set (or synset),
  and the third field is its dictionary definition. For example, the line

       6829,Goofy,a cartoon character created by Walt Disney

  means that the synset `{ Goofy }` has an id number of 6829, and its definition is "a cartoon character created by Walt
  Disney". The individual nouns that comprise a synset are separated by spaces (and a synset element is not permitted to
  contain a space). The S synset ids are numbered 0 through S − 1; the id numbers will appear consecutively in the
  synset file. The id numbers are useful because they also appear in the hyponym files, described as file type #2.

- File Type #2: List of hyponyms. The file `hyponyms.txt` (and other smaller files with hyponym in the name) contains
  the hyponym relationships: The first field is a synset id; subsequent fields are the id numbers of the synset's direct
  hyponyms. For example, the following line

      79537,38611,9007

  means that the synset 79537 ("viceroy vicereine") has two hyponyms: 38611 ("exarch") and 9007 ("Khedive"),
  representing that exarchs and Khedives are both types of viceroys (or vicereine). The synsets are obtained from the
  corresponding lines in the file `synsets.txt`:

      79537,viceroy vicereine,governor of a country or province who rules...
      38611,exarch,a viceroy who governed a large province in the Roman Empire
      9007,Khedive,one of the Turkish viceroys who ruled Egypt between...

  There may be more than one line that starts with the same synset ID. For example, in `hyponyms16.txt`, we have

      11,12
      11,13

  This indicates that both synsets 12 and 13 are direct hyponyms of synset 11. These two could also have been combined
  on to one line, i.e. the line below would have the exact same meaning, namely that synsets 12 and 13 are direct
  hyponyms of synset 11.

      11,12,13

  You might ask why there are two ways of specifying the same thing. Real world data is often messy, and we have to deal
  with it.

### Suggested Steps to Take

To get the "Hyponyms" button working you'll need to:

- Develop a **graph class**. If you aren't familiar with this data structure, take a look at lectures 22 and 23. You
  should test this with operations that are independent of the given data files. For example, our tests evaluated that
  our `createNode` and `addEdge` functions yielded appropriate graphs by using our graph classes's `getNodes`
  and `neighbors` functions. For inspiration, you can check out [Lecture 22](https://docs.google.com/presentation/d/1Gyke5ZMrgcMuBTa7qHAoklWZB3yf_yqQAymK2nV-Nqs/edit) and [23](https://docs.google.com/presentation/d/1NKWnXSJ8pUn1E2Cw6zidxMRuXf_aINKCpW7XpEkyz6c/edit).
  <!--- TODO FIX LECTURE LINKS WHEN THEY COME OUT-->
- Write code that **converts the WordNet dataset files into a graph**. This could be part of your graph class, or it
  could be a class that uses your graph class.
- Write code that takes a word, and uses a **graph traversal** to find all hyponyms of that word in the given graph.

We strongly recommended writing tests that evaluate queries on the examples above (for example, you might look at the
hyponyms of "descent" in synsets11/hypernyms11, or the hyponyms of "change" in synsets16/hypernyms16).

Tests should be written at a level of abstraction appropriate to what they're evaluating. For example, we have a class
called `TestGraph` that evaluates various aspects of our `Graph` class.

Or as another example, our code has a class called `TestWordNet` containing the function below.

```java
@Test
public void testHyponymsSimple(){
    WordNet wn=new WordNet("./data/wordnet/synsets11.txt","./data/wordnet/hyponyms11.txt");
    assertThat(wn.hyponyms("antihistamine")).isEqualTo(Set.of("antihistamine","actifed"));
}
```

Note that your WordNet class may not have the same functions as ours so the test shown will probably not work verbatim with
your code. Note that our test does NOT use an `NGramMap` anywhere, nor is it using a `HyponymsHandler`, nor is it directly
invoking an object of type `Graph`. It is specifically tailored to testing the `WordNet` class. **Relying on only
browser tests will be incredibly frustrating (and slow!). Use your JUnit skills to build confidence in the foundational
abstractions that you build (e.g. Graph, WordNet, etc.).**

### Design Tips

This project involves having to do all sorts of different lookups, graph operations, and data processing operations.
There is no one right way to do this.

Some example lookups that you might need to perform:

- Given a word (e.g. “change”), what nodes contain that word?
  - Example in synsets16.txt: change is in synsets 2 and 8
- Given an integer, what node goes with that index?
  - Necessary for processing hyponyms.txt. For example in hyponyms16.txt, we know that the node with synset 8 points
    at synsets 9 and 10, so we need to be able to find node 8 to get its neighbors.
- Given a node, what words are in that node?
  - Example in synsets16.txt: synset 11 contains alteration, modification, and adjustment

Some example graph operations you might need to perform:

- Creating a node, e.g. each line of synsets16.txt contains the information for a node.
- Adding an edge to a node, e.g. each line of hyponyms16.txt contains one or more edges that should be added to the
  corresponding node.
- Finding reachable vertices, e.g. the vertices reachable from vertex #7 in hyponyms16.txt are 7, 8, 9, 10.

Your life will be a lot easier if you select instance variables and/or data structures for your classes that naturally help solve all six of
the problems above.

Some example data processing operations:

- Given a collection of things, how do you find all non-duplicate items? (Hint: There is a data structure that makes
  this very easy and efficient). Don’t be afraid to also Google documentation for the data structure that you choose
  (e.g. if you choose to use a TreeMap for whatever reason, feel free to look up “TreeMap methods java”, “Map methods
  java”, or “Collection methods java”, etc).
- Given a collection of things, how do you sort them? (Hint: Google how to sort the collection that you’re using)

{: .warning}

> Also, a reminder from proj2a: Deeply nested generics are a warning sign that you are doing something too complicated.
> Either find a simpler way or create a helper class to help manage the complexity. For example, if you find yourself
> trying to use something like Map<Set<Set<..., you have started a walk down an unnecessarily difficult path.

{: .warning}

> As usual, if you have a design that is painful and with which you cannot make progress, don't be afraid to delete your
> existing instance variables and try again. The hard part of this project is the design, not the programming. You can
> always use git to recover your old design if you decide you actually liked it.

## Handling Lists of Words

Your next task is to handle lists of words. As an example, if the user enters "change, occurrence" for the diagram
below, we should only return common hyponyms of each word,
i.e. `[alteration, change, increase, jump, leap, modification, saltation, transition]`. "Demotion" and "variation" are not
included because they are not hyponyms of both words; specifically, they are not hyponyms of "occurrence".

![synsets16-two-word-query](wordnet-fig3-two-word-query.png)

As you can see, we only want to return words which are hyponyms of ALL words in the list. Furthermore, note that the
list of words provided by the user can include more than just 2 words, even though our examples in this spec do not.

Note that it is possible for two words to share hyponyms without necessarily sharing nodes. Take a look at this example. If the user enters "car, bug" for the diagram below, we should get `[beetle]`, not `[]` (empty list)! This example shows that we are getting the intersection of **words**, not **nodes**.

![wordnet-fig](wordnet-fig.png)

For some more examples which demonstrate the usefulness of this feature, let's say we are using the full `synsets.txt` and
`hyponyms.txt`.

- Entering "video, recording" in the words box and clicking "Hyponyms" should display
  `[video, video_recording, videocassette, videotape]`, as these are all the words which are hyponyms of "video" and "recording".
- Entering "pastry, tart" in the words box and then clicking "Hyponyms" should display
  `[apple_tart, lobster_tart, quiche, quiche_Lorraine, tart, tartlet ]`.

{: .task}
Modify your `HyponymsHandler` and the rest of your implementation to deal with the List of Words case.

{: .warning}
To test this part of your code, we recommend manually constructing examples using `synsets16.txt` and `hyponyms16.txt`
and using the provided front end to evaluate correctness.

## Handling `k != 0`

Above, we handled the situation where `k == 0`, which is the default value when the user does not enter a `k` value.

Your required task is to handle the case where the user enters `k`. `k` represents the maximum number of hyponyms
that we want in our output. For example, if someone enters the word "dog", and then enters `k = 5`, your code would
return at most 5 words.

To choose the 5 hyponyms, you should return the `k` words which occurred the most times in the time range requested. For
example, if someone entered `words = ["food", "cake"]`, `startYear = 1950`, `endYear = 1990`, and `k = 5`, then you would
find the 5 most popular words in that time period that are hyponyms of both food and cake. Here, the popularity is
defined as the total number of times the word appears over the entire time period requested. The words should then be returned in
alphabetical order. In this case, the answer is `[cake, cookie, kiss, snap, wafer]` if we're
using `top_14377_words.csv`, `total_counts.csv`,
`synsets.txt`, and `hyponyms.txt`. (The autograder and
[staff solution](https://ngordnet.datastructur.es) doesn't use these files,
which is why they return empty lists for this query.)

{: .danger}
Be sure you are getting the words that appear with the highest _counts_, not the highest _weights_. Otherwise, you will run into issues that are very difficult to debug!

Note that if the frontend doesn't supply a year, default values of startYear = 1900 and endYear = 2020 are provided by
`NGordnetQueryHandler.readQueryMap`.

It might be hard to figure out the hyponyms of words with `k != 0` on the big files, so we are providing data that is easier to visualize! Below, you'll see a modified version of EECS class requirements, inspired by [HKN](https://hkn.eecs.berkeley.edu/courseguides). We have also provided the data that represents the graph below (`frequency-EECS.csv`, `hyponyms-EECS.txt`, `synsets-EECS.txt`). If someone entered `words = ["CS61A"]`, `startYear = 2010`, `endYear = 2020`, and `k = 4`, you should receive `"[CS170, CS61A, CS61B, CS61C]"`. This `frequency-EECS.csv` is a bit different from the previous one since it has values with the same frequencies. We highly recommend that you take a look at `frequency-EECS.csv`. While you are designing your implementation, in mind that we can give you words with the same frequencies.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFw2oz5FIMrFRhh9yL8Ylun%2F2C%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3Dn6fDDOrwY4Lb9Gbi-1" allowfullscreen></iframe>

If a word never occurs in the time frame specified, i.e. the count is zero, it should not be returned. In other words,
if `k > 0`, we should not show any words that do not appear in the `ngrams` dataset.

If there are no words that have non-zero counts, you should return an empty list, i.e. `[]`.

If there are fewer than `k` words with non-zero counts, return only those words. For example if you enter the word
`"potato"` and enter `k = 15`, but only 7 hyponyms of `"potato"` have non-zero counts, you'd return only 7 words.

This task will be a little trickier since you'll need to figure out how to pass information around so that the `HyponymsHandler` knows how to access a useful `NGramMap`.

{: .task}

> Modify your `HyponymsHandler` and the rest of your implementation to deal with the `k != 0` case.

{: .warning}
The EECS-course guide is not available on the interactive web staff solution so it won't return anything if you give the input `CS61A`. However, **the autograder will provide the query information and expected response for any failing test using the EECS dataset**. We recommend using this information to replicate the autograder tests locally and debug from there.

{: .danger}

> **DO NOT MAKE A STATIC NGRAMMAP FOR THIS TASK!** It might be tempting to simply make some sort of
> `public static NGramMap` that can be accessed from anywhere in your code. This is called a \"global variable\".
>
> We strongly discourage this way of thinking about programming, and instead suggest that you should be passing an
> NGramMap to either constructors or methods. We'll come back to talking about this during the software engineering
> lectures.

### Tips

- Until you use the autograder, you'll need to construct your own test cases. We provided one
  in the previous section: `words = ["food", "cake"]`
  , `startYear = 1950`, `endYear = 1990`, `k = 5`.
- When constructing your own test cases, consider making your own input files. Using the large input files we provide is
  extremely tedious.

## Deliverables and Scoring

For Project 2B, the only required deliverable is the `HyponymsHandler.java` file, in addition to any helper classes.
However, we will not be directly grading these classes, since they can vary from student to student.

- [Project 2B Checkpoint](https://www.gradescope.com/courses/961758/assignments/5737910/): 2.5 points - **Due March 21st**
- [Project 2B Design Document](https://www.gradescope.com/courses/961758/assignments/5737948/): 2.5 points - **Due March 21st**
- [Project 2B Coding](https://www.gradescope.com/courses/961758/assignments/5737804/): 80 points - **Due April 4th**
  - `HyponymsHandler` k = 0, single word, single query per test
  - `HyponymsHandler` k = 0, single word, multiple queries per test
  - `HyponymsHandler` k = 0, multiple words, single query per test
  - `HyponymsHandler` k = 0, multiple words, multiple queries per test
  - `HyponymsHandler` k != 0, single word, single query per test
  - `HyponymsHandler` k != 0, single word, multiple queries per test
  - `HyponymsHandler` k != 0, multiple words, single query per test
  - `HyponymsHandler` k != 0, multiple words, multiple queries per test
  - `HyponymsHandler` Invalid Inputs

As noted above, you will have to turn in your design document. This will be worth 2.5 points and it is due March 21st. The design document's main purpose is to serve as a foundation for your project. It is important to think and ideate before coding.
What we are looking for in the design document:

- Identify the data structures we have learned in the class that you will be using in your implementation.
- Pseudocode / general overiview of your algorigthm for your implementation.

Your design document should be around 1 - 2 pages long. Design document will be mainly graded on effort, thought, and completion.

Please make a copy of [this template](https://docs.google.com/document/d/15j1vyx8zKwEi29JQ1Sd6Vl6R9AtbmJLWmL2BECFyx-w/edit?usp=sharing) and submit to [Gradescope](https://www.gradescope.com/courses/961758/assignments/5737948).

Don't worry if you decide to change your design document after. You are free to do so! We want you to think about the implementation before coding therefore we require you to submit your design as the part of the project.

The token limiting policy for this project will be as follows: You will start with 8 tokens, each of which has a 24-hour refresh time.

## Testing Your Code

We've provided you with two short unit test files for this project in the `proj2b/tests` directory:

- `TestOneWordK0Hyponyms.java`
- `TestMultiWordK0Hyponyms.java`

The two provided test files correspond to the first two cases that you solved in this project, that is:

- Finding hyponyms of a single word where k = 0.
- Finding hyponyms of multiple words where k = 0 (e.g. `gallery, bowl`).

You will need to complete `AutograderBuddy.java` to test your code. See the [Submitting Your Code](#submitting-your-code) section for more details.

**These test files are not comprehensive**; in fact, they each only contain one sanity check test. You should fill
each file with more unit tests, and also use them as a template to create two new test files for the respective cases.

If you need help figuring out what the expected outputs of your tests should be, you should use the two tools that we
linked in the [Getting Started](#getting-started) section.

## Debugging Tips

- Use the small files while testing! This decreases the startup time to run `Main.java` and makes it easier to reason about the code. If you're running `Main.java`, these files are set in the first few lines of the `main` method. For unit tests, the file names are passed into the `getHyponymsHandler` method.
- You can run `Main.java` with the debugger to debug different inputs quickly. After clicking the “Hyponyms” button, your code will execute with the debugger - breakpoints will be triggered, you can use the variables window, etc.
- There are a lot of moving parts to this project. Don’t start by debugging line-by-line. Instead, narrow down which function/region of your code is not working correctly then search more closely in those lines.
- Check the [FAQ](faq.md) for common issues and questions.

## Submitting Your Code

Throughout this assignment, we've had you use your front end to test your code. Our grader is not sophisticated enough
to pretend to be a web browser and call your code. Instead, we'll need you to provide a method in the
`proj2b.src.main.AutograderBuddy` class that provides a handler that can deal with hyponyms requests.

When you ran `git pull skeleton main` at the start of this spec, you should have received a file called `AutograderBuddy.java`.

Open `AutograderBuddy.java` and fill in the `getHyponymsHandler` method such that it returns a `HyponymsHandler`
that uses the four given files. Your code here should be quite similar to your code in `Main.java`.

Now that you've created `proj2b.src.main.AutograderBuddy`, you can submit to the
autograder. If you fail any tests, you should be able to replicate them locally as JUnit tests by building on the test
files above. If any additional datafiles are needed, they will be added to this section as links.

## Acknowledgements

The WordNet part of this assignment is loosely adapted from Alina Ene and Kevin Wayne's
[Wordnet assignment](http://www.cs.princeton.edu/courses/archive/fall14/cos226/assignments/wordnet.html) at Princeton
University.
