const mm = require("./markov");
const MarkovMachine = mm.MarkovMachine;


const machine = new MarkovMachine("The Cat in the hat");

test('Each word should be a key', () => {
    let keys = Object.keys(machine.chain);
    expect(keys.length).toEqual(4);
})

test('Chain["the"] should have two values in array', () => {
    let keys = Object.keys(machine.chain);
    expect(machine.chain["the"].length).toEqual(2);    
})

const machine2 = new MarkovMachine("The quick brown fox jumps over the lazy dog");

test('Each word should be a key', () => {
    let keys = Object.keys(machine2.chain);
    expect(keys.length).toEqual(8);
})

test('Chain["the"] should have two values in array', () => {
    let keys = Object.keys(machine2.chain);
    expect(machine2.chain["the"].length).toEqual(2);    
})

test('Chain["dog"] should have null value', () => {
    let keys = Object.keys(machine2.chain);
    expect(machine2.chain["dog"]).toEqual(null);    
})


