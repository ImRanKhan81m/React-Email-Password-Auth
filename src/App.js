import { getAuth } from 'firebase/auth'
import './App.css';
import app from './firebase.init';


const auth = getAuth(app)

function App() {

  const handleEmailChange = () => {
    console.log('something typed');
  }

  return (
    <div className="App">
      <form >
        <br /><br />
        <input onChange={handleEmailChange} type="email" name="" id="" /><br /><br />
        <input type="password" name="" id="" />
      </form>
    </div>
  );
}

export default App;
