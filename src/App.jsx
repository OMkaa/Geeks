import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from "../pages/MainPage";
import PostPage from '../pages/PostPage';
import Navbar from '../components/Navbar';
// import Layout from '../components/Layout';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/posts' element={<PostPage/>}/>
    </Routes>
     </>)
}

export default App
