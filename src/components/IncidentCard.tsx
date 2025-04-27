import React from 'react';
import { Incident } from '../types/incidents';
import { formatDate } from '../utils/helpers';

interface IncidentCardProps {
  incident: Incident;
  isExpanded: boolean;
  onToggleExpand: (id: number) => void;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ 
  incident, 
  isExpanded, 
  onToggleExpand 
}) => {
  return (
    <div className={`incident-card ${incident.severity.toLowerCase()}`}>
      <div className="card-header">
        <div className="card-title">{incident.title}</div>
        <div className="card-meta">
          <span className={`severity-badge ${incident.severity.toLowerCase()}`}>
            {incident.severity}
          </span>
          <span className="reported-date">
            {formatDate(incident.reported_at)}
          </span>
        </div>
        <button 
          className="expand-btn"
          onClick={() => onToggleExpand(incident.id)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Hide Details' : 'View Details'}
        </button>
      </div>
      {isExpanded && (
        <div className="card-description">
          <p>{incident.description}</p>
        </div>
      )}
    </div>
  );
};

export default IncidentCard;