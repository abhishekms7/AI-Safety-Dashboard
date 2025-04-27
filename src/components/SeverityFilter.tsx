import React from 'react';
import { SeverityLevel } from '../types/incidents';

interface SeverityFilterProps {
  value: SeverityLevel | 'All';
  onChange: (value: SeverityLevel | 'All') => void;
}

const SeverityFilter: React.FC<SeverityFilterProps> = ({ value, onChange }) => {
  return (
    <div className="severity-filter">
      <label htmlFor="severity-filter">Filter by Severity:</label>
      <select
        id="severity-filter"
        value={value}
        onChange={(e) => onChange(e.target.value as SeverityLevel | 'All')}
      >
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
};

export default SeverityFilter;