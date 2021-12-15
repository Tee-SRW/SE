import React from 'react';
import axios from 'axios';
const client = axios.create({
    baseURL: "http://203.170.190.226:8080"
  });
export default class PersonList extends React.Component {
    
  state = {
    persons: []
  }
  
  componentDidMount() {
    client.get("/")
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )
  }
}