import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.contacts}>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
