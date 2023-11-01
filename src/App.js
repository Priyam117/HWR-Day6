import './App.css';
import Card from './Component/Card';


function App() {
  // const colors = ['red', 'green', 'blue', 'yellow', 'purple','navy', 'skyblue', 'brown', 'orange', 'gray'];
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const cardPink = {
    name: 'Pink',
    color: '#E29587',
    code: '#E29587'
  }
  const orangeCard = {
    name: 'Orange',
    color: 'orange',
    code: '#FF7F50'
  }
  const cyanCard = {
    name: 'Cyan',
    color: 'cyan',
    code: '#40E0D0'
  }
  const grayCard = {
    name: 'Gray',
    color: 'gray',
    code: '#CCCCFF'
  }
  const yellowCard = {
    name: 'Yellow',
    color: 'yellow',
    code: '#DFFF00'
  }
  const purpleCard = {
    name: 'Purple',
    color: 'purple',
    code: '#800080'
  }
  const greenCard = {
    name: 'Green',
    color: 'green',
    code: '#008000'
  }
  const tealCard = {
    name: 'Teal',
    color: 'teal',
    code: '#FF00FF	'
  }
  const fuchsiaCard = {
    name: 'Fuchsia',
    color: 'fuchsia',
    code: '#008080'
  }
  const aquaCard = {
    name: 'Aqua',
    color: 'aqua',
    code: '#00FFFF'
  }


  return (
    <div className="App" style={style}>
      {/* {colors.map((color, index) => (
        <Card key={index} backgroundColor={color} />
      ))} */}
      <Card card={cardPink} />
      <Card card={grayCard} />
      <Card card={cyanCard} />
      <Card card={orangeCard} />
      <Card card={yellowCard} />
      <Card card={greenCard} />
      <Card card={purpleCard} />
      <Card card={tealCard} />
      <Card card={fuchsiaCard} />
      <Card card={aquaCard} />
    </div>
  );
}

export default App;
