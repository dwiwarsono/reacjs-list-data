import React, {Component} from 'react';

const List = ({ layout, data }) => (
  <ul className={layout}>
    {data.map((data, index) => {

      return (
        <li>
          <img style={{ width: 300, height: 300 }} src={layout === 'list' ? data.url :'' } />
          {
            layout === 'list' ? <h1>{data.title}</h1> : ''
          }
        </li>
      );
    })}
  </ul>
);

export default List;