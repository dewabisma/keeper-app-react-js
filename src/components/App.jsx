import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteArray, setNoteArray] = useState([])

  const addItem = (newObject) => {
    setNoteArray((previousValue) => [
      ...previousValue,
      newObject
    ])
  }

  const deleteItem = (itemId) => {
    setNoteArray(noteArray.filter((x,i) => {
      return i !== itemId;
    }))
  }

  return (
    <div>
      <Header />
      <CreateArea add={addItem}/>
      {noteArray.map((x,i) => {
        return (
        <Note key={i} id={i} title={x.title} content={x.content} delete={deleteItem}/>
        )
      })}
      
      <Footer />
    </div>
  );
}

export default App;
