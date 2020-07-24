import React, {Fragment} from "react";
import {Forme} from "../component/Forme";
import {Notes} from "../component/Notes/Notes";

export const Home = () => {
  const notes = new Array(3)
      .fill('')
      .map((_, i) => ({id:i, title: `Note ${i + 1}`}))
  return (
    <Fragment>
      <Forme />
      <hr/>
      <Notes notes={notes}/>
    </Fragment>
  )
}