import {React, useState, useEffect} from 'react'
import '../App'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BOOK_DETAILS } from '../Api'

const BookDetails = () => {
  const [book, setBook] = useState({})

  const { id } = useParams()

  useEffect(() => {
    axios.get(`${BOOK_DETAILS}/${id}`)
          .then(res => setBook(res.data))
          .catch(err => console.log(err))
  },[id])

  return (
    <div className='book-details'>
      <div>
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt="" />
      </div>
      <div>
        <h2>Desc</h2>
        <p>{book?.description}</p>
        <h2>Authors</h2>
        <p>{book?.authors}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  )
}

export default BookDetails