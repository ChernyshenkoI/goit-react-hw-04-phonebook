import React from 'react';
import styled from 'styled-components';
import Contacts from 'components/Contacts/Contacts';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import Title from 'components/Title/Title';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
JSON.parse(localStorage.getItem ('contacts')) || [],);

  const [filter, setFilter] = useState('');
  const onSubmitAddToContacts = (name, number, form) => {
    const sameName = contacts.find(contact => contact.name === name);
    if (sameName) {
      alert('This contact is already in your list');
      return form.reset();
    }
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    setContacts(prevState => {
      return [...prevState, contact];
    });
  };
  const onInputChange = e => {
    const { value } = e.target;
    setFilter(value);
  };
  const onClickDelete = idToDel => {
    setContacts(contacts.filter(contact => contact.id !== idToDel));
  };
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Title title="Phonebook" />
      <ContactsForm onSubmit={onSubmitAddToContacts} />
      <Title title="Contacts" />
      <ContactsFilter onChange={onInputChange} filter={filter} />
      <Contacts
        onClick={onClickDelete}
        nameList={contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )}
      />
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: 10 20px;
`;
