import { eventsMockData } from '@/resources/eventsData';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';

// Define types
export interface CalendarEvent {
  id: string;
  date: string;
  title: string;
  description?: string;
  category?: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  allDay?: boolean;
  url?: string;
}

// TODO: API functions - THIS NEEDS TO BE IMPLEMENTED
const api = {
  getEvents: async (date: string): Promise<CalendarEvent[]> => {
    // Replace with your actual API call
    const response = await fetch(`/api/events?date=${date}`);
    if (!response.ok) throw new Error('Failed to fetch events');
    return response.json();
  },

  addEvent: async (event: Omit<CalendarEvent, 'id'>): Promise<CalendarEvent> => {
    // TODO: IMPLEMENT THE API CALLS
    const response = await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    });
    if (!response.ok) throw new Error('Failed to add event');
    return response.json();
  }
};

//TODO: FORMAT DATE FOR API
const formatDateForApi = (date: Date): string => {
  return format(date, 'yyyy-MM-dd');
};

export function useCalendarEvents(initialDate?: Date) {
  const queryClient = useQueryClient();
  const currentDate = formatDateForApi(initialDate || new Date());

  const eventsQuery = useQuery({
    queryKey: ['events', currentDate],
    queryFn: () => api.getEvents(currentDate),
    // Optional: initialize with data if you have it
    initialData: [] as CalendarEvent[]
  });

  const addEventMutation = useMutation({
    mutationFn: api.addEvent,
    onSuccess: (newEvent) => {
      queryClient.setQueryData<CalendarEvent[]>(['events', newEvent.date],
        (oldEvents) => [...(oldEvents || []), newEvent]
      );
    }
  });

  const fetchEventsByDate = (date: Date) => {
    queryClient.invalidateQueries({ queryKey: ['events', formatDateForApi(date)] });
  };

  return {
    //TODO: IMPLEMENT THE REAL EVENTS DATA FROM API CALL
    //events: eventsQuery.data || [],
    events: eventsMockData,
    isLoading: eventsQuery.isLoading,
    isError: eventsQuery.isError,
    error: eventsQuery.error,
    fetchEventsByDate,
    addEvent: addEventMutation.mutate,
    isPendingAdd: addEventMutation.isPending
  };
}