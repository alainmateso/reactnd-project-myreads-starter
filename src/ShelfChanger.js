import React from 'react';
import { bookShelves } from './bookShelves';
import PropTypes from 'prop-types';

const ShelfChanger = ({ selectedOption, onChange }) => {
  return (
    <div className="book-shelf-changer">
      <select value={selectedOption} onChange={onChange}>
        <option value="move" disabled>Move to...</option>
        {bookShelves.map(({ name, value }) => (
          <option key={value} value={value}>{name}</option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  )
}

ShelfChanger.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ShelfChanger;
