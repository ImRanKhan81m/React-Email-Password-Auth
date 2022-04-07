import { getAuth } from 'firebase/auth'
import 'bootstrap/dist/css/bootstrap.min.css';
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
  const handleFormSubmit = event =>{
    console.log('form submitted');
    event.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <br /><br />
        <input onBlur={handleEmailBlur} type="email" name="" id="email" /><br /><br />
        <input onBlur={handlePasswordBlur} type="password" name="" id="password" autoComplete='on'  /><br /><br />
        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
}

export default App;
