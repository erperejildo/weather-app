export function formatEpochDate(epoch: number): string {
  const date = new Date(epoch * 1000);

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
}

export function formatEpochTime(epoch: number): string {
  const date = new Date(epoch * 1000);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');

  return `${hours.toString().padStart(2, '0')}:${minutes}`;
}
