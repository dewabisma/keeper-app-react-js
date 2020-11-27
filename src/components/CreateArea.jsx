import React, {useState} from "react";

function CreateArea(props) {

  const [inputText, setInputText] = useState({
    title:"",
    content:""
  })

  const updateText = (event) => {

    const {name, value} = event.target;

    setInputText((previousValue) => {
      if (name === "title") {
        return {
          title: value,
          content:previousValue.content
        } 
      } else if (name === 'content') {
          return {
            title: previousValue.title,
            content: value
          }
      }
    })
  }

  return (
    <div>
      <form onSubmit= {(event) => event.preventDefault()}>
        <input onChange={updateText} name="title" placeholder="Title" value={inputText.title} />
        <textarea onChange={updateText} name="content" placeholder="Take a note..." value={inputText.content} rows="3" />
        <button type="submit" onClick={() => {
          props.add(inputText)
          setInputText({
            title:"",
            content:""
          })
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
