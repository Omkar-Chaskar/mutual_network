import React from 'react';
import { usePerson } from "../context/personProvider";

function SeperationTable() {
 
  const { state } = usePerson();

  return (
    <div className="fs-4 ">
      {state.error && <p className="text-danger">{state.error}</p>}
        {state.result && (
          <p className='fw-bolder my-5'>
            {state.result.map((item ,index ) => (
              <span key={item} className="py-2">{item} { index < state.result.length-1 && <span className="py-1">&gt;</span>}</span>
            ))}
          </p>
        )}
    </div>
  )
}

export default SeperationTable