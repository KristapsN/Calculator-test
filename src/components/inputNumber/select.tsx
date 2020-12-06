import React from 'react';

// type Props = {
//   value: string
//   selectHandler: () => void;
// };

export const Select = () => {

  return (
    <div>
      <select name="expr" id="expr" value='+'>
        <option value='+'>+</option>
        <option value="-">-</option>

      </select>
    </div> 
  );
};