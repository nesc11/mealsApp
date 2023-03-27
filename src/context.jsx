import React, { useEffect, useState } from "react"


const AppContext = React.createContext()

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"


const AppProvider = ({ children }) => {

    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState(null)
    const [favorites, setFavorites] = useState(
        localStorage.getItem("favorites")
            ? JSON.parse(localStorage.getItem("favorites"))
            : []
    )


    const addToFavorites = (idMeal) => {
        const meal = meals.find(meal => meal.idMeal === idMeal)
        const already = favorites.find(meal => meal.idMeal === idMeal)
        {
            !already && setFavorites(prevFavorites => {
                return [...prevFavorites, meal]
            })
        }
    }

    const removeFromFavorites = (idMeal) => {
        setFavorites(prevFavorites => {
            return prevFavorites.filter(meal => {
                return meal.idMeal !== idMeal
            })
        })
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const selectMeal = (idMeal, favoriteMeal) => {
        const meal = favoriteMeal
            ? favorites.find(meal => meal.idMeal === idMeal)
            : meals.find(meal => meal.idMeal === idMeal)
        setSelectedMeal(meal)
        setShowModal(true)
    }

    const fetchRandomMeal = () => {
        console.log("Surprise")
        fetch(randomMealUrl)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }

    useEffect(() => {
        fetch(allMealsUrl)
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        (searchTerm && fetch(`${allMealsUrl}${searchTerm}`)
            .then(res => res.json())
            .then(data => {
                data.meals ? setMeals(data.meals) : setMeals([])
                setLoading(false)
            }))

    }, [searchTerm])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
        console.log("local updated")
        console.log(favorites)
    }, [favorites])

    return (
        <AppContext.Provider value={{
            loading,
            meals,
            setSearchTerm,
            fetchRandomMeal,
            showModal,
            selectedMeal,
            selectMeal,
            closeModal,
            addToFavorites,
            favorites,
            addToFavorites,
            removeFromFavorites
        }}>
            {children}
        </AppContext.Provider>
    )
}


export { AppContext, AppProvider }