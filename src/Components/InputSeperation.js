import React from 'react'
import { Form , Row , Col , Button } from "react-bootstrap";
import { usePerson } from "../context/personProvider";
import Graph from "../util/graph";

function InputSeperation() {
  
  const { state, dispatch } = usePerson();

  let graph = new Graph();

  function addEdges() {
    state.person.forEach(person => graph.addEdge(person.personname, person.friendname));
  }

  const initialValue = (e) => {
    e.target.value = " ";
  };

  function handleFormSubmit(e) {
    
    addEdges();

    if (!state.firstpersonname || !state.secondpersonname) {
      dispatch({
        type: "SET_FIND_PERSON",
        value: "Please select a person and friend name",
        key: "error",
      });
      return;
    }

    const result = graph.bidirectionalSearch(state.firstpersonname, state.secondpersonname);

    if (!result) {
      dispatch({
        type: "SET_FIND_PERSON",
        value: "Could not find a path",
        key: "error",
      });
      return;
    }

    dispatch({
      type: "SET_FIND_PERSON",
      value: result,
      key: "result",
    });

    dispatch({ type: "CLEAR_PERSON" });
  }

  return (
    <div className='mt-5'>
        <Form  onSubmit={(e) =>{e.preventDefault(); handleFormSubmit(); }}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label className='fw-bolder'>Person Name</Form.Label>
          <Form.Control type="firstpersonname" placeholder="Enter Person Name" 
          name="firstpersonname"
          value={state.firstpersonname}
          onChange={(e) => {
            dispatch({
              type: "SET_FIND_PERSON",
              value: e.target.value,
              key: e.target.name,
            });
            initialValue(e);
          }}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label className='fw-bolder'>Friend Name</Form.Label>
          <Form.Control type="secondpersonname" placeholder="Enter Friend Name"
          name="secondpersonname"
          value={state.secondpersonname}
          onChange={(e) => {
            dispatch({
              type: "SET_FIND_PERSON",
              value: e.target.value,
              key: e.target.name,
            });
            initialValue(e);
          }}
          />
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