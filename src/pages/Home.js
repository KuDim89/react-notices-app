import React, {Fragment, useContext, useEffect} from "react";
import {Forme} from "../component/Forme";
import {Notes} from "../component/Notes/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";

export const Home = () => {
  const {loading, notes, fetchNotes} =useContext(FirebaseContext)

  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <Forme />
      <hr/>
      <Notes notes={notes}/>
    </Fragment>
  )
}