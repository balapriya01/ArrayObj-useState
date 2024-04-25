import { useState } from "react";
import "./App.css";

const App = () => {
  //Array of objects static state (Hard-coded Values).
  const [characters, setCharacters] = useState([
    { id: 263, name: "Spiderman" },
    { id: 746, name: "BatMan" },
    { id: 962, name: "Hulk" },
    { id: 542, name: "Caption America" },
    { id: 751, name: "Iron Man" },
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    //Filter function is used here to demonstrate the delete function, same as map,
    //it iterates over the array and based on a specific condition it filter out the items.
    setCharacters(characters.filter((character) => character.id !== id));
  }

  function toggle() {
    setShow(!show);
  }

  return (
    <>
      <ul>
        <button className="toggle" onClick={() => toggle()}>Toggle</button>
        {/* Map traverse along each item in the array obj one by one */}
        {show &&
          characters.map((character) => (
            //Unique identifier?? So that React at the end of the day react can identify what us what, like generally
            //it is used for performance and component identity.
            <li key={character.id}>
              <span>
                {character.id} - {character.name}
              </span>
              <button
                className="delete"
                onClick={() => handleDelete(character.id)}>Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default App;
