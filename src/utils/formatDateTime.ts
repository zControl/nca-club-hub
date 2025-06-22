export function formatDateTime(date: Date | string | null): string {
  if (!date) return '';

  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

export function formatDateFromTo(from: Date, to: Date): string {
  // Same day formatting
  if (from.toDateString() === to.toDateString()) {
    return `${from.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })} - ${to.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })}`;
  }
  // Different days formatting
  else {
    return `${from.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })}, ${from.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })} - ${to.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })}, ${to.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })}`;
  }
}