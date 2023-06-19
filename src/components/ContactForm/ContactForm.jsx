import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { ButtonForm, ErrorInfo } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';
import { selectContact } from 'redux/selectors';
import { TextField } from '@mui/material';

const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required!'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);

  const handleSubmit = (values, actions) => {
    if (contacts.find(contact => contact.name === values.name)) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    const contact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    console.log(contact);

    // if (contacts.find(({ name }) => name === contact.name)) {
    //   alert(`${contact.name} is already in contacts`);
    //   return;
    // }

    dispatch(addContact(contact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field
          as={TextField}
          name="name"
          label="Name"
          placeholder="Annie Copeland"
          required
          fullWidth
          size="small"
          margin="normal"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          helperText={<ErrorMessage name="name" component={ErrorInfo} />}
        />
        <Field
          as={TextField}
          type="tel"
          name="number"
          label="Number"
          placeholder="227-91-26"
          required
          fullWidth
          size="small"
          margin="normal"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          helperText={<ErrorMessage name="number" component={ErrorInfo} />}
        />
        <ButtonForm type="submit">Add contact</ButtonForm>
      </Form>
    </Formik>
  );
};
