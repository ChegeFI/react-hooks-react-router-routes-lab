
import { directors } from "../data";

function Directors() {
  const directorsToBeDisplayed = directors.map(director => {
    return <div key={director.name}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>
  });

  return <div>
    <h1>Directors Page</h1>
    {directorsToBeDisplayed}
  </div>;
}

export default Directors;