import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteArray, setNoteArray] = useState([])

  return (
    <div>
      <Header />
      <CreateArea />
      {noteArray.map((x,i) => {
        <Note key={i} id={i} title={x.title} content={x.content}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
