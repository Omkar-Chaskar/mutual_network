import React from 'react'
import { Form , Row , Col , Button } from "react-bootstrap";

function InputSeperation() {
  return (
    <div className='mt-5'>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label className='fw-bolder'>Person Name</Form.Label>
          <Form.Control type="personname" placeholder="Enter Person Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label className='fw-bolder'>Friend Name</Form.Label>
          <Form.Control type="friendname" placeholder="Enter Friend Name" />
        </Form.Group>
      </Row>

      <Button variant="primary" className='fw-bolder py-2 px-4' type="submit">
        Search
      </Button>
    </Form>
    </div>
  )
}

export default InputSeperation