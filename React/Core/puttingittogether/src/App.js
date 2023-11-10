import './App.css';
import Personcard from './components/Personcard';

function App() {
  return (
    <div className="App">
      <Personcard
      firstName={"Jane"}
      lastName={"Doe"}
      age={45}
      hairColor={"Black"}
      />
      <Personcard
      firstName={"Jhon"}
      lastName={"Smith"}
      age={88}
      hairColor={"Brown"}
      />
      </div>
  );
}

export default App;
