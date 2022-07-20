def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    return phrase[::-1]


print(reverse_string("Hello World!"))
print(reverse_string("Why in the world?"))
print(reverse_string("1 2 3 4 5"))
print(reverse_string("Hello World 2!"))