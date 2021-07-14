import Header from './Component/Header/Header';
import './default.scss';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
            <Header/>
      <div className="main">
      <Homepage/>
      </div>
    </div>
  );
}

export default App;
