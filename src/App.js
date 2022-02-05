

import { Route,Routes,Link ,Switch} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Tutorials from './components/Tutorials'
import TDetails from './components/TDetails'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/Tutorials'>Tutorials</Link>
        </li>
      </ul>
      <div>
      <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/About" element={<About/>}>
      </Route>
      <Route path="/Tutorials" element={ <Tutorials/>}>
      </Route>
          <Route path="/Tutorials/:title" element={ <TDetails/>}>
      </Route>
      </Routes>
    </div>
    </div>
  );
}

export default App;
