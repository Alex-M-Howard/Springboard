/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chain = {};
    this.makeChains();  
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    
    this.words.forEach((word, index, arr) => {
      arr[index] = word.toLowerCase()

      if (arr[index] in this.chain) {
        arr[index + 1] !== undefined ? this.chain[arr[index]].push(arr[index + 1]) : this.chain[arr[index]].push(null)
      } else {
        arr[index + 1] !== undefined ? this.chain[arr[index]] = [arr[index + 1]] : this.chain[arr[index]] = null
      }
    })
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    const keys = Object.keys(this.chain)
    
    // First element is random key from object
    const generatedText = [keys[this.getRandomElement(keys)]];
   
    for (let i = 0; generatedText.length < numWords; i++) {
      if (generatedText[i]) {
        try {
            let randIndex = this.getRandomElement(this.chain[generatedText[i]])
            generatedText.push(this.chain[generatedText[i]][randIndex])
        }
        catch {
            // Will activate only when hitting a null
            generatedText.push(null)
        } 
      }
      else {
        // If previous was null, we need to start over
        generatedText.push(keys[this.getRandomElement(keys)])  
      }
    }
    
    let newText = '';
    generatedText.forEach((word, index) => {
      if (index === 0) { word }
      
      if (word) { newText += ' ' + word }
      else { newText += '.' }
    })

    return newText
  };
  
  getRandomElement(arry) {
    return Math.floor(Math.random() * arry.length);
  }
}

module.exports = {
  MarkovMachine
}
