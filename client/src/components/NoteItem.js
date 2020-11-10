import React, { useState, useEffect } from 'react';
import ClientNoteItem from './ClientNoteItem'; 
import axios from 'axios';



const NoteItem = ({id, first_name, last_name, email,department,client_type}) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    Promise.all([
      axios.get(`/clients/${id}/notes`),
    ]).then((all) => {
      setNotes(all[0].data);   
   });
  }, []);

  const clientNotes = notes.map((note) =>
    <ClientNoteItem
    key = {note.id}
    id = {note.id}
    date = {note.date}
    notes = {note.notes}
    />
  )
  return (
    <>
      <tr className="accordion-toggle collapsed" id={`accordion${id}`} data-toggle="collapse" data-parent={`#accordion${id}`} href={`#collapseTwo${id}`}>
        <td scope="row" style={{columnWidth: "20px"}}><i className="fas fa-user"></i></td>
        <td style={{columnWidth: "70px"}}>{first_name}</td>
        <td style={{columnWidth: "70px"}}>{last_name}</td>
        <td style={{columnWidth: "100px"}}>{email}</td>
        <td style={{columnWidth: "80px"}}>{department}</td>
        <td style={{columnWidth: "80px"}}>{client_type}</td>
      </tr>
      
      <tr className="hide-table-padding">
        <td colSpan="8">
          <div id={`collapseTwo${id}`} className="collapse in p-3">
            <table>
              <thead>
              <tr>
                <th scope="col" style={{columnWidth: "200px"}}>Date</th>
                <th scope="col" style={{columnWidth: "200px"}}>Notes</th>
              </tr>
              </thead>
              <tbody style={{backgroundColor: "#ecede3"}}>
                {clientNotes}
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    </>
  );
 }
export default NoteItem;

