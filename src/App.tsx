import React, { useState } from 'react';

type SeverityFilterProps = {
  value: SeverityLevel | "All";
  onChange: (value: SeverityLevel | "All") => void;
};

const SeverityFilter: React.FC<SeverityFilterProps> = ({ value, onChange }) => {
  return (
    <div className="severity-filter">
      <label htmlFor="severity">Filter by Severity:</label>
      <select
        id="severity"
        value={value}
        onChange={(e) => onChange(e.target.value as SeverityLevel | "All")}
      >
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
};
import { Incident, SeverityLevel } from './types/incidents';
import IncidentForm from './components/IncidentForm';
import SortControls from './components/SortControls';
import IncidentCard from './components/IncidentCard';
import { useIncidents } from './hooks/useIncidents';

const initialIncidents: Incident[] = [
  { 
    id: 1, 
    title: "Biased Recommendation Algorithm", 
    description: "Algorithm consistently favored certain demographics...", 
    severity: "Medium", 
    reported_at: "2025-03-15T10:00:00Z" 
  },
  { 
    id: 2, 
    title: "LLM Hallucination in Critical Info", 
    description: "LLM provided incorrect safety procedure information...", 
    severity: "High", 
    reported_at: "2025-04-01T14:30:00Z" 
  },
  { 
    id: 3, 
    title: "Minor Data Leak via Chatbot", 
    description: "Chatbot inadvertently exposed non-sensitive user metadata...", 
    severity: "Low", 
    reported_at: "2025-03-20T09:15:00Z" 
  }
];

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const {
    incidents,
    addIncident,
    severityFilter,
    setSeverityFilter,
    sortOrder,
    setSortOrder,
    expandedIncidentId,
    toggleIncidentExpand,
  } = useIncidents(initialIncidents);

  return (
    <div className="container">
      <header>
        <h1>AI Safety Incident Dashboard</h1>
        <div className="controls">
          <button 
            className={`toggle-form-btn ${showForm ? 'active' : ''}`}
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Cancel' : 'Report New Incident'}
          </button>
          <div className="filter-sort-container">
            <SeverityFilter 
              value={severityFilter}
              onChange={setSeverityFilter}
            />
            <SortControls 
              value={sortOrder}
              onChange={setSortOrder}
            />
          </div>
        </div>
      </header>

      {showForm && (
        <IncidentForm 
          onSubmit={addIncident}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className="incidents-list">
        {incidents.length > 0 ? (
          incidents.map(incident => (
            <IncidentCard
              key={incident.id}
              incident={incident}
              isExpanded={expandedIncidentId === incident.id}
              onToggleExpand={toggleIncidentExpand}
            />
          ))
        ) : (
          <p className="no-results">No incidents match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default App;
