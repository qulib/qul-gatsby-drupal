// helper functions

export function formatDate(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date))
}
