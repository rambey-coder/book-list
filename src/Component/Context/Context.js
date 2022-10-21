import { createContext, useState, useContext } from "react";

const AppContext = createContext(null)

export const useAppContext = () => {
    const context = useContext(AppContext)

    if(context === undefined){
        throw new Error('ApCOntext must be within appContextProvider')
    }

    return context;
}

const ContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])
    // console.log(favorites);

    // const addFav = (book) => {
    //     const oldFav = [...favorites]

    //     const newFav = oldFav.concat(book) //merge two arrays 

    //     setFavorites(newFav)
    // }

    // const removeFav = id => {
    //     const oldFav = [...favorites]

    //     const newFav = oldFav.filter((book) => book.id !== id)

    //     setFavorites(newFav)
    // }

    // Another method to set and remove favrites in relation to TME assesment

    const addFav = (item) => {
        setFavorites([...favorites, item])
    }

    const removeFav = (id) => {
        setFavorites(favorites.filter(item => item.id !== id))
    }

    return (
        <AppContext.Provider value={{favorites, addFav, removeFav}}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;