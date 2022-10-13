import React from 'react';
import { Table } from 'react-bootstrap';

function ListPerson() {
  return (
    <div className='mt-4'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Person Name</th>
          <th>Relationship</th>
          <th>Friend Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark Otto</td>
          <td>Friend</td>
          <td>Steve Jobs</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob Thornton</td>
          <td>Friend</td>
          <td>Martin Doe</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Steve Jobs</td>
          <td>Friend</td>
          <td>Jacob Thornton</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Martin Doe</td>
          <td>Friend</td>
          <td>Mark Otto</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default ListPerson