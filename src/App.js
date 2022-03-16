import './App.css';

import NavBar from './components/Navbar.js';
import Content from './components/Content.js';
import Quotes from './components/Quotes.js';
import Characters from './components/Characters.js';


function App() {
  return (
    <div className='w-screen md:h-screen h-fit text-center md:overflow-hidden'>
      <NavBar />
      <Content>
        <Quotes />
        <Characters />
      </Content>
    </div>
  );
}

export default App;
