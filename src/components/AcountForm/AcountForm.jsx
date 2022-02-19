import React, { useState } from 'react'
import "./styles.css"

export default function AcountForm() {

  //1. Hacemos un preventDefault para evitar el comportamiento por defecto del Submit de recargar la pagina
  const submitForm = (e) => {
    e.preventDefault()
  }

  //2.Creamos un estado inicial donde guardaremos los datos del formulario
  const [user, setUser] = useState({
      userName: "",
      userPassword: "",
      userEmail: "",
      userPhone: ""
  })

  //deconstruimos nuestro obj para no llamarlo user.fistName, user.lastName, ect
  const { userName, userPassword, userEmail, userPhone } = user

  //3.Creamos un funcion handleChange que se encargará de relacionar el name del input con el valor del state
  const handleChange = (e) => {
    const {name, value} = e.target

    //Clonamos el estado actual y reemplazo solo el valor input que ejecuto el evento
    const newUser = {
      ...user,
      [name]: value
    }
    //Sincronizamos el estado de nuevo
    setUser(newUser)
  }

  return (
    <div class="container">
        <h2>Create account</h2>
        <form onSubmit={submitForm} class="form">
           <label>
            <input class="form__item" type="text" name="userName" value={userName} onChange={handleChange} placeholder="User name"/>
           </label>

           <label>
            <input class="form__item" type="password" name="userPassword" value={userPassword} onChange={handleChange} placeholder="Password"/>
           </label>

           <label>
            <input class="form__item" type="text" name="userEmail" value={userEmail} onChange={handleChange} placeholder="Email"/>
           </label>

           <label>
            <input class="form__item" type="text" name="userPhone" value={userPhone} onChange={handleChange} placeholder="Phone"/>
           </label>

           <button class="form__btn form__btn--hover" type="submit">Create</button>
        </form>    
    </div>
  )
}
