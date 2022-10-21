import {React, useState, useEffect} from 'react'
import '../App'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BookDetails = () => {
  const [book, setBook] = useState({})

  useEffect(() => {
    
  },[])

  const { id } = useParams()
  return (
    <div className='book-details'>BookDetails</div>
  )
}

export default BookDetails