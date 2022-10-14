import React from 'react';
import { Table } from 'react-bootstrap';
import { usePerson } from "../context/personProvider";

function ListPerson() {
  
  const { state } = usePerson();

  return (
    <div className='mt-4'>
        {state.person.length > 0 && <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Person Name</th>
          <th>Relationship</th>
          <th>Friend Name</th>
        </tr>
      </thead>
      <tbody>
        {state.person.map(({personname, relationtype, friendname}, index) => {
          return(
            <tr key={index}>
          <td>{index + 1}</td>
          <td>{personname}</td>
          <td>{relationtype}</td>
          <td>{friendname}</td>
        </tr>
          )
        })}
      </tbody>
    </Table>}
    </div>
  )
}

export default ListPerson