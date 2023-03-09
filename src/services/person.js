import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAllPersons = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const addNewPerson = (person) => {
  return axios
    .post("http://localhost:3001/persons", person)
    .then((response) => response.data);
};

const deletePerson = (id) => {
  return axios
    .delete(`http://localhost:3001/persons/${id}`)
    .then((response) => response.data);
};

const updatePerson = (id, person) => {
  return axios
    .put(`http://localhost:3001/persons/${id}`, person)
    .then((response) => response.data);
};

export default { getAllPersons, addNewPerson, deletePerson, updatePerson };
