import React from 'react';
import { SortOrder } from '../types/incidents';

interface SortControlsProps {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
}

const SortControls: React.FC<SortControlsProps> = ({ value, onChange }) => {
  return (
    <div className="sort-controls">
      <label htmlFor="sort-order">Sort by Date:</label>
      <select
        id="sort-order"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOrder)}
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
};

export default SortControls;
