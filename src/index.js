import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

// creating AddPersonForm function

function AddPersonForm(props){
  const [person, setPerson] = useState("")

  function handleChange(e){
    setPerson(e.target.value)
  }
  function handleSubmit(e){
    
    props.handleSubmit(person);
    setPerson("")
    e.preventDefault();
  }

  return<>
    <form onSubmit={handleSubmit} >
      <h2>Contact Form</h2>
      <input type='text' placeholder='Add contact Name' value={person} onChange={handleChange}/>
      <button type='submit'>Add</button>
      <h4>List Of Contacts</h4>
      
    </form>
  </>
}


//Creating People List

function PeopleList(props){
  const arr= props.data;
  const listItems =arr.map((val,index)=> <li key={index}>{val}</li>)
  return <ol>{listItems}</ol>


}

function ContactManger(props){
  const [contacts, setContacts] =useState(props.data) ;

  function addPerson(name) {
    setContacts([...contacts, name]);
  }


  return <>
    <AddPersonForm  handleSubmit={addPerson}/>
    <PeopleList data={contacts}/>
  </>

}

const cont = [];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <ContactManger data={cont}/>
  
  </StrictMode>
 
);



