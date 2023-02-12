const DogProfile = ({ dog }) => {
  return (
    <div>
      <h1>{dog.name}</h1>
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogProfile;