import './App.css';
import Card from './Component/Card';


function App() {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple','navy', 'skyblue', 'brown', 'orange', 'gray'];

  return (
    <div className="App">
      {colors.map((color, index) => (
        <Card key={index} backgroundColor={color} />
      ))}
    </div>
  );
}

export default App;
