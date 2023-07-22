import React, { useState } from 'react';
import { httpPatch } from 'lib/http';
import DropdownItem from './DropdownItem';

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(items);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle syncing menu selection to the server
  const syncMenuSelection = (key, value) => {
    httpPatch('user', { [`menu-state-${key}`]: value });
  };

  // Function to toggle child dropdown menu
  const onToggleChildDropdown = (pos) => {
    setMenuItems(state => state.map((e,i) => ({
		...e,
		isOpen: pos == i ? true : false
	})))
  };

  return (
    <>
      <div className="dropdown">
        <button
          type="button"
          className="dropdown-button"
          id="dropdownButton"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={onToggle}
        >
          {label}
        </button>
        {items.map((m, i) => (
		  <ul
          className={`${m.isOpen ? 'dropdown-open' : ''} dropdown-menu dropdown-section`}
          aria-labelledby="dropdownButton"
          role="menu"
        >
          <div onClick={(e) => onToggleChildDropdown(i)}>{m.label}</div>
          {m.items.map((item) => (
			 <DropdownItem key={item.key} href={item.path} label={item.label}>
          ))}
        </ul>
		)}
      </div>
    </>
  );
};

export default Dropdown;
