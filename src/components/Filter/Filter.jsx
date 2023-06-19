import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/slice';
import { TextField } from '@mui/material';
export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeFilterHandler = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };
  return (
    <TextField
      label="Find contacts by name"
      type="text"
      value={filter}
      onChange={changeFilterHandler}
      fullWidth
      size="small"
      margin="normal"
    ></TextField>
  );
};
