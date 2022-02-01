import React, { useEffect, useState } from 'react';
import axios from 'axios';


  const Example = (props) => {
   

    const [pokemons, setPokemon] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then((response) => {
            setPokemon(response.data.results);
          });
      }, [pokemons]);
    return (
        <div>
            <button  onClick={useEffect}> Fetch Pokemons</button>
            <ul>
            {pokemons.length > 0 && pokemons.map((pokemon, index)=>{
                return (
                <div key={index}>
                   <li >
                        {pokemon.name}</li>
                    </div>)
            })}
             </ul>
        </div>
    );
        }
export default Example;
