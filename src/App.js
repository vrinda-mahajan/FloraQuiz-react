import { Footer, Navbar } from 'components';
import { Home, Rules } from 'pages';
import { Route, Routes} from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rules' element={<Rules />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
