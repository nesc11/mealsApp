import React from "react"
import { useContext } from "react"
import { AppContext } from "../context"


const Modal = () => {

    const { selectedMeal, closeModal } = useContext(AppContext)

    const { strMealThumb: image, strMeal: title, strInstructions: text, strSource: source } = selectedMeal

    return (
        <aside className="modal-overlay">
            <div className="modal-container">
                <img src={image} alt={title} className="img modal-img" />
                <div className="modal-content">
                    <h1>{title}</h1>
                    <p>Cooking Intructions</p>
                    <p>{text}</p>
                    {source && <a href={source} target="_blank">Original Source</a>}
                    <button className="btn btn-hipster close-btn" onClick={closeModal}>Close</button>
                </div>
            </div>
        </aside>
    )
}


export default Modal