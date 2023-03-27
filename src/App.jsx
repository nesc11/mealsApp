import React from "react"
import Search from "./components/Search"
import Favorites from "./components/Favorites"
import Meals from "./components/Meals"
import Modal from "./components/Modal"

import { useContext } from "react"
import { AppContext } from "./context"


export default function App() {

  const { showModal, favorites } = useContext(AppContext)

  return (
    <React.Fragment>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </React.Fragment>
  )
}