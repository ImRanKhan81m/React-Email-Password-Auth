import { getAuth } from 'firebase/auth'
import './App.css';
import app from './firebase.init';


const auth = getAuth(app)

function App() {

  const handleEmailBlur = event => {
    console.log(event.target.value);
  }
  const handlePasswordBlur = event =>{
    console.log(event.target.value);
  }

  return (
    <div className="App">
      <form >
        <br /><br />
        <input onBlur={handleEmailBlur} type="email" name="" id="" /><br /><br />
        <input onBlur={handlePasswordBlur} type="password" name="" id="" /><br /><br />
        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
}

export default App;
