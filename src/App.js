import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

const App = () => {
  let text = "phuong"; //string
  let number = 2023;
  //let boolean = true;
  let obj = {name:'phuong', hocreactjs:'Hoc reactjs hook'};
  let link = 'https://www.youtube.com/watch?v=MsyZGJ4aoGs&list=PLMbuMydSxMKxfg0OeJJoNsdRTnTIEcqmg'
  return (
    <div className="App">
    <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with react js {text} and  in {number} !!</h1>
        <p>{JSON.stringify(obj)}</p>
        <a href={link} target = "_blank">visit youtube</a>
      </header>
    </div>
  );
}

export default App;
