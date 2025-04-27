import { useState, useCallback } from 'react';
import { Incident, SeverityLevel, SortOrder } from '../types/incidents';

export const useIncidents = (initialIncidents: Incident[]) => {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [severityFilter, setSeverityFilter] = useState<SeverityLevel | 'All'>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [expandedIncidentId, setExpandedIncidentId] = useState<number | null>(null);

  const addIncident = useCallback((incident: Omit<Incident, 'id' | 'reported_at'>) => {
    const newIncident: Incident = {
      ...incident,
      id: Math.max(0, ...incidents.map(i => i.id)) + 1,
      reported_at: new Date().toISOString(),
    };
    setIncidents(prev => [...prev, newIncident]);
  }, [incidents]);

  const toggleIncidentExpand = useCallback((id: number) => {
    setExpandedIncidentId(prev => prev === id ? null : id);
  }, []);

  const filteredIncidents = incidents.filter(incident => 
    severityFilter === 'All' || incident.severity === severityFilter
  );

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return {
    incidents: sortedIncidents,
    addIncident,
    severityFilter,
    setSeverityFilter,
    sortOrder,
    setSortOrder,
    expandedIncidentId,
    toggleIncidentExpand,
  };
};