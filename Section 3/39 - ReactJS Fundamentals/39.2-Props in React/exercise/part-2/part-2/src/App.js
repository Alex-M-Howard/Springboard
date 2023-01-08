import './App.css';
import Tweet from './Tweet.js';

function App() {
  return (
    <div className="App">
        <div>
          <Tweet
            username="asdf"
            name="Alex"
            date="1/20/15"
            message="Hello World!"
          />
          <Tweet
            username="agss"
            name="John"
            date="4/12/65"
            message="The name is johnny"
          />
          <Tweet
            username="DT420"
            name="Donnie"
            date="7/20/19"
            message="Covfefe"
          />
        </div>
    </div>
  );
}

export default App;
