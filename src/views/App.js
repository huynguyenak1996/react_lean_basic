import logo from './logo.svg';
import './App.scss';
import TestComponent from './example/TestComponent';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> hello </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a>
        <TestComponent></TestComponent>
      </header>
    </div>
  );
}
