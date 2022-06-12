/*
String Properties and Methods
Normally, strings like "John Doe", cannot have methods or properties because they are not objects.

But with JavaScript, methods and properties are also available to strings, because JavaScript treats strings as objects when executing methods and properties.

JavaScript String Methods
Method	Description
charAt()	Returns the character at a specified index (position)
charCodeAt()	Returns the Unicode of the character at a specified index
concat()	Returns two or more joined strings
endsWith()	Returns if a string ends with a specified value
fromCharCode()	Returns Unicode values as characters
includes()	Returns if a string contains a specified value
indexOf()	Returns the index (position) of the first occurrence of a value in a string
lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a value, or a regular expression, and returns the matches
repeat()	Returns a new string with a number of copies of a string
replace()	Searches a string for a value, or a regular expression, and returns a string where the values are replaced
search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Extracts a number of characters from a string, from a start index (position)
substring()	Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
toLowerCase()	Returns a string converted to lowercase letters
toString()	Returns a string or a string object as a string
toUpperCase()	Returns a string converted to uppercase letters
trim()	Returns a string with removed whitespaces
valueOf()	Returns the primitive value of a string or a string object
Note
All string methods return a new value.

They do not change the original variable.

JavaScript String Properties
Property	Description
constructor	Returns the string's constructor function
length	Returns the length of a string
prototype	Allows you to add properties and methods to an object
String HTML Wrapper Methods
HTML wrapper methods return a string wrapped inside an HTML tag.

These are not standard methods, and may not work as expected.

Method	Description
anchor()	Displays a string as an anchor
big()	Displays a string using a big font
blink()	Displays a blinking string
bold()	Displays a string in bold
fixed()	Displays a string using a fixed-pitch font
fontcolor()	Displays a string using a specified color
fontsize()	Displays a string using a specified size
italics()	Displays a string in italic
link()	Displays a string as a hyperlink
small()	Displays a string using a small font
strike()	Displays a string with a strikethrough
sub()	Displays a string as subscript text
sup()	Displays a string as superscript text
*/