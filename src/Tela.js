import axios from "axios"
import { useState } from "react";



export default function Tela()
{

    const [pokemon, setPokemon] = useState(null);
    const [pesquisa, setPesquisa] = useState("");
    const [alertErro, setAlertErro] = useState(false);
    

    async function carregaPokemon()
    {
        try {
            setPokemon(null)
            setAlertErro(0)
            const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/"+pesquisa);
            // Forma alternativa: .get(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`)
            setPokemon(data);
        } catch (erro)
        {
            setAlertErro(true)
        }
    }

    function pokeNome(evento)
    {
        setPesquisa(evento.target.value)
    }

    let cardPokemon = "";
    
    if (pokemon != null)
    {
        cardPokemon = <div className="card">
            <div className="card-header">
                { pokemon.name }
            </div>
            <img src={ pokemon.sprites.other["official-artwork"].front_default } className="card-img-top"  />
            <div className="card-body">
                <p>Altura: <strong> { pokemon.height} </strong></p>
                <p>Peso: <strong> {pokemon.weight} </strong></p>
                <div>
                    Habilidades:
                    <ul>
                        {
                        pokemon.abilities.map(function(item)
                        {
                            return (<li key={item.ability.name}>{ item.ability.name }</li>)
                        })   
                        }
                        
                    </ul>

                </div>
            </div>
        </div>;
    }

    return(

    <div>
        <div className="input-group mb-3">
            <input type="text" onChange={pokeNome} className="form-control" placeholder="Digite o nome" />
            <button disabled={ pesquisa == "" } onClick={ carregaPokemon } className="btn btn-outline-secondary" type="button" >Pesquisar</button>
        </div>

        {/* Exibe o pokemon caso tenha sido feita uma pesquisa */}
        { cardPokemon }
        { (alertErro == true)? <div className="alert alert-danger" role="alert">
                        Bichinho não encontrado!
                    </div> : ""
        }
        
    </div>
    )
}