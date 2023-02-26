import React from 'react';
import PropTypes from 'prop-types';

import { StyledBtn } from 'components/Button/Button';
import { useEffect } from 'react';
// import { useEffect } from 'react';

function Contacts ({nameList,onClick}){
  useEffect (()=>{
    localStorage.setItem('contacts', JSON.stringify(nameList));
  },[nameList])

// class Contacts extends Component { 
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.nameList.length !== this.props.nameList.length) {
//       localStorage.setItem('contacts', JSON.stringify(this.props.nameList));
//     }
//   }
 
    return (
      <ul>
        {nameList.map(({ name, id, number }) => (
          <li key={id}>
            <p>
              {name}: {number}{' '}
              <StyledBtn onClick={() => onClick(id)} type="button">
                Delete
              </StyledBtn>
            </p>
          </li>
        ))}
      </ul>
    );
  }
export default Contacts;

Contacts.propTypes = {
  nameList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
};
