function Character(character) {
  return (
    <div className="col col-3 d-flex">
      <div className="card flex-grow-1">
        <img
          src={character.image}
          alt={character.name}
          width="300"
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">{character.name}</h3>
          <p className="mb-0">{`Origin: ${
            character.origin && character.origin.name
          }`}</p>
        </div>
      </div>
    </div>
  );
}

export default Character;
