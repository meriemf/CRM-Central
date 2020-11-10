import React from 'react';
import moment from 'moment';

const ClientNoteItem = ({id, date, notes,client_id}) => {
  return (
    <tr>
      <td>{moment(date).format('DD/MM/YYYY')}</td>
      <td>{notes}</td>
    </tr>
  );
}

export default ClientNoteItem;