import React, { useState } from 'react';
import { httpPatch } from 'lib/http';
import DropdownItem from './DropdownItem';

const Dropdown = ({ label, key, items, userId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(items);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  // handle syncing menu selection to the server
  useEffect(()=>{
       httpPatch('user', { [`menu-state-${key}`]: isOpen })
  }, [isOpen])

  // Function to toggle child dropdown menu
  const onToggleChildDropdown = (pos) => {
    setMenuItems(state => state.map((e,i) => ({
	    ...e,
	   isOpen: pos == i ? true : false
	})))
  };

  //fetch synced user menu
  useEffect(()=>{
       httpGet(`users/${userId}`).then(d => { setIsOpen(user[`dropdown_${name}`]) });
  }, [])

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
