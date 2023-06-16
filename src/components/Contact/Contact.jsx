import { useDispatch } from 'react-redux';
import { Wrapper } from './Contact.styled';
import { Button } from './Contact.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();
  const deleteContactHandler = () => {
    dispatch(deleteContact(id));
  };
  return (
    <Wrapper>
      <p>
        {name} : {number}
      </p>
      <Button type="button" onClick={() => deleteContactHandler(id)}>
        Delete
      </Button>
    </Wrapper>
  );
};

Contact.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
