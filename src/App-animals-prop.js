import PropTypes from "prop-types";

const animalILike = [
  {
    id: 1,
    name: 'dog',
    image: 'http://placeimg.com/640/480/animals',
    rating: 5,
  },
  {
    id: 2,
    name: 'cat',
    image: 'http://placeimg.com/640/480/animals',
    rating: 4.4,
  },
  {
    id: 3,
    name: 'rabbit',
    image: 'http://placeimg.com/640/480/animals',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'cow',
    image: 'http://placeimg.com/640/480/animals',
    rating: 4.2,
  },
  {
    id: 5,
    name: 'horse',
    image: 'http://placeimg.com/640/480/animals',
    rating: 4.3,
  },
]

function Animal( {name, picture, rating} ) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>;
}

Animal.protoTypes = {
  name: PropTypes.string.isRequired,
  picrture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {animalILike.map(animal => (
        <Animal key={animal.id} name={animal.name} picrture={animal.image} rating={animal.rating} />
      ))}
    </div>
  );
}

export default App;
