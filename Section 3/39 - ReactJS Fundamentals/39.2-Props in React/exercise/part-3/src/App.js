import './App.css';
import Person from './Person.js';

function App() {
  return (
    <div className="App">
      <Person name="Alex" age={32} />
      <hr></hr>
      <Person name="Lena" age={34} />
      <hr></hr>
      <Person name="Olive" age={17} />
    </div>
  );
}

export default App;
