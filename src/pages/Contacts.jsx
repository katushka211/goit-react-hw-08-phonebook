import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContact, selectLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Container } from 'components/ContactForm/ContactForm.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts.length > 0 && <Filter />}
        {/* <Filter /> */}
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactList />
      </div>
    </Container>
  );
};

export default Contacts;
