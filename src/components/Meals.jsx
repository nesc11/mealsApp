import React, { useContext } from "react"
import { AppContext } from "../context"
import { BsHandThumbsUp } from 'react-icons/bs'


const Meals = () => {

    const { loading, meals, selectMeal, addToFavorites } = useContext(AppContext)

    const mealsElements = meals.map(meal => {
        const { idMeal, strMeal: title, strMealThumb: image } = meal
        return (
            <article key={idMeal} className="single-meal">
                <img onClick={() => selectMeal(idMeal)} src={image} className="img" />
                <footer>
                    <h5>{title}</h5>
                    <button onClick={() => addToFavorites(idMeal)} className="like-btn"><BsHandThumbsUp /></button>
                </footer>
            </article>
        )
    })

    return (
        <main className="meals-container">
            {loading ? <h1>Loading</h1> : (meals.length > 0
                ? mealsElements
                : <h4>No meals matched your search term. Please try again.</h4>)}
        </main>
    )
}


export default Meals