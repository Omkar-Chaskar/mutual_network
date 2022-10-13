import React from "react";
import { Form , Button } from "react-bootstrap";

export default function AddPerson() {
  return (
    <Form  style={{"max-width" : "600px" , "margin": 'auto'}} >
      <h2>Add New Person </h2>
      <Form.Group className="my-3" controlId="formGroup">
        <Form.Label className='fw-bolder'>Person Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Steve Jobs"
          name="personname"
          required
        />
      </Form.Group>

      <Form.Group className="my-3" controlId="formGroup">
      <Form.Label className='fw-bolder'>Relationship Type :</Form.Label>
        <Form.Select>
            <option>Friend</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="my-3" controlId="formGroup">
        <Form.Label  className='fw-bolder'>Friend Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Jhon Doe"
          name="friendname"
          required
        />
      </Form.Group>
      <Button type="submit" className='fw-bolder py-2 px-4'>ADD</Button>
    </Form>
  );
}
