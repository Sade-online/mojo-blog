import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  //const title = 'Welcome to the new blog; Mojo'

  return (
    <div className="App">
      {/* nested component :) */}
      <Navbar /> 

      <div className="content">
        <Home />
      

      </div>
    </div>
  );
}

export default App;
