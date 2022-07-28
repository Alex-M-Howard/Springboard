# Working with Object Oriented Programming
from math import sqrt
class Name:
    "DOC STRING"
    
    def __init__(self):
        "What is this doing"
        
        
        
# class Triangle:
#     def __init__(self, a, b):
#         self.a = a
#         self.b = b
        
#     def get_hypotenuse(self):
#         return sqrt(self.a ** 2 + self.b ** 2)
    
    
# class ColoredTriangle(Triangle):
#     """Triangle that has a color"""
    
#     def __init__(self, a, b, color):
#         super().__init__(a, b)
#         self.color = color
            
            
            
#Special Methods
class Triangle:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def __repr__(self) -> str:
        return f"Triangle(a={self.a}, b={self.b})"
        
    def __str__(self) -> str:
        return self.describe()
    
    def get_hypotenuse(self):
        return sqrt(self.a ** 2 + self.b ** 2)

    def describe(self):
        return f'I am a triangle with side a of {self.a} and side b of {self.b}'