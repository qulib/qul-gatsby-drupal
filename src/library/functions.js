// used to format dates for display (e.g. news)
export function formatDate(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date))
}

// used to parse query parametes in URL to pre-select filters (e.g. staff dir unit)
// only work on Selects using numeric keys currently
export function parseParam(param) {
  if (param && !isNaN(param)) {
    return parseInt(param)
  }
  return undefined
}
