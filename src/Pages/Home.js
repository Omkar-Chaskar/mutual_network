import React from 'react';
import { AddPerson , ListPerson } from "../Components";

function Home() {
  return (
    <div className='container mw-50'>
    <AddPerson />
    <ListPerson />
    </div>
  )
}

export default Home