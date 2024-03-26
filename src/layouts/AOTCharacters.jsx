import axios from "axios";
import React, { useEffect, useState } from "react";
import AOTCharacterCard from "./AOTCharacterCard";

function AOTCharacters() {
  const [name, setName] = useState("");
  const [characters, setCharacters] = useState([]);
  const [isUsed, SetUsed] = useState(false);

  useEffect(() => {
    const url = `https://api.attackontitanapi.com/characters?name=${name}`;
    // const url = `https://api.attackontitanapi.com/characters?name=armin`;

    axios.get(url).then((res) => {
      // console.log(res);
      const filterData = res.data.results.map((character) => ({
        id: character.id,
        name: character.name,
        age: character.age,
        img: character.img.split(".png")[0] + ".png",
        gender: character.gender,
        occupation: character.occupation,
      }));
      setCharacters(filterData);
      // console.log(filterData);
    });
  }, [name]);

  return (
    <>
      <div>
        <div className="main">
          <div className="search">
            <h1>Personajes de Attack on Titan</h1>
            <input
              type="text"
              onChange={(event) => {
                setName(event.target.value);
                SetUsed(true);
                // console.log(event.target.value);
                console.log(name);
              }}
              // value={name.toLowerCase()}
              placeholder="Buscar por nombre"
            />
          </div>
          <div className="card-container"></div>
          {!isUsed && <p>HAZ TU PRIMERA BÚSQUEDA</p>}
          {isUsed &&
            characters.map((character) => (
              <AOTCharacterCard data={character} key={character.id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default AOTCharacters;
