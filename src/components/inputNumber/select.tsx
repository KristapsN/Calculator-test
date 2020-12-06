import React from 'react';

type Props = {
  value: string
  selectHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({ value, selectHandler }: Props) => {

  return (
    <div>
      <select 
        name="expr" 
        id="expr" 
        onChange={(e) => selectHandler(e)} 
        value={value}
      >
        <option value="Chose">Chose</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="/">/</option>
        <option value="*">*</option>

      </select>
    </div> 
  );
};