import React from 'react';
import { Link } from 'react-router-dom';
const JobsList = (props) => {
  const {
    company,
    company_logo,
    company_url,
    created_at,
    description,
    id,
    location,
    title,
    type,
    url,
  } = props.value;
  console.log(company);
  console.log(url);
  return (
    <tr>
      <td>
        <h4>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h4>
        <p>
          {company} - ( {type} )
        </p>
      </td>
      <td>
        <span>{location}</span>
        <span>{created_at}</span>
      </td>
    </tr>
  );
};

export default JobsList;
