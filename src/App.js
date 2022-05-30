import logo from './logo.svg';
import './App.css';
import Student from './student';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h2>Student Info</h2>
      <Student StudentName="Ali" RollNo="43" /><hr/>
      <Student StudentName="Awais" RollNo="34" /><hr/>
      <Student StudentName="Asif" RollNo="54" /><hr/>
      <Student StudentName="Amir" RollNo="32" /><hr/>
    </div>
  );
}

export default App;
