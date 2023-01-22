const Person = (props) => {
    let name = props.name;

    return (
      <div>
        <p>Learn some information about this person</p>
        <h3>Name: {name.length > 8 ? name.slice(0,6) : name}</h3>
        <h3>Age: {props.age}</h3>
        <h3>
            {props.age > 18 ? "Please go vote!" : "You must be 18"}
        </h3>
        <ul>
            {props.hobbies.map((val)=> <li>{val}</li>)}
        </ul>
      </div>
    );
}

export default Person;