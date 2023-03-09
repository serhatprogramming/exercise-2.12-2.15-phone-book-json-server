import React from "react";

const Persons = ({ persons, keyword, deletePerson }) => {
  return (
    <>
      {persons
        .filter((person) => person.name.toLowerCase().includes(keyword))
        .map((person) => (
          <p key={person.id}>
            {person.name} {person.number}{" "}
            <button onClick={() => deletePerson(person.id)}>Delete</button>
          </p>
        ))}
    </>
  );
};

export default Persons;
