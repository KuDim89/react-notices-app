import React, {useState, useContext} from "react";
import {AlertContext} from "../context/Alert/alertContext";
import {FirebaseContext} from "../context/firebase/firebaseContext";

export const Forme = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)

  const submitHandler = event => {
    event.preventDefault()

    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show('Note was created', 'success')
      }).catch(() => {alert.show('Error', 'danger')})
      setValue('')
    } else {
      alert.show('Enter note name')
    }
  }

  return (
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input
              type="text"
              className="form-control"
              placeholder="Enter notes name"
              value={value}
              onChange={e => setValue(e.target.value)}
          />
        </div>
      </form>
  )
}