import logo from './platzi.webp';
import './App.css';

function App() {
  return ( // JSX
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender React
        </a>
      </header>
    </div>
  );
}

function TodoItem() {
  return(
    <li>
      <span>Tristear con los tres tristes tigres</span>
      <button>Completar</button>
      <button>Eliminar</button>
      </li>
  )
}
export default App;
