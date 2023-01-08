const Person = (props) => {

    return (
      <div>
        <p>Learn some information about this person</p>
        <h3>Name: {props.name}</h3>
        <h3>Age: {props.age}</h3>
        <h3>
            {props.age > 18 ? "Please go vote!" : "You must be 18"}
        </h3>
      </div>
    );
}

export default Person;