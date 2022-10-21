import React, { useState, useEffect } from 'react'
import '../App'
import { API_URL } from '../Api'
import axios from 'axios'
import { useAppContext } from './Context/Context'
import { useNavigate } from 'react-router'

const BookList = () => {
  const [books, setBooks] = useState([])

  const { favorites, addFav, removeFav } = useAppContext()

  const favCheck = (id) => {
    const boolean = favorites.some((book) => book.id === id)
    return boolean
  }

  const navigate = useNavigate()

  useEffect(() => {
    axios
    .get(API_URL)
    .then(res => {
      setBooks(res.data)
    }).catch(err => console.log(err))
  }, [])


  return (
    <div className='book-list'>
     {
      books.map(book => {
    return (
      <div key={book.id} className='book'>
    <div>
      <h4>{book.title}</h4>
    </div>

    <div>
      <img src={book.image_url} alt="book-cover" onClick={() => navigate(`/books/${book.id}`)}/>
    </div>

    <div>
    {
      favCheck(book.id) ? <button onClick={() => removeFav(book.id)}>Remove From Favorite</button> : <button onClick={() => addFav(book)}>Add to Favorite</button>
    }
      
    </div>
  </div>
    )
  })
     }
    </div>
  )
}

export default BookList