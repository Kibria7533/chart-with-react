
import './App.css';
import LineDemo from './LineDemo';
import { Chart, registerables } from 'chart.js';
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
function App() {
  Chart.register(...registerables);
  return (
    <div className="App" style={styles}>
     <LineDemo/>
    </div>
  );
}

export default App;
