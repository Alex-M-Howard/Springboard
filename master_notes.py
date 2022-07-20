
'''
Intro
The Dark Side

    We’ve seen a lot of client-side stuff: HTML, CSS, & JS. There’s even more stuff to learn!

    It’s time for us to spend some time on the other, more mysterious side…the server side!

    There are tons of languages we could use to write server-side code with:

            Ruby
            JS (Node)
            PHP
            Java

    But we’ll be working with Python! (and eventually Node)

The Game Plan

    We’ll start by learning basic Python syntax: variables, loops, functions, etc.
    Then we’ll move on to Object Oriented Programming in Python
    We’ll learn how to create our own servers using Python!
    Then it’s on to Python testing
    We’ll take a detour to learn SQL and see how to connect to a DB using Python
    We’ll cover authentication and deployment as well

Why Python?

    It’s fast, powerful, and widely used
    “high level”: express concepts at a high level (a little more than JS)
    Super clean syntax!
    Runs on servers (but not in a browser)
    Particularly used for data science, machine learning, making servers, etc

(This comic is from the days of Python 2; in modern Python, that would be print("Hello, world"), with parentheses.
But what about server-side JS?

    Yes, you could use Node JS to write a server, connect to a DB, etc.
    (and we will be doing just that later on)
    But we’re starting with Python because…

Why Not Node?

    Learning a 2nd language helps you see many of the similarities between languages
    It also helps you better understand what makes each language unique
    Learning exclusively full-stack JS is a recipe for misconceptions
    We want to force you out of your comfort zone a little bit, because learing new tools is a HUGE part of being a developer

Python Versions

Python 2

    Latest is 2.7
    What some people still use
    What comes by default on OSX

Python 3

    Latest is 3.7
    Slightly different language & syntax
    What we’ll use at Rithm

Installing Python

Head over to https://www.python.org/downloads/

Test that it works: in a new Terminal window

$ which python3

Install another Python utility: ipython:

$ pip3 install ipython

Interactive Python

IPython is a program for interactive exploring of Python

$ ipython
Python 3.7.0 (v3.7.0:1bf9cc5093, Jun 26 2018, 23:26:24)
Type 'copyright', 'credits' or 'license' for more information
IPython 6.5.0: An enhanced Interactive Python. Type '?' for help.

In [1]: print("Hello, World!")
Hello, World

(Control-D to exit)
Printing

print(value, value, ...)

    Puts spaces between values
    Puts return character (“newline”) at the end

x = "awesome"

print("Python is", x)

Indentation

In many programming languages, you use { and } to show blocks:

if (age >= 18) {
  console.log("Please go vote!");
  registerToVote();
}

Programmers also tend to indent this code, but that’s just visually prettiness.

This would work the same:

if (age >= 18) {
console.log("Please go vote!");
registerToVote();
}

(That is so ugly. Please don’t do that.)

In Python, you don’t use {/} for blocks; the indentation is what matters:

if age >= 18:
    print("Please go vote!")
    register_to_vote()

That’s very different than:

if age >= 18:
    print("Please go vote!")
register_to_vote()

In JS, people often use 2 or 4 spaces for indentation (styles vary)

In Python, everyone agrees: it should always be 4 spaces
Variables

    Python variable name style is like_this (lower-snake-case)

    There is no keyword for declaring variables; ie no let or var

    No specific way to make un-re-bindable like const
        It’s good style to write constants LIKE_THIS

    “Lexical function scoped”

    x = 42

    def my_function():
        x = 12
        print(x)   # 12

    print(x)       # 42

Strings

    Like JS, can use " or ' as delimiters



    Can interpolate expressions with f-strings:

    food = "cheese"

    print(f"I love {food}")

Numbers

Very much like JavaScript!

    Separate types for integers (can be any size) or floating-point
        In JS, there are only floating-point numbers
        Separate type for complex numbers
    +, -, *, / (true division), // (integer division)
    % (modulo: remainder after division)
    Dividing by zero is an error (JS: is Infinity, except 0/0, which is NaN)
    Can use + and * on strings: "cat" + "food" or "yay" * 3

Lists

Like JS arrays:

    ordered
    can be heterogeneous: [1, "apple", 13.5]

Equality

JavaScript

    == loose equality
        7 == "7"
    === strict equality
        7 === "7"  // false
    Objects & arrays only equal when same identity

Python

    == equality (strict about types)
        7 == "7"  # False
    Structures with same items are equal
        [1, 2, 3] == [1, 2, 3]
    Use is to check obj identity
        [1, 2] is [1, 2]  # False

Truthiness

    In JS, these things are falsy:
        0, 0.0, "", undefined, null, NaN, false
    In JS, these things are (perhaps unexpectedly) truthy:
        [], {}
    In Python, these things are falsy:
        0, 0.0, "", None, False
        [] (empty list), {} (empty dictionary), set() (empty set)
    In Python, these things are truthy:
        Any non-empty string, non-empty list/dict/set, non-0 number
        True

And/Or/Not

    JS: &&, ||, !
    Python: and, or, not
    Just like in JS, these “short circuit”

If

if grade == "A":
    print("awesome job!")

elif grade == "F":
    print("ut oh")

else:
    print("don't worry too much")

(parens around condition aren’t required, unlike JS)

if age >= 18:
    if unregistered:
        print("please register")

    else:
        print("keep voting!")

else:
    print ("Wait a bit")

Ternary
JavaScript

let msg = (age >= 18) ? "go vote!" : "go play!"

Python

msg = "go vote!" if (age >= 18) else "go play!"

(in both, parens are optional but often helpful)
Loops
While Loops

count = 10

while count > 0:
    print(count)
    count = count - 1   # or "count -= 1", but not "count--"

print("Liftoff!")

For Loops

Python for loops are like JS for … of loops:

for snack in ["Peanut", "Twizzler", "Mars Bar"]:
    print("I ate a", snack)

To loop 5 times:

for num in [1, 2, 3, 4, 5]:
    print(num)

Can also use range() function:

for num in range(5):   # makes [0, 1, 2, 3, 4]
    print(num)

Functions

def add_numbers(a, b):
    sum = a + b
    print("doing math!")
    return sum

Functions that don’t explicitly return return None

Can pass arguments by name:

def order_pizza(size, flavor):
    print(f"{size} pizza with {flavor} topping")

order_pizza("large", "mushroom")

order_pizza(size="small", flavor="sausage")

# Same thing
order_pizza(flavor="sausage", size="small")

Can provide defaults for parameters:

def send_invite(name, city="SF", state="California"):
    print(f"mailing invitation to {city}, {state}")

send_invite("Jenny", "Portland", "Oregon")

send_invite("Joel")

Providing too many/too few arguments is an error (in JS, this is ignored / becomes undefined):

def add_three_numbers(a, b, c):
    return a + b + c

add_three_numbers(10, 20, 30)       # 60, yay!

add_three_numbers(10, 20)           # error!

add_three_numbers(10, 20, 30, 40)   # error!

Comments and Docstrings

    #: rest of line is comment (use to explain complex code)
    String as very first thing in file/function is “docstring”
        Use to document what the function/file does
        Shown when you ask for help(some_function)

def add_limited_numbers(a, b):
    """Add two numbers, making sure sum caps at 100."""

    sum = a + b

    # If this required explanation, comment like this

    if sum > 100:
        sum = 100

    return sum

Modes
Running a Source File

$ python3 mygame.py
You win! Your score is 10

$ # back in shell

    runs Python
    loads mygame.py
    executes the code
    returns to the terminal when done.

Running in IPython

$ ipython
In [1]: %run mygame.py

    runs mygame.py
    stays in IPython, variables are still set

Play in the Console

It’s. The. Best. Way. To. Learn.

Good idea: open a console at the same time as your editor!
Getting Help
dir()

“Show me the methods and attributes of this object”

In [1] dir([])
['__add__', 'append', 'count', 'extend', 'index', 'insert',
'pop', 'remove', 'reverse', 'sort']

__methods__

You’ll notice many objects provide a lot of methods that have names starting and ending with double-underscores (Python programmers often call these “special methods” or “dunder [for ‘double-underscore’] methods”.

These aren’t methods you call directly (ie, you wouldn’t ever say mylist.__add__()) — instead, these work behind-the-scenes to support other operations of the object.

Generally, you can ignore them when examining an object.
help()

“Show me help about how to use this object”

In [1] help([])

q to quit that



Python Data Structures

Includes excellent, high-performance data structures as part of language.
Length of Structure

Generic len(x) returns length of x:

    # chars in string
    # items in list
    # items in dictionary
    # items in a set

Lists

Like JS arrays:

    Mutable, ordered sequence
    O(n) to search, add, delete
        Except when at end: O(1)

Making Lists

alpha = ['a', 'b', 'c']

Can use constructor function, list()

This will make list from iterating over argument:

letters = list("apple")   # ['a', 'p', 'p', 'l', 'e']

Membership

Can check for membership with in:

if "taco" in foods:
    print("Yum!")

if "cheese" not in foods:
    print("Oh no!")

Retrieving By Index

Can retrieve/mutate item with [n]:

print(fav_foods[0])

fav_foods[0] = "taco"

fav_foods[-1]   # last item

fav_foods[-3]   # third from end

Slicing

Can retrieve list from list:

lst[start:stop:step]

    start: Index to begin retrieval (default start)
    stop: Index to end retrieval before (default: end)
    step: Number to step (default: 1)

alpha = ['a', 'b', 'c', 'd', 'e']

alpha[2:]        # ['c', 'd', 'e']
alpha[2:4]       # ['c', 'd']
alpha[:3]        # ['a', 'b', 'c']
alpha[::2]       # ['a', 'c', 'e']
alpha[3:0:-1]    # ['d', 'c', 'b']
alpha[::-2]      # ['e', 'c', 'a']

Splicing

Can assign a list to a splice:

alpha = ['a', 'b', 'c', 'd', 'e']

alpha[2:] = ['y', 'z']
print(alpha)            # ['a', 'b', 'y', 'z']

alpha[1:3] = []
print(alpha)            # ['a', 'z']

Core API
l.append(x) 	Add x to end of of list
l.copy() 	Return shallow copy of list l
l.count(x) 	Return # times x appears in l
l.extend(l2) 	Add items of l2 to l
l.index(x) 	Return (0-based) index of x in l
l.insert(i, x) 	Insert x at position i
l.pop(i) 	Remove & return item at i (default last)
l.reverse() 	Reverse list (change in place)
l.sort() 	Sort list in place
Differences From JS Arrays

Can’t add new item with []:

alpha = ['a', 'b', 'c']
alpha[3] == 'd'           # error!

alpha.append('d')         # ok!

Functions that mutate list return None, not data:
JavaScript

let ltrs = ["c", "a", "b"];
ltrs.sort(); // sorts in-place; returns ltrs

Python

ltrs = ["c", "a", "b"]
ltrs.sort() # sorts in-place; returns None

Strings

Immutable sequence of characters (like JS)
Making Strings

msg = "Hello!"
also = 'Oh hi!'

long_msg = """This can continue on for several
lines of text"""

greet = f"Hi, {fname} {lname}"

email = f"""Dear {user},
You owe us ${owed}. Please remit."""

nums = [1, 2, 3]

str(nums)     # "[1, 2, 3]"

Membership / Substrings

    Can use in for membership ("e" in "apple")

    Can slice to retrieve substring ("apple"[1:3] == "pp")
        Cannot splice; strings are immutable!

    Can iterate over, get letter-by-letter:

    for letter in word:
        print(letter)

Core API
s.count(t) 	Returns # times t occurs in s
s.endswith(t) 	Does s end with string t?
s.find(t) 	Index of first occurence of t in s (-1 for failure)
s.isdigit() 	Is s entirely made up of digits?
s.join(seq) 	Make new string of seq joined by s ("|".join(nums))
s.lower() 	Return lowercased copy of s
s.replace(old,new,count) 	Replace count (default: all) occurrences of t in s
s.split(sep) 	Return list of items made from splitting s on sep
s.splitlines() 	Split s at newlines
s.startswith(t) 	Does s start with t?
s.strip() 	Remove whitespace at start/end of s
Dictionaries

Mutable, ordered mapping of keys → values

O(1) runtime for adding, retrieving, deleting items

(like JS object or Map)
Making Dictionaries

fruit_colors = {
    "apple": "red",
    "berry": "blue",
    "cherry": "red",
}

    Values can be any type

    Keys can be any immutable type

    my_dict = {
        "ok": "yes",
        42: "all good",
        [1,2]: 2
    } # ERR: not immutable

Membership & Retrieval

    in checks for membership of key ("apple" in fruit_colors)
    [] retrieves item by key (fruit_colors['apple'])
        Cannot use dot notation, though (no fruit_colors.apple)
        Failure to find is error (can say .get(x, default))

Looping over Dictionaries

ages = {"Whiskey": 6, "Fluffy": 3, "Ezra": 7}

for name in ages.keys():
    print(name)

for age in ages.values():
    print(age)

for name_and_age in ages.items():
    print(name_and_age)

Can unpack name_and_age while looping:

for (name, age) in ages.items():
    print(name, "is", age)

JS calls this same idea “destructuring”.
Core API
d.copy() 	Return new copy of d
d.get(x, default) 	Retrieve value of x (return optional default if missing)
d.items() 	Return iterable of (key, value) pairs
d.keys() 	Return iterable of keys
d.values() 	Return iterable of values
Sets

Unordered, unique collection of items, like JS Set

O(1) runtime for adding, retrieving, deleting
Making Sets

Use {}, but with only keys, not key: value

colors = {"red", "blue", "green"}

Can use constructor function to make set from iterable:

set(pet_list)   # {"Whiskey", "Fluffy", "Ezra"}

set("apple")    # {"a", "p", "l", "e"}

Any immutable thing can be put in a set
Membership

Use in for membership check:

"red" in colors

Core API
s.add(x) 	Add item x to s
s.copy() 	Make new copy of s
s.pop() 	Remove & return arbitrary item from s
s.remove(x) 	Remove x from s
Set Operations

moods = {"happy", "sad", "grumpy"}

dwarfs = {"happy", "grumpy", "doc"}


moods | dwarfs    # union: {"happy", "sad", "grumpy", "doc"}

moods & dwarfs    # intersection: {"happy", "grumpy"}

moods - dwarfs    # difference: {"sad"}
dwarfs - moods    # difference: {"doc"}

moods ^ dwarfs    # symmetric difference: {"sad", "doc"}

(These are so awesome!)
Tuples

Immutable, ordered sequence

(like a list, but immutable)
Making Tuples

t1 = (1, 2, 3)

t2 = ()           # empty tuple

t3 = (1,)         # one-item tuple: note trailing comma

Can use constructor function to make tuple from iterable:

ids = [1, 12, 44]

t_of_ids = tuple(ids)

What Are These Good For?

Slightly smaller, faster than lists

Since they’re immutable, they can be used as dict keys or put into sets
Comprehensions

Python has filter() and map(), like JS

But comprehensions are even more flexible
Filtering Into List

Instead of this:

evens = []

for num in nums:
    if num % 2 == 0:
        evens.append(num)

You can say this:

evens = [num for num in nums if num % 2 == 0]

Mapping Into List

Instead of this:

doubled = []

for num in nums:
    doubled.append(num * 2)

You can say this:

doubled = [num * 2 for num in nums]

Can combine this mapping and filtering:

doubled_evens = [n * 2 for n in nums if n % 2 == 0]

Super Flexible

Can make lists via comprehensions from any kind of iterable:

vowels = {"a", "e", "i", "o", "u"}
word = "apple"

vowel_list = [ltr for ltr in word if ltr in vowels]

Can make “dictionary comprehensions” and “set comprehensions”:

evens_to_doubled = {n: n * 2 for n in nums if n % 2 == 0}

a_words = {w for w in words if w.startswith("a")}










'''