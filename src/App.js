import './App.css';
import { Container } from './componets/Container';
import {Forms} from './componets/Forms';
import Test from './componets/test';

function App() {
  return (
    <div className="App">
    <Container name="Ragi" age ="20"/>
    <Container name="Nivi" age = "2"/>
    <Forms/>
    <Test/>
    </div>
  );
}

export default App;
