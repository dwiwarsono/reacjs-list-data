import React from 'react';

// Fungsi helper untuk membuat huruf awal string menjadi kapital
const titleize = (str) => str.charAt(0).toUpperCase() + str.substring(1, str.length);

const ControlItem = ({ layout, activeLayout, onDepressed }) => (
  <a
    href="javascript:void()"
    className={layout === activeLayout ? 'active' : ''}
    onClick={onDepressed.bind(this, layout)}
  >
    {titleize(layout)} View
  </a>
);

export default ControlItem;