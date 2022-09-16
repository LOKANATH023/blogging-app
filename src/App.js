import {Routes,BrowserRouter,Route} from "react-router-dom"
import Home from "./components/Home";
import Nav from  "./components/Nav";
import './App.css';
import AddBlog from './components/AddBlog';
import UpdateBlog from "./components/UpdateBlog";
// import UpdateBlog from "./components/UpdateBlog";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addBlog" element={<AddBlog/>}/>
        <Route path="/updateBlog" element={<UpdateBlog/>} />
        
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
