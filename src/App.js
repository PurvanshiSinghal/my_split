import logo from './logo.svg';
import './App.css';
import { Input } from './Components/Common/Input';
import { Button } from './Components/Common/Button';

function App() {
  return (
    <div className="App">
      <Input label={"Enter Your Email"} />
      <Button label={"Login"} />
    </div>
  );
}

export default App;
