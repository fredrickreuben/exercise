/* 
Thanks for your interest in a Frontend engineering role at Chameleon. We're a solid and collaborative team that
  will always lend a helping hand. We prioritize asynchronously in nearly all of our ways of working.
This exercise is meant to be a focused, high signal ~hour. Assume that if we've asked about it it's important to us. We will 
  evaluate your React skills, your general understanding of JavaScript, your creativity, organization, etc.
Prompt:
  
  0. How are you today? 😊
  1. Below are the parts of a basic selection menu, but there are issues and it's too specific for the single
     current use case. We all more or less agree it's not that great and needs some attention. It should be
     componentized/generalized so that other engineers on the team can use selection menus. We will evaluate your React
     skills, your general understanding of JavaScript, your creativity, organization and clarity on communication
  2. The following items (3,4,5) combined are intentionally slightly vague in the sense there’s often more than a single
     possible/correct solution — a natural aspect of software engineering. Please consider possible implementation paths
     you'd consider valid and pick the best one.
  3. Now, make improvements to the menu; in the end, it should meet the prompt and be able to be used in at least a
     a couple of different use cases such as an Account picker, a searchable list of items, one step of a flow
     to configure Alerting, etc...
  4. For certain use cases we would want to sync the menu selection to the server. We have an abstraction for syncing called
     httpPatch. It can be used like this => httpPatch('user', { [`menu-state-${key}`]: {true,false} }). Where would this
     be included and how/where best to handle this (properties needing to be synced/loaded to the backend)?
  5. Assuming others will use/add to this component in the future, write a 2-3 sentence "release note"
     to post into the #engineering channel in Slack (or add to the Components wiki page).
PS: No need to worry about CSS, actually making it "run" etc...
Now put yourself in PR review mode...
  1. Please provide a couple of Pull Request comments/suggestions to the engineer who wrote the code
     in pr-1.js; assume you're code owner for the project on GitHub.
  2. Based on what you know from 1., how would you do this differently if you were
     to make this component from scratch?
 */

import React, { useState } from 'react';
import { httpGet, httpPatch } from 'lib/http';

export const Dropdown = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  httpGet(`users/${userId}`).then(d => { setIsOpen(user[`dropdown_${name}`]) });
  
  const onToggle = (e) => {
    setIsOpen(isOpen);
  }

  return (<>
    <div className="dropdown">
      <button type="button" className="dropdown-button" id="dropdownButton" aria-haspopup="true" aria-expended={isOpen} onClick={onTggle}>{label}</button>

      <ul className={`${isOpen ? 'dropdown-open' : ''} dropdown-menu dropdown-section`} aria-labelledby='dropdownButton' role="menu">
        <div>Items</div>
        <a href="/page1">Page 1</a>
        <DropdownItem href="/page2">Page 2</DropdownItem>
        <DropdownItem href="/page3">Page 3</DropdownItem>
        <DropdownItem href="/page4">Page 4</DropdownItem>
      </ul>

      <ul className={`${isOpen ? 'dropdown-open' : ''} dropdown-menu dropdown-section`}>
        <div>More items</div>
        <DropdownItem href="/page5">Page 5</DropdownItem>
        <DropdownItem href="/page9">Page 9</DropdownItem>
      </ul>
    </div>
  </>);
}

const DropdownItem = ({ }) => {
  return '??';
}
