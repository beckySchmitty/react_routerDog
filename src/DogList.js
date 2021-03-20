import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div>
      <h1>Doggos</h1>
      <p>Learn more:</p>
      <ul>
        {dogs.map(d => (
          <li key={d}>
            <Link to={`/dogs/${d.name}`}>{d.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;