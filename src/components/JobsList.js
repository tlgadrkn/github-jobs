import React from 'react';
import { Link } from 'react-router-dom';
const JobsList = (props) => {
  const { company, created_at, location, title, type, url } = props.value;

  return (
    <tr>
      <td>
        <h4>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {title}
          </a>
        </h4>
        <p>
          {company} - ( {type} )
        </p>
      </td>
      <td>
        <span>{location} - </span>
        <span> {new Date(created_at).toLocaleDateString()}</span>
      </td>
    </tr>
  );
};

export default JobsList;
