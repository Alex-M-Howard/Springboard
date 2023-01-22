import './Pokecard.css'

const Pokecard = ({id, name, type, base_experience}) =>{
    const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-name">{name}</h1>
        <img className="Pokecard-img" src={imgURL} alt={`${name}`} />
        <span className="Pokecard-stats">
          <p>Type: {type}</p>
          <p>EXP: {base_experience}</p>
        </span>
      </div>
    );
}

export default Pokecard;