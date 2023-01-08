import './App.css';
import Person from './Person.js';

function App() {
  return (
    <div className="App">
      <Person
        name="Alexander"
        age={32}
        hobbies={["programming", "watching people", "being cursed at"]}
      />
      <hr></hr>
      <Person
        name="LenaLena"
        age={34}
        hobbies={["singing", "watching birds"]}
      />
      <hr></hr>
      <Person
        name="Olive"
        age={17}
        hobbies={["dancing", "watching cats", "cursing"]}
      />
    </div>
  );
}

export default App;
