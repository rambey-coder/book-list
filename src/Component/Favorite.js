import React from 'react'
import '../App'
import { useAppContext } from './Context/Context'

const Favorite = () => {
  const { favorites, addFav, removeFav } = useAppContext()

  const favCheck = (id) => {
    const boolean = favorites.some((book) => book.id === id)
    return boolean
  }
  return (
    <div className='favorites'>
       {
        favorites.length > 0 ?
      favorites.map(book => {
    return (
      <div key={book.id} className='book'>
    <div>
      <h4>{book.title}</h4>
    </div>

    <div>
      <img src={book.image_url} alt="book-cover" />
    </div>

    <div>
    {
      favCheck(book.id) ? <button onClick={() => removeFav(book.id)}>Remove From Favorite</button> : <button onClick={() => addFav(book)}>Add to Favorite</button>
    }
      
    </div>
  </div>
    )
  }) : <h3>Favorite is empty</h3> 
     } 
    </div>
  )
}

export default Favorite