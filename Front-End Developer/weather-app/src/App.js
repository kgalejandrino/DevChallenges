import './App.css';
import Weather from './containers/Weather/Weather';
import Radium, { StyleRoot } from 'radium'

function App() {
  return (
    <StyleRoot>
      <div className="App">
        <Weather />
      </div>
    </StyleRoot>
  );
}

export default Radium(App);

