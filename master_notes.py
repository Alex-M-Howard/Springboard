'''

############## STRING METHODS ################
capitalize()	    Converts the first character to upper case
casefold()	        Converts string into lower case
center()	        Returns a centered string
count()         	Returns the number of times a specified value occurs in a string
encode()	        Returns an encoded version of the string
endswith()	        Returns true if the string ends with the specified value
expandtabs()	    Sets the tab size of the string
find()          	Searches the string for a specified value and returns the position of where it was found
format()	        Formats specified values in a string
format_map()	    Formats specified values in a string
index()	            Searches the string for a specified value and returns the position of where it was found
isalnum()	        Returns True if all characters in the string are alphanumeric
isalpha()	        Returns True if all characters in the string are in the alphabet
isascii()	        Returns True if all characters in the string are ascii characters
isdecimal()	        Returns True if all characters in the string are decimals
isdigit()	        Returns True if all characters in the string are digits
isidentifier()	    Returns True if the string is an identifier
islower()	        Returns True if all characters in the string are lower case
isnumeric()	        Returns True if all characters in the string are numeric
isprintable()	    Returns True if all characters in the string are printable
isspace()	        Returns True if all characters in the string are whitespaces
istitle() 	        Returns True if the string follows the rules of a title
isupper()	        Returns True if all characters in the string are upper case
join()	            Converts the elements of an iterable into a string
ljust()	            Returns a left justified version of the string
lower()	            Converts a string into lower case
lstrip()	        Returns a left trim version of the string
maketrans()	        Returns a translation table to be used in translations
partition()	        Returns a tuple where the string is parted into three parts
replace()	        Returns a string where a specified value is replaced with a specified value
rfind()	            Searches the string for a specified value and returns the last position of where it was found
rindex()	        Searches the string for a specified value and returns the last position of where it was found
rjust()	            Returns a right justified version of the string
rpartition()	    Returns a tuple where the string is parted into three parts
rsplit()	        Splits the string at the specified separator, and returns a list
rstrip()	        Returns a right trim version of the string
split()	            Splits the string at the specified separator, and returns a list
splitlines()	    Splits the string at line breaks and returns a list
startswith()	    Returns true if the string starts with the specified value
strip()	            Returns a trimmed version of the string
swapcase()	        Swaps cases, lower case becomes upper case and vice versa
title()	            Converts the first character of each word to upper case
translate()	        Returns a translated string
upper()	            Converts a string into upper case
zfill()	            Fills the string with a specified number of 0 values at the beginning





############## LIST METHODS ################
append()	  Adds an element at the end of the list
clear()	      Removes all the elements from the list
copy()	      Returns a copy of the list
count()	      Returns the number of elements with the specified value
extend()      Add the elements of a list (or any iterable), to the end of the current list
index()	      Returns the index of the first element with the specified value
insert()	  Adds an element at the specified position
pop()	      Removes the element at the specified position
remove()	  Removes the first item with the specified value
reverse()	  Reverses the order of the list
sort()	      Sorts the list





############## DICTIONARY METHODS ################
clear()	       Removes all the elements from the dictionary
copy()	       Returns a copy of the dictionary
fromkeys()	   Returns a dictionary with the specified keys and value
get()	       Returns the value of the specified key
items()	       Returns a list containing a tuple for each key value pair
keys()	       Returns a list containing the dictionary's keys
pop()	       Removes the element with the specified key
popitem()	   Removes the last inserted key-value pair
setdefault()   Returns the value of the specified key. If the key does not exist: insert the key, with the specified value
update()	   Updates the dictionary with the specified key-value pairs
values()	   Returns a list of all the values in the dictionary



############## SET METHODS ################
add()	                Adds an element to the set
clear()	                Removes all the elements from the set
copy()	                Returns a copy of the set
difference()	        Returns a set containing the difference between two or more sets
difference_update()	    Removes the items in this set that are also included in another, specified set
discard()	            Remove the specified item
intersection()	        Returns a set, that is the intersection of two or more sets
intersection_update()	Removes the items in this set that are not present in other, specified set(s)
isdisjoint()	        Returns whether two sets have a intersection or not
issubset()	            Returns whether another set contains this set or not
issuperset()	        Returns whether this set contains another set or not
pop()	                Removes an element from the set
remove()	            Removes the specified element
symmetric_difference()	Returns a set with the symmetric differences of two sets
symmetric_difference_update()	inserts the symmetric differences from this set and another
union()	                Return a set containing the union of sets
update()	            Update the set with another set, or any other iterable








############## TUPLE METHODS ################
count()	     Returns the number of times a specified value occurs in a tuple
index()	     Searches the tuple for a specified value and returns the position of where it was found




############## FILE METHODS ################
close()	       Closes the file
detach()	   Returns the separated raw stream from the buffer
fileno()	   Returns a number that represents the stream, from the operating system's perspective
flush()	       Flushes the internal buffer
isatty()	   Returns whether the file stream is interactive or not
read()	       Returns the file content
readable()	   Returns whether the file stream can be read or not
readline()	   Returns one line from the file
readlines()    Returns a list of lines from the file
seek()	       Change the file position
seekable()	   Returns whether the file allows us to change the file position
tell()	       Returns the current file position
truncate()	   Resizes the file to a specified size
writable()	   Returns whether the file can be written to or not
write()	       Writes the specified string to the file
writelines()   Writes a list of strings to the file






############## KEYWORDS ################
and	      A logical operator
as	      To create an alias
assert	  For debugging
break	  To break out of a loop
class	  To define a class
continue  To continue to the next iteration of a loop
def	      To define a function
del	      To delete an object
elif	  Used in conditional statements, same as else if
else	  Used in conditional statements
except	  Used with exceptions, what to do when an exception occurs
False	  Boolean value, result of comparison operations
finally	  Used with exceptions, a block of code that will be executed no matter if there is an exception or not
for	      To create a for loop
from	  To import specific parts of a module
global	  To declare a global variable
if	      To make a conditional statement
import	  To import a module
in	      To check if a value is present in a list, tuple, etc.
is	      To test if two variables are equal
lambda	  To create an anonymous function
None	  Represents a null value
nonlocal  To declare a non-local variable
not	      A logical operator
or	      A logical operator
pass	  A null statement, a statement that will do nothing
raise	  To raise an exception
return	  To exit a function and return a value
True	  Boolean value, result of comparison operations
try	      To make a try...except statement
while	  To create a while loop
with	  Used to simplify exception handling
yield	  To end a function, returns a generator



############## EXCEPTIONS ################
ArithmeticError 	    Raised when an error occurs in numeric calculations
AssertionError     	    Raised when an assert statement fails
AttributeError 	        Raised when attribute reference or assignment fails
Exception 	            Base class for all exceptions
EOFError 	            Raised when the input() method hits an "end of file" condition (EOF)
FloatingPointError 	    Raised when a floating point calculation fails
GeneratorExit 	        Raised when a generator is closed (with the close() method)
ImportError 	        Raised when an imported module does not exist
IndentationError 	    Raised when indendation is not correct
IndexError 	            Raised when an index of a sequence does not exist
KeyError 	            Raised when a key does not exist in a dictionary
KeyboardInterrupt 	    Raised when the user presses Ctrl+c, Ctrl+z or Delete
LookupError 	        Raised when errors raised cant be found
MemoryError 	        Raised when a program runs out of memory
NameError       	    Raised when a variable does not exist
NotImplementedError 	Raised when an abstract method requires an inherited class to override the method
OSError 	            Raised when a system related operation causes an error
OverflowError 	        Raised when the result of a numeric calculation is too large
ReferenceError 	        Raised when a weak reference object does not exist
RuntimeError 	        Raised when an error occurs that do not belong to any specific expections
StopIteration 	        Raised when the next() method of an iterator has no further values
SyntaxError 	        Raised when a syntax error occurs
TabError 	            Raised when indentation consists of tabs or spaces
SystemError 	        Raised when a system error occurs
SystemExit 	            Raised when the sys.exit() function is called
TypeError 	            Raised when two different types are combined
UnboundLocalError 	    Raised when a local variable is referenced before assignment
UnicodeError 	        Raised when a unicode problem occurs
UnicodeEncodeError 	    Raised when a unicode encoding problem occurs
UnicodeDecodeError 	    Raised when a unicode decoding problem occurs
UnicodeTranslateError 	Raised when a unicode translation problem occurs
ValueError 	            Raised when there is a wrong value in a specified data type
ZeroDivisionError 	    Raised when the second operator in a division is zero




############## BUILT IN FUNCTIONS ################
abs()	        Returns the absolute value of a number
all()	        Returns True if all items in an iterable object are true
any()	        Returns True if any item in an iterable object is true
ascii()	        Returns a readable version of an object. Replaces none-ascii characters with escape character
bin()	        Returns the binary version of a number
bool()	        Returns the boolean value of the specified object
bytearray()	    Returns an array of bytes
bytes()	        Returns a bytes object
callable()	    Returns True if the specified object is callable, otherwise False
chr()	        Returns a character from the specified Unicode code.
classmethod()	Converts a method into a class method
compile()	    Returns the specified source as an object, ready to be executed
complex()	    Returns a complex number
delattr()	    Deletes the specified attribute (property or method) from the specified object
dict()	        Returns a dictionary (Array)
dir()	        Returns a list of the specified object's properties and methods
divmod()	    Returns the quotient and the remainder when argument1 is divided by argument2
enumerate()	    Takes a collection (e.g. a tuple) and returns it as an enumerate object
eval()	        Evaluates and executes an expression
exec()	        Executes the specified code (or object)
filter()	    Use a filter function to exclude items in an iterable object
float()	        Returns a floating point number
format()	    Formats a specified value
frozenset()	    Returns a frozenset object
getattr()	    Returns the value of the specified attribute (property or method)
globals()	    Returns the current global symbol table as a dictionary
hasattr()	    Returns True if the specified object has the specified attribute (property/method)
hash()	        Returns the hash value of a specified object
help()	        Executes the built-in help system
hex()	        Converts a number into a hexadecimal value
id()	        Returns the id of an object
input()	        Allowing user input
int()	        Returns an integer number
isinstance()	Returns True if a specified object is an instance of a specified object
issubclass()	Returns True if a specified class is a subclass of a specified object
iter()	        Returns an iterator object
len()	        Returns the length of an object
list()	        Returns a list
locals()	    Returns an updated dictionary of the current local symbol table
map()	        Returns the specified iterator with the specified function applied to each item
max()	        Returns the largest item in an iterable
memoryview()	Returns a memory view object
min()	        Returns the smallest item in an iterable
next()	        Returns the next item in an iterable
object()	    Returns a new object
oct()	        Converts a number into an octal
open()	        Opens a file and returns a file object
ord()	        Convert an integer representing the Unicode of the specified character
pow()	        Returns the value of x to the power of y
print()	        Prints to the standard output device
property()	    Gets, sets, deletes a property
range()	        Returns a sequence of numbers, starting from 0 and increments by 1 (by default)
repr()	        Returns a readable version of an object
reversed()	    Returns a reversed iterator
round()	        Rounds a numbers
set()	        Returns a new set object
setattr()	    Sets an attribute (property/method) of an object
slice()	        Returns a slice object
sorted()	    Returns a sorted list
staticmethod()	Converts a method into a static method
str()	        Returns a string object
sum()	        Sums the items of an iterator
super()	        Returns an object that represents the parent class
tuple()	        Returns a tuple
type()	        Returns the type of an object
vars()	        Returns the __dict__ property of an object
zip()	        Returns an iterator, from two or more iterators






Why Python?

    It’s fast, powerful, and widely used
    “high level”: express concepts at a high level (a little more than JS)
    Super clean syntax!
    Runs on servers (but not in a browser)
    Particularly used for data science, machine learning, making servers, etc

(This comic is from the days of Python 2; in modern Python, that would be print("Hello, world"), with parentheses.
But what about server-side JS?



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



############## EQUALITY ################
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



############## TRUTHINESS ################

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



############## TERNARY ################
JavaScript

let msg = (age >= 18) ? "go vote!" : "go play!"

Python

msg = "go vote!" if (age >= 18) else "go play!"

(in both, parens are optional but often helpful)




############## COMMENTS AND DOCSTRINGS ################
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






############## USING HELP FUNCTION ################
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





############## DATA STRUCTURES ################

Includes excellent, high-performance data structures as part of language.
Length of Structure

Generic len(x) returns length of x:

    # chars in string
    # items in list
    # items in dictionary
    # items in a set

********** LISTS **********

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

******* Slicing *******

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

******* Splicing *******

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


******* Dictionaries *******

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


******* Sets *******

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


Set Operations

moods = {"happy", "sad", "grumpy"}

dwarfs = {"happy", "grumpy", "doc"}


moods | dwarfs    # union: {"happy", "sad", "grumpy", "doc"}

moods & dwarfs    # intersection: {"happy", "grumpy"}

moods - dwarfs    # difference: {"sad"}
dwarfs - moods    # difference: {"doc"}

moods ^ dwarfs    # symmetric difference: {"sad", "doc"}

(These are so awesome!)



******* Tuples *******

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




Packing / Unpacking
Unpacking

Can “unpack” iterables:

point = [10, 20]

x, y = point

a = 2
b = 3

b, a = (a, b)

Can gather rest using * before variable:

letters = ["a", "b", "c"]

first, *rest = letters

Spread

Can “spread” iterables:

fruits = {"apple", "berry", "cherry"}

foods = ["kale", "celery", *fruits]

Error Handling
Errors

In general, Python raises errors in places JS returns undefined:

    provide too few/too many arguments to a function
    index a list beyond length of list
    retrieve item from dictionary that doesn’t exist
    use missing attribute on an instance
    conversion failures (eg, converting “hello” to an int)
    division by zero
    and more!

In general, in Python: explicit is better than implicit
Catching Errors

# try to convert this to a number

try:
    age = int(data_we_received)
    print("You are", age)

except:
    print("Hey, you, that's not an age!")

# next line is run either way

It’s risky, though, to just say except — that catches all errors!

data_we_received = "42"

try:
    age = int(data_we_received)
    print("You are", Age)

except:
    print("Hey, you, that's not an age!")

Better to catch the specific error you’re looking for:

age_we_received = "42"

try:
    age = int(data_we_received)
    print("You are", Age)

except ValueError:
    print("Hey, you, that's not an age!")

Common Exception Types
AttributeError 	Couldn’t find attr: o.missing
KeyError 	Couldn’t find key: d["missing"]
IndexError 	Couldn’t find index: lst[99]
NameError 	Couldn’t find variable: not_spelled_right
OSError 	Operating system error: can’t read/write file, etc
ValueError 	Incorrect value (tried to convert “hello” to int, etc)
Raising Errors

In Python, it’s common for you to “raise” errors to signal problems:

if color not in {"red", "green", "blue"}:
    raise ValueError("Not a valid color!")

Error Handling Pattern

Raise exception when you know it should be an error Handle it at the point you can give good feedback

def bounded_avg(nums):
    "Return avg of nums (makes sure nums are 1-100)"

    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside bounds of 1-100")

    return sum(nums) / len(nums)

def handle_data():
    "Process data from database"

    ages = get_ages(from_my_db)

    try:
        avg = bounded_avg(ages)
        print("Average was", avg)

    except ValueError as exc:
        # exc is exception object -- you can examine it!
        print("Invalid age in list of ages")

Docstrings & Doctests
Docstrings

Docstrings are the strings at top of function or file that document it:

def bounded_avg(nums):
    "Return avg of nums (makes sure nums are 1-100)"

    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside bounds of 1-100")

    return sum(nums) / len(nums)

It’s incredibly good style for every function to have one!
Doctests

Doctests are snippets of interactive demonstration in a docstring:

def bounded_avg(nums):
    """Return avg of nums (makes sure nums are 1-100)

       >>> bounded_avg([1, 2, 3])
       2

       >>> bounded_avg([1, 2, 101])
       Traceback (most recent call last):
           ...
       ValueError: Outside bounds of 1-100
    """

    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside bounds of 1-100")

    return sum(nums) / len(nums)

Can run this test:

$ python3 -m doctest -v your-file.py

(use the doctest module, verbosely showing tests found & run)

Doctests are awesome

Testable documentation and readable tests.
Importing

Python includes a “standard library” of dozens of useful modules.

These are not in the namespace of your script automatically.

You have to import them

choice(seq) is a useful function: given a sequence, it returns a random item

from random import choice

print("Let's play", choice(games))

“From random, pull in choice function as choice”

# can pull in several things from a place

from random import choice, randint


# can change the local name of it

from random import choice as pick_a_thing

pick_a_thing(games)

Sometimes, it helpful to pull in the library itself:

import random

# now, we have the obj `random`, with all the funcs/classes
# within available to us

random.choice(games)

Exporting/Importing Your Code
score.py

def get_high_score():
    ...

def save_high_score():
    ...

(unlike JS, nothing needed to “export”)
game.py

from score import get_high_score

high = get_high_score()

Installing Libraries

Python includes dozens of useful libraries

There are over 100,000 additional available ones :)
Using Pip

To install a new package:

$ pip3 install forex_python
... pip output here...

$ ipython
In [1]: from forex_python.converter import convert
In [2]: convert("USD", "GBP", 10)
7.6543

********** Virtual Environments ***********

Normally, pip makes the installed library available everywhere

This is convenient, but a little messy:

    you might not need it for every project
    you might want to more explicitly keep track of which libraries a project needs
    you might want a new version of a library for one project, but not another

Python can help us by using a “virtual environment”
Creating a Virtual Environment

$ cd my-project-directory
$ python3 -m venv venv

(“using venv module, make a folder, venv, with all the needed stuff”)

That makes the virtual environment folder — but you’re not using it yet!
Using Your Virtual Environment

$ source venv/bin/activate
(venv) $   <-- notice shell prompt!

    You only need to create the virtual environment once
    You need to use source every time you open a new terminal window

What does it mean to be “using” a virtual environment?

    It makes certain python is the version of Python used to create the venv
    You have access to the standard library of Python
    You don’t have access to globally installed pip stuff
    You get to explicitly install what you want — and it will be only for here!

Installing into Virtual Environment

    Make sure you’re using your venv — do you see it in your prompt?
    Use pip install, as usual
        But now it’s downloaded & installed into that venv folder
        It won’t be available/confuse global Python or other venvs — tidy!

Tracking Required Libraries

To see a list of installed libraries in a venv:

$ pip3 freeze
... list of installed things...

It’s helpful to save this info in a file (typically named “requirements.txt”):

$ pip3 freeze > requirements.txt

Using Virtual Environments

    Virtual environments are large & full of stuff you didn’t write yourself
    You don’t want this to get into git / Github
    So, add venv/ to your project’s .gitignore
        Use git status to make sure it’s being ignored

Recreating a Virtual Environment

When using a new Python project:

$ git clone http://path-to-project
$ cd that-project
$ python3 -m venv venv

Then, as usual when working with a venv:

$ source venv/bin/activate
(venv) $ pip3 install -r requirements.txt
... pip output here ...

Leaving Virtual Environments

Use the deactivate shell command to leave the virtual environment:

$ source venv/bin/activate
(venv) $ deactivate
$ ... back to regular terminal ...

Files

You can open an on-disk file with open(filepath, mode)

    filepath: absolute or relative path to file
    mode: string of how to open file (eg, “r” for reading or “w” for writing)

This returns an file-type instance.
Reading

Line-by-line:

file = open("/my/file.txt")

for line in file:
    print("line =", line)

file.close()

All at once:

file = open("/my/file.txt")

text = file.read()

file.close()

Writing

file = open("/my/file.txt", "w")

file.write("This is a new line.")
file.write("So is this.")

file.close()

“with” blocks

Python has an intermediate bit of syntax called a “with block”.

For example:

with open("/my/file.txt", "r") as file:
    for line in file:
        print("line=", line)

    # our file is still open here

# but it will be automagically closed here

Python will keep that file open as long as you’re inside the with block. At the point the your code is no longer indented inside that block, it will automatically close the file you’ve used.

These with-blocks are used for other kinds of resources besides files; to learn more about them, you can search for “python context mananagers”.



############## Object Oriented ###############


Instances

Like in JS, you make an instance by calling the class:

from collections import Counter

# make instance of a counter
counts = Counter("hello world")

type(counts)    # 'collections.Counter'

isinstance(counts, Counter)    # True

Get/set attributes or find methods with . (like JS):

# get most common letter
counts.most_common(1)

JavaScript:

    get/set attribute of object: o.name or o['name']
    call method: o.method() or o['method']()

Python:

    get/set attribute of object: o.name
    call method: o.method()
    retrieve value from dictionary: o['my-key']
        not the same thing!

What Can I Do With This Object?

help(obj)
    Show help about object and methods
dir(obj)
    List methods/attributes of object

Classes

Making classes is similar to JS:

class Triangle:
    "Right triangle."

    def __init__(self, a, b):
        "Create triangle from a and b sides."
        self.a = a
        self.b = b

    def get_hypotenuse(self):
        "Get hypotenuse (length of 3rd side)."
        return math.sqrt(self.a ** 2 + self.b ** 2)

    def get_area(self):
        "Get area of triangle."
        return (self.a * self.b) / 2

    def describe(self):
        return f"My area is {self.get_area()}"

Self

self is similar to this

    this is a bit magical: it automatically gets created
    self is explicit: you must list it as the first argument of methods
        It’s just a normal variable, otherwise

Inheritance

Like in JS, classes can subclass other objects:

class ColoredTriangle(Triangle):
    """Triangle that has a color."""

    def __init__(self, a, b, color):
        # get parent class [`super()`], call its `__init__()`
        super().__init__(a, b)

        self.color = color

    def describe(self):
        msg = super().describe() + f" I am {self.color}"

Super

Like in JS, super finds parent class:

    JS: super is parent, super(...) calls parent constructor function
    Python: super() is parent, super().__init__(...) is parent initializer

Multi-Level Inheritance

Like in JS, you can have multiple levels of inheritance
Documenting Classes

As always, good style to have comment explaining purpose of class & methods:

class Triangle:
    "Right triangle."

    def __init__(self, a, b):
        "Create triangle from a and b sides."
        self.a = a
        self.b = b

    def get_hypotenuse(self):
        "Get hypotenuse (length of 3rd side)."
        return math.sqrt(self.a ** 2 + self.b ** 2)

    def get_area(self):
        "Get area of triangle."
        return (self.a * self.b) / 2

Documenting Instance

When you print an instance/examine in Python shell, often not helpful:

>>> tri = Triangle(3, 4)

>>> tri
<__main__.Triangle object at 0x1012a6358>

Would be nicer to see values for a and b

We can do this by making a __repr__ (representation) method:

class Triangle:
    "Right triangle."

    def __init__(self, a, b):
        "Create triangle from a and b sides."
        self.a = a
        self.b = b

    def __repr__(self):
        return f"<Triangle a={self.a} b={self.b}>"

    def get_hypotenuse(self):
        "Get hypotenuse (length of 3rd side)."
        return math.sqrt(self.a ** 2 + self.b ** 2)

    def get_area(self):
        "Get area of triangle."
        return (self.a * self.b) / 2

>>> tri = Triangle(3, 4)

>>> tri
<Triangle a=3 b=4>











############# Flask ############

Web Frameworks
A Quick Demo

(venv) $ FLASK_ENV=development flask run
* Environment: development
* Debug mode: on
* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
* Restarting with stat
* Debugger is active!
* Debugger PIN: 160-080-703

What is a Web Server?

A program that’s running on a machine and waiting for a web request.

Note: A web server is a technology that can process requests and issue responses via HTTP, a protocol used to distribute information on the world wide web. Though it’s also used to refer to computer systems and even internet “appliances,” we’ll use web server to refer to the software running on a machine that’s waiting to respond to HTTP requests.

The server then responds with the exact HTML text for that page:
Web Application

The ability to start a server in “listening” for requests, and then issue responses:

GET /hello     (http://server/hello)

↓

<html>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>

Note: To keep code samples short in the presentation, we’re eliding some less-important HTML markup. The shortest valid HTML skeleton in modern HTML would actually be:

<!doctype html>
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  <body>
</html>

Flask is a Web Framework

    Set of functions, classes, etc. that help you define
        Which requests to respond to
            http://server/about-us
            http://server/post/1
        How to respond to requests
            Shows an “About Us” page
            Show the 1st blog post

    Like a library, but bigger and more opinionated
    Usage is similar to the Python Standard Library.

Using the Python Standard Library

from random import choice, randint

Using Flask

from flask import Flask, request

What Do Web Applications Need To Do?

    handle web requests
    produce dynamic HTML
    handle forms
    handle cookies
    connect to databases
    provide user log-in/log-out
    cache pages for performance
    & more!

Flask Apps
Installing Flask

$ python3 -m venv venv
$ source venv/bin/activate

(venv)$ pip3 install flask
... lots of stuff ...
Successfully installed flask Werkzeug Jinja2 ...
Cleaning up...

Making An App

Need to create a “flask application”:

from flask import Flask

app = Flask(__name__)

When we create a Flask application, it needs to know what module to scan for things like routes (covered later)–so the __name__ is required and should always be written like that.
Running Flask App

(venv) $ flask run

(Control-C to quit)

If your Flask app file isn’t called app:

(venv) $ FLASK_APP=app.py flask run

FLASK_APP=app.py is passing an “environmental variable”

Only has this meaning while this program is running
Development Mode

Better to run Flask in “development mode”:

    Much better error messages
    Automatically re-loads server when code changes on disk

Both of these are very helpful when developing–and very bad for working on a live, production server.

(venv) $ FLASK_ENV=development flask run

Setting Environmental Variables

Can set FLASK_DEV once per terminal session:

(venv) $ export FLASK_ENV=development

Add that line to shell config to run on every new terminal session.
Adding Routes
Making Responses

    A function that returns web response is called a view
        Response is a string
        Usually, a string of HTML

    So, our function returns an HTML string:

    @app.route('/hello')
    def say_hello():
        """Return simple "Hello" Greeting."""

        html = "<html><body><h1>Hello</h1></body></html>"
        return html

Handling Requests

On requesting http://localhost:5000/hello in browser, function is called:

@app.route('/hello')
def say_hello():
    """Return simple "Hello" Greeting."""

    html = "<html><body><h1>Hello</h1></body></html>"
    return html

    Flask lets you “route” a URL to a function
    @app.route('/hello') is a Python “decorator”
        “/hello” in the decorator maps directly to the URL the user requested

Now we can get to this at http://localhost:5000/hello
Serving at the Root

@app.route('/')
def index():
    """Show homepage"""

    return """
      <html>
        <body>
          <h1>I am the landing page</h1>
        </body>
      </html>
      """

This function will get called if the user requests http://localhost:5000/.

Now we can reach this page at http://localhost:5000
What Routes Return

Routes should return strings!
GET and POST
Requests

Flask provides an object, request, to represent web requests

from flask import request

Handling Query Arguments

For a url like /search?term=fun

@app.route("/search")
def search():
    """Handle GET requests like /search?term=fun"""

    term = request.args["term"]
    return f"<h1>Searching for {term}</h1>"

request.args is a dict-like object of query parameters.
Handling POST Requests

By default, a route only responds to GET requests

To accept POST requests, must specify that:

@app.route("/my/route", methods=["POST"])
def handle_post_to_my_route():
   ...

Example POST Request

@app.route("/add-comment")
def add_comment_form():
    """Show form for adding a comment."""

    return """
      <form method="POST">
        <input name="comment">
        <button>Submit</button>
      </form>
      """

@app.route("/add-comment", methods=["POST"])
def add_comment():
    """Handle adding comment."""

    comment = request.form["comment"]

    # TODO: save that into a database!

    return f'<h1>Received "{comment}".</h1>'

request.form is a dict-like object of POST parameters.
Variables in a URL
Motivation

    Want user info pages for each user:
        http://localhost:5000/user/whiskey
        http://localhost:5000/user/spike
        We don’t want every possible username as a separate route
    Want to show blog posts (read from database) by id:
        http://localhost:5000/post/1
        http://localhost:5000/post/2

Variables in a URL

Argument capture in Flask:

USERS = {
  "whiskey": "Whiskey The Dog",
  "spike": "Spike The Porcupine",
}  

@app.route('/user/<username>')
def show_user_profile(username):
    """Show user profile for user."""

    name = USERS[username]
    return f"<h1>Profile for {name}</h1>"

    <variable_name> in @app.route
    View function must have same var_name as parameter

Can also specify int variable:

POSTS = {
  1: "Flask is pretty cool",
  2: "Python is neat-o"
}

@app.route('/post/<int:post_id>')
def show_post(post_id):
    """Show post with given integer id."""

    print("post_id is a ", type(post_id))

    post = POSTS[post_id]

    return f"<h1>Post #{post_id}</h1><p>{post}</p>"

    <int:variable_name> in @app.route
    Converts to integer when calling function

Can have more than one:

@app.route("/products/<category>/<int:product_id>")
def product_detail(category, product_id):
   """Show detail page for product."""

   ...

Query Params vs URL Params

http://toys.com/shop/spinning-top?color=red

@app.route("/shop/<toy>")
def toy_detail(toy):
    """Show detail about a toy."""

    # Get color from req.args, falling back to None
    color = request.args.get("color")

    return f"<h1>{toy}</h1>Color: {color}"

Which Should I Use?

URL Parameter

/shop/<toy>

Feels more like “subject of page”

Query Parameter

/shop?toy=elmo

Feels more like “extra info about page”

Often used when coming from form
Looking Ahead
Coming Up

    HTML templates
    Handling cookies
    APIs and Flask
    Using databases with Flask
    Auto-generating forms
    Handling users and log in

Flask Documentation

    The Flask documentation (http://flask.pocoo.org/)








############ JINJA ############

Views

Views are functions that return a string (a string of HTML)
Routes

Routes define the URL that will run a view function.

They are declared by using decorators.

A route and view function:

@app.route('/form')
def show_form():
    """Show greeting form."""

    return """
      <!DOCTYPE html>
      <html>
        <head>
          <title>Hi There!</title>
        </head>
        <body>
          <h1>Hi There!</h1>
          <form action="/greet">
            What's your name? <input name="person">
            <button>Go!</button>
          </form>
        </body>
      </html>
    """

This is kind of messy to read through (and we don’t get nice things like color-highlighting in editors). Much better to keep HTML in a separate file.
Templates
How Can Templates Help?

    Produce HTML
    Allows your responses to be dynamically created
        Can use variables passed from your views
        For loops, if/else statements
    Can inherit from other templates to minimize repetition

Jinja

Jinja is a popular template system for Python, used by Flask.

There are many template systems for Python. Jinja is a particularly popular one. Django has its own template system, which served as an inspiration for Jinja.
Templates Directory

Your templates directory lives under your project directory. Flask knows to look for them there.

my-project-directory/
  venv/
  app.py
  templates/
    hello.html

Our Template
demo/templates/hello.html

<!DOCTYPE html>
<html>
<head>
  <title>This is the hello page</title>
</head>
<body>
  <h1>HELLO!</h1>
</body>
</html>

Rendering a Template

@app.route('/')
def index():
    """Return homepage."""

    return render_template("hello.html")

Will find hello.html in templates/ automatically.
Flask Debug Toolbar

Ultra-useful add-on for Flask that shows, in browser, details about app.

Install add-on product:

(venv) $ pip3 install flask-debugtoolbar

Add the following to your Flask app.py:

from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"

debug = DebugToolbarExtension(app)

... # rest of file continues

SECRET_KEY

For now, that secret key doesn’t really have to be something secret (it’s fine to check this file into your GitHub, and you can use any string for the SECRET_KEY.

Later, when we talk about security & deployment, we’ll talk about when and how to actually keep this secret.
Using The Toolbar

Request Vars
    Explore what Flask got in request from browser
HTTP Headers
    Can be useful to explore all headers your browser sent
Templates
    What templates were used, and what was passed to them?
Route List
    What are all routes your app defines?



JINJA ENUMERATE
{{ loop.index0 }}


Dynamic Templates

Jinja will replace things like {{ msg }} with value of msg passed when rendering:
templates/lucky.html

<h1>Hi!</h1>

<p>Lucky number: {{ lucky_num }}</p>

app.py

@app.route("/lucky")
def show_lucky_num():
    "Example of simple dynamic template"

    num = randint(1, 100)

    return render_template("lucky.html",
                          lucky_num=num)

Example: Greeting

Let’s make a form that gathers a user’s name.

On form submission, it should use that name & compliment the user.
Our Form
demo/templates/form.html

<!DOCTYPE html>
<html>
<body>
  <h1>Hi There!</h1>
  <form action="/greet">
    <p>What's your name?  <input name="person"></p>
    <button>Go!</button>
  </form>
</body>
</html>

Our Template
demo/templates/compliment.html

<!DOCTYPE html>
<html>
<body>
  <p>Hi {{ name }}! You're so {{ compliment }}!</p>
</body>
</html>

Our Route

@app.route('/greet')
def offer_greeting():
    """Give player compliment."""

    player = request.args["person"]
    nice_thing = choice(COMPLIMENTS)

    return render_template("compliment.html", 
                           name=player, 
                           compliment=nice_thing)

Example 2: Better Greeting!

Let’s improve this:

    We’ll ask the user if they want compliments & only show if so

    We’ll show a list of 3 random compliments, like this:

    You're so:
    <ul>
      <li>clever</li>
      <li>tenacious</li>
      <li>smart</li>
    </ul>

Our Form
demo/templates/form-2.html

<!DOCTYPE html>
<html>
<body>
  <h1>Better Hi There!</h1>
  <form action="/greet-2">
    <p>What's your name? <input name="person"></p>
    <p>Want compliments?
      <input type="checkbox" name="wants_compliments">
    </p>  
    <button>Go!</button>
  </form>
</body>
</html>

Our Route

@app.route('/greet-2')
def offer_better_greeting():
    """Give player optional compliments."""

    player = request.args["person"]

    # if they didn't tick box, `wants_compliments` won't be
    # in query args -- so let's use safe `.get()` method of
    # dict-like things
    wants = request.args.get("wants_compliments")

    nice_things = sample(COMPLIMENTS, 3) if wants else []

    return render_template("compliments.html",
                           compliments=nice_things, 
                           name=player)

Conditionals in Jinja

{% if CONDITION_EXPR %} ... {% endif %}

{% if compliments %}
  You're so:
  ...
{% endif %}

Loops in Jinja

{% for VAR in ITERABLE %} ... {% endfor %}

<ul>
  {% for compliment in compliments %}
    <li>{{ compliment }}</li>
  {% endfor %}
</ul>

Our Template
demo/templates/compliments.html

<!DOCTYPE html>
<html>
<body>
<h1>Hi {{ name }}!</h1>
{% if compliments %}
  <p>You're so:</p>
  <ul>
    {% for compliment in compliments %}
      <li>{{ compliment }}</li>
    {% endfor %}
  </ul>
{% endif %}
</body>
</html>

Template Inheritance
Motivation

Different pages on the same site are often 95% the same.
Repetition is Boring

Your templates have many things in common

<!DOCTYPE html>
<html>
<head>
  <title> TITLE GOES HERE </title>
  <link rel="stylesheet" href="/static/css/styles.css">
  <script src="http://unpkg.com/jquery"></script>
</head>
<body>
  <h1>Our Site</h1>
  BODY CONTENT GOES HERE
  <footer>Copyright by Whiskey.</footer>
</body>
</html>

If you want the same stylesheet everywhere, you have to remember to include it in every template. If you forget in one template, that page won’t have your custom css that you spent so much time getting right. The same goes for scripts. If you want jquery everywhere, do you really want to have to remember to include it in the head in every template.
How to Use Template Inheritance

    Make a base.html that will hold all the repetitive stuff
    “Extend” that base template in your other pages
    Substitute blocks in your extended pages

Sample Base Template

{% block BLOCKNAME %} ... {% endblock %}
templates/base.html

<!DOCTYPE html>
<html>
<head>
  <title>{% block title %}TITLE GOES HERE{% endblock %}</title>
  <link rel="stylesheet" href="/static/css/styles.css">
  <script src="http://unpkg.com/jquery"></script>
</head>
<body>
  <h1>Our Site</h1>
  {% block content %}BODY CONTENT GOES HERE{% endblock %}
  <footer>Copyright by Whiskey.</footer>
</body>
</html>

Page Using Template

{% block BLOCKNAME %} ... {% endblock %}
templates/my-page.html

{% extends 'base.html' %}

{% block title %}My awesome page title{% endblock %}

{% block content %}

  <h2>I'm a header!</h2>
  <p>I'm a paragraph!</p>

{% endblock %}

Where Other Project Files Go
Do I Need Routes for CSS (or JS, etc)?

@app.route("my-css.css")
def my_css():
    return """
       b { color: red }
       ...
     """

No! That would be tedious — plus, everyone gets the same CSS
Static Files: CSS and JS

In static/ directory:

my-project-directory/
  venv/
  app.py
  templates/
    hello.html
  static/
    my-css.css
    my-script.js

Find files like:

<link rel="stylesheet" href="/static/my-css.css">

The static directory is where you put files that don’t change, unlike templates, which are parsed. The static directory can be divided in to the types of files that it contains: js for javascript, css for css files, img for images, etc., but that isn’t necessary.





########### Flask Tools ##############

Redirecting

What is an HTTP redirect?

    An HTTP response
    The status code is a “redirect code” (often, 302)
    It contains a URL for browser to re-request
    Typically, for ancient browsers, contains HTML with a link

$ curl -v http://localhost:5000/redirect-me

< HTTP/1.0 302 FOUND
< Content-Type: text/html; charset=utf-8
< Location: http://localhost:5002/somewhere-else

<h1>Redirecting...</h1>
<p>You should be redirected automatically to target URL:
 <a href="/somewhere-else">/somewhere-else</a>.
 If not click the link.</p>

Your browser won’t typically show you this page — it makes the re-request so fast you don’t even notice it happened!
Flask Debug Toolbar & Redirects

The Debug Toolbar makes redirects explicit

This is very useful for debugging!

If you don’t want this, you can turn it off:

app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

Common Pattern: Redirect POST to GET

    POST requests are often from a form
        And change data on the server
    If you return HTML from a POST request, the browser shows it fine
        But if the user hits “Refresh”, they get weird “ok to resubmit” dialog
    Better strategy:
        Do the work you want inside your POST route
        Then redirect to a page that shows the confirmation

demo/app.py

@app.route("/post-example", methods=["POST"])
def post_example():
    """An example of good POST handling."""

    isbn = request.form["isbn"]

    print(f"\n\nBuying Book: {isbn}\n\n")

    # flash message: we'll talk about this soon
    # flash(f"Book {isbn} bought!")

    return redirect("/thanks")


@app.route("/thanks")
def say_thanks():
    """Thank user for buying a book."""

    return render_template("thanks.html")

Message Flashing

Often you want to provide feedback at “the next page user sees”

This is most common when you will redirect

from flask import flash

@app.route("/your/route")
def your_route():
  """Some route that redirects."""

  flash("Message for user!")
  return redirect("/somewhere/else")

template used by /somewhere/else

{% for msg in get_flashed_messages() %}
  <p>{{ msg }}</p>
{% endfor %}

Returning JSON

JSON is just a string — so you don’t need to do anything special

@app.route("/some/route")
def some_route():
    """Route that returns JSON."""

    return '{"name": "Whiskey", "cute": "hella"}'

Two considerations:

    It’s finicky to hand-write JSON and get it right
    It’s sometimes helpful to send header to browser that “this is JSON”
        Some AJAX plugins are better than others in guessing in absence of this

demo/app.py

@app.route("/example-json")
def example_json_route():
    """Return some JSON."""

    info = {"name": "Whiskey", "cute": "Hella"}
    return jsonify(info)

    # Alternate syntax
    # return jsonify(name="Whiskey", cute="Hella")

Flask Debugging

Strategies:

    as always print() (appears in terminal)
    Flask Debug Toolbar
    Get an error? You can debug on the error page!

Debugging Errors

Click the black “Terminal” symbol in a traceback

You’ll need to enter “PIN code” (printed out to terminal at start)

That will give you a Python interpreter right there!

You can examine variables, try out code, etc.
Python Debugger

Python includes a built-in debugger, pdb

To add a breakpoint to your code:

def my_function():
    ...

    import pdb
    pdb.set_trace()

    ...

When you hit that set_trace(), Python will stop so you can debug this
Debugger Basics
Key 	Command
? 	Get help
l 	List code where I am
p 	Print this expression
pp 	Pretty print this expression
n 	Go to next line (step over)
s 	Step into function call
r 	Return from function call
c 	Continue to next breakpoint
w 	Print “frame” (where am I?)
q 	Quit debugger




############# FLASK SESSION ###############

Motivation
Saving “State”

HTTP is what’s called a “stateless” protocol.

On its own, it remembers nothing.

It’s like a goldfish. Every time it circles around, what it sees is brand new.
Some Ways To Save State

    Passing info in a query param / POST form hidden field
        /step-zero?fav-color=blue → /step-one?fav-color=blue → …
    Keeping info in URL path
        /fav-color/blue/step-zero → /fav-color/blue/step-one → …
    Using JS localStorage API
        Nice, but only JS can access this — you can’t get data on server
        Useful for single-page applications or heavily AJAX-driven apps
    Using cookies / sessions

Cookies

Flask’s session is powered by cookies; let’s start there
Cookies Save “State”

Cookies are a way to store small bits of info on client (browser)
What is a Cookie?

Cookies are name/string-value pair stored by the client (browser).

The server tells client to store these.

The client sends cookies to the server with each request.

Site 	Cookie Name 	Value
rithmschool.com 	number_visits 	“10”
rithmschool.com 	customer_type 	“Enterprise”
localhost:5000 	favorite_food 	“taco”
Cookies, A Conversation

    Browser: I’d like to get the resource /upcoming-events.
    Server: Here’s some HTML. Also, please remember this piece of information: favorite_food is "taco".
    Browser (stores this somewhere on the computer)
    Browser: I’d like to get the resource /event-detail. Also, you told me to remind you that favorite_food is "taco".
    Server: Here’s the HTML for that.
    Browser: I’d like to get the resource /calendar.jpg. Also, you told me to remind you that favorite_food is "taco".
    …

Seeing Cookies in Chrome

Dev Tools → Application → Storage → Cookies
Settings Cookies in Flask
demo/app.py

@app.route("/handle-form-cookie")
def handle_form():
    """Return form response; include cookie for browser."""

    fav_color = request.args["fav_color"]

    # Get HTML to send back. Normally, we'd return this, but
    # we need to do in pieces, so we can add a cookie first
    html = render_template("response-cookie.html", fav_color=fav_color)

    # In order to set a cookie from Flask, we need to deal
    # with the response a bit more directly than usual.
    # First, let's make a response obj from that HTML
    resp = make_response(html)

    # Let's add a cookie to our response. (There are lots of
    # other options here--see the Flask docs for how to set
    # cookie expiration, domain it should apply to, or path)
    resp.set_cookie("fav_color", fav_color)

    return resp

Reading Cookies in Flask
demo/app.py

@app.route("/later-cookie")
def later():
    """An example page that can use that cookie."""

    fav_color = request.cookies.get("fav_color", "<unset>")

    return render_template("later-cookie.html", fav_color=fav_color)

Cookie Options

    Expiration: how long should the browser remember this?
        Can be set to a time; default is “as long as web browser is running” (session cookie)
    Domain: which domains should this cookie be sent to?
        Send only to books.site.com or everything at site.com?
    HttpOnly - HTTP-only cookies aren’t accessible via any kind of JavaScript
        Useful for cookies that contain server-side information and don’t need to be available to JavaScript.

Site 	Cookie 	Expiration 	Domain 	Value
www.rithmschool.com 	number_visits 	(browser) 	*.rithmschool.com 	“10”
shop.rithmschool.com 	customer_type 	2015-12-31 	shop.rithmschool.com 	“Enterprise”
localhost:5000 	favorite_color 	(browser) 	localhost:5000 	“blue”
Comparison of Types of Browser Storage

    LocalStorage
        Stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache
        Domain specific
        Storage limit is much larger than a cookie.
    SessionStorage
        Stores data only for until the browser or tab is closed.
        Storage limit is much larger than a cookie.
    Cookie
        Cookies can be made secure by setting the httpOnly flag as true for that cookie. This prevents client-side access to that cookie
        Sent from the browser to the server for every request to the same domain
        Set usually from server-side. Can we read by a server

A Visual Display
_images/client-storage.jpg

    Credit

Sessions
Cookies Can Be Tricky

    Cookies are just strings
    Cookies are limited by how much information you can store
    Cookies are a bit low-level in how you use them

Sessions

Flask sessions are a “magic dictionary”
_images/magic-dict.jpg

    Contain info for the current browser
    Preserve type (lists stay lists, etc)
    Are “signed”, so users can’t modify data

Using Session in Flask

    Import session from flask
    Set a secret_key

from flask import Flask, session

app = Flask(__name__)
app.config["SECRET_KEY"] = "SHHHHHHHHHHH SEEKRIT"

Now, in routes, you can treat session as a dictionary:

@app.route('/some-route')
def some_route():
    """Set fav_number in session."""

    session['fav_number'] = 42
    return "Ok, I put that in the session."

To get things out, treat it like a dictionary:

from flask import session

@app.route('/my-route')
def my_route():
    """Return information using fav_number from session."""

    return f"Favorite number is {session['fav_number']}"

It will stay the same kind of data (in this example, an integer)

You also have direct access to session automatically in Jinja templates:

Your favorite number is {{ session['fav_number'] }}

How Do Sessions Work?

    Different web frameworks handle this differently
    In Flask, the sessions are stored in the browser as a cookie
        session = "eyJjYXJ0IjLDIsMiwyLDJdfQ.CP0ryA2EMSZdE"
        They’re “serialized” and “signed”
        So users could see, but can’t change their actual session data—only Flask can

Advanced details: Flask by default uses the Werkzeug provided “secure cookie” as session system. It works by serializing the session data, compressing it and base64 encoding it.
Are “Sessions” Related to “Session Cookies”?

Not directly, no.

They both just use the term “session” but to mean something different.

By default: Flask sessions use browser-lifetime cookies (“session cookies”). So a Flask session lasts as long as your browser window.

Yes, you can change that (read the Flask docs!)

This distinction isn’t too important right now, but the terminology sometimes comes up in interviews, so be sure to review this material!
Server-Side Sessions

    Some web frameworks store session data on the server instead
        Often, in a relational database
        Send a cookie with “session key”, which tells server how to get the real data
        Useful when you have lots of session data, or for complex setups
        Flask can do this with the add-on Flask-Session

Which Should I Use? Cookies or Sessions?

Generally, sessions.

It’s important to know how cookies work, but if your framework provides sessions (as Flask does), they’re easier to work with.


















'''
