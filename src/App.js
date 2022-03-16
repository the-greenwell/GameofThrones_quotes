import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar.js';
import Content from './components/Content.js';

function App() {

  return (
    <div className="App w-screen md:h-screen h-fit text-center md:overflow-hidden">
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
