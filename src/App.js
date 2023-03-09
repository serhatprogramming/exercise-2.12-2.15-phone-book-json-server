import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phoneService from "./services/person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    phoneService
      .getAllPersons()
      .then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const personAdded = { name: newName, number: number };
    if (persons.find((person) => person.name === newName)) {
      if (
        window.confirm(
          `${newName} already exist in the phonebook. Do you want to update the number?`
        )
      ) {
        const updatedPerson = persons.find((person) => person.name === newName);
        phoneService
          .updatePerson(updatedPerson.id, personAdded)
          .then((uPerson) =>
            setPersons(
              persons.map((person) =>
                person.id !== updatedPerson.id ? person : uPerson
              )
            )
          );
      }
    } else {
      phoneService
        .addNewPerson(personAdded)
        .then((newPerson) => setPersons(persons.concat(newPerson)));
    }
    setNewName("");
    setNumber("");
  };

  const deleteRequest = (id) => {
    if (window.confirm(`are you sure`)) {
      phoneService
        .deletePerson(id)
        .then(setPersons(persons.filter((person) => person.id !== id)));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter keyword={keyword} setKeyword={setKeyword} />

      <h2>add a new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        number={number}
        setNumber={setNumber}
      />

      <h2>Numbers</h2>
      <Persons
        persons={persons}
        keyword={keyword}
        deletePerson={deleteRequest}
      />
    </div>
  );
};

export default App;
