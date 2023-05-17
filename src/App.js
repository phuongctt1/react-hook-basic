import logo from './logo.svg';
import './App.css';
import TodoList from './components/Todolist.js';

const App = () => {


 
  return (
    <div className="App">
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   
       
        <TodoList/>
      </header>
    </div>
  );
}

export default App;