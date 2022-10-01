
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home';
import SingleMovie from './components/SingleMovie/SingleMovie';
import Error from './components/Error/Error';
// import './App.css'

function App() {
  return (
    <div className="App">
     
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='movie/:id' element={<SingleMovie/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
