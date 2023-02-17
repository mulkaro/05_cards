import carding from './logo.svg';
import './App.css';
import CardPatt from './components/CardPatt';

function App() {
  return (
    <div className="App">
      <CardPatt 
        imgSrc={carding}
        imgHint=""
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      <br />
      <CardPatt
        imgSrc=""
        imgHint=""
        title="Special title treatment"
        text="With supporting text below as a natural lead-in to additional content."
      />
    </div>
  );
}

export default App;
