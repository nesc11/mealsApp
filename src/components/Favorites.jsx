import React from "react"
import { useContext } from "react"
import { AppContext } from "../context"


const Favorites = () => {

    const { favorites, removeFromFavorites, selectMeal } = useContext(AppContext)

    const favoritesElements = favorites.map(meal => {
        const { idMeal, strMealThumb: image } = meal
        return (
            <div className="favorite-item" key={idMeal}>
                <img onClick={() => selectMeal(idMeal, true)} className="favorite-img img" src={image} />
                <button className="remove-btn" onClick={() => removeFromFavorites(idMeal)}>Remove</button>
            </div>
        )
    })

    return (
        <section className="favorites-content">
            <h5>Favorites</h5>
            <div className="favorites-container">
                {favoritesElements}
            </div>
        </section>
    )
}


export default Favorites