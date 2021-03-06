import './style.css';
import Header from '../Header';
import ThreejsContainer from './../ThreejsContainer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <div className="wrapper">
          <h3>Three js view</h3>
          <ThreejsContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
