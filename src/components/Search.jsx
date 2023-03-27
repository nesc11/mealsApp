import React from "react"
import { useState, useContext } from "react"
import { AppContext } from "../context"

const Search = () => {
    const [text, setText] = useState("")

    const { setSearchTerm, fetchRandomMeal } = useContext(AppContext)

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = () => {
        if (text) {
            setSearchTerm(text)
        }
    }
    const handleRandomMeal = () => {
        setSearchTerm("")
        fetchRandomMeal()
    }


    return (
        <header className="search-container">
            <div>
                <input
                    onChange={handleChange}
                    value={text}
                    placeholder="Type your favorite meal"
                    type="text"
                    className="form-input"
                />
                <button onClick={handleSubmit} className="btn">Search</button>
                <button onClick={handleRandomMeal} className="btn btn-hipster">Surprise me!</button>
            </div>
        </header>
    )
}


export default Search