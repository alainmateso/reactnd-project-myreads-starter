import React from 'react';
import { bookShelves } from './bookShelves';

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

export default ShelfChanger;
