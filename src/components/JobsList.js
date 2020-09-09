import React from 'react';

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
  console.log(props);
  return (
    <tr>
      <td>
        <h4>
          <a href={url}>{title}</a>
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
