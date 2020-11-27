import React, {useState} from "react";

function CreateArea() {

  const [state, setstate] = useState(initialState)

  return (
    <div>
      <form>
        <input onChange={updateText} name="title" placeholder="Title" />
        <textarea onChange={updateText} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
