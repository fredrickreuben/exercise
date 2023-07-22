import React from 'react';

const DropdownItem = ({ path, label }) => {
  return <a href={path}>{label}</a>;
};

export default DropdownItem;
