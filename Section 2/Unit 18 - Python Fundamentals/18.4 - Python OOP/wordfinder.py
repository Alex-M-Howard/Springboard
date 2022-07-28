"""Word Finder: finds random words from a dictionary."""
from random import choice

class WordFinder:
    """Link a txt with words, one per line, keeps track of random words and words read"""
    
    def __init__(self, file) -> None:
        self.file = file
        self.words = self.read_words()
        self.words_read = len(self.words)   
        
    def __repr__(self) -> str:
        """Representation of WordFinder object"""
        
        return f"WordFinder file: {self.file}, Words read: {self.words_read}"
        
    def random(self):
        """Returns a random word"""
    
        return choice(self.words).split('\n')[0]

    def read_words(self):
        """Read list of words on new instance and return"""

        words = open(self.file, 'r')
        word_list = [word.strip() for word in words]       
        words.close()

        print(f"{len(word_list)} words read")
        return word_list

class SpecialWordFinder(WordFinder):
    def __init__(self, file) -> None:
        super().__init__(file)
    
    def random(self):
        """ Return word without whitespace and also excluding ones starting with '#' """
        return choice([words.strip() for words in self.words if words.strip() and not words.startswith("#")])
    