/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.words = this.words.forEach(element => {
      return element.toLowerCase();
    });
    this.chain = {};
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i] in this.chain) {
        i < this.words.length ? this.chain[this.words[i]].push(this.words[i + 1]) : this.chain[this.words[i]].push(null); 
      } else {
        i < this.words.length ? this.chain[this.words[i]] = this.words[i+1] : this.chain[this.words[i]] = [null]
      }
    }

    console.log(this.chain);
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

const mm = new MarkovMachine('The cat in the hat');
