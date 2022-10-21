import './App.css';
import { Routes, Route } from 'react-router-dom'
import BookDetails from './Component/BookDetails';
import BookList from './Component/BookList'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Favorite from './Component/Favorite'

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='/book/:id' element={<BookDetails />} />
        <Route path='/favorites' element={<Favorite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
