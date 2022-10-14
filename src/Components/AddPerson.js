import React from "react";
import { Form , Button } from "react-bootstrap";
import { usePerson } from "../context/personProvider";

export default function AddPerson() {
  
  const { state, dispatch } = usePerson();

  const initialValue = (e) => {
    e.target.value = " ";
  };

  function handleFormSubmit(e) {
    
    dispatch({
      type : "ADD_NEW_PERSON",
      value : {
        "personname": state.personname,
        "relationtype": state.relationtype,
        "friendname": state.friendname
      },
    });
    dispatch({ type: "CLEAR_PERSON" });
    
  }

  return (
    <Form  style={{"maxWidth" : "600px" , "margin": 'auto'}} onSubmit={(e) =>{e.preventDefault(); handleFormSubmit(); }}>
      <h2>Add New Person </h2>
      <Form.Group className="my-3" controlId="formGroup">
        <Form.Label className='fw-bolder'>Person Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Steve Jobs"
          name="personname"
          value={state.personname}
          onChange={(e) => {
            dispatch({
              type: "SET_PERSON",
              value: e.target.value,
              key: e.target.name,
            });
            initialValue(e);
          }}
          required
        />
      </Form.Group>

      <Form.Group className="my-3" controlId="formGroup">
      <Form.Label className='fw-bolder'>Relationship Type :</Form.Label>
        <Form.Select 
          name="relationtype"
          value={state.relationtype}
          onChange={(e) => {
            dispatch({
              type: "SET_PERSON",
              value: e.target.value,
              key: e.target.name,
            });
            initialValue(e);
          }}
          >
            <option >Select Relationship Type</option>
            <option value={"Friend"}>Friend</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="my-3" controlId="formGroup">
        <Form.Label  className='fw-bolder'>Friend Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Jhon Doe"
          name="friendname"
          value={state.friendname}
          onChange={(e) => {
            dispatch({
              type: "SET_PERSON",
              value: e.target.value,
              key: e.target.name,
            });
            initialValue(e);
          }}
          required
        />
      </Form.Group>
      <Button type="submit" className='fw-bolder py-2 px-4'
      onClick={() =>{ 
      console.log(state)
      }}
      >ADD</Button>
    </Form>
  );
}
