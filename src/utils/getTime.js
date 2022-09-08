export const getTime = (dateIso) =>
  `${dateIso.getDay()}-${dateIso.getMonth()}-${dateIso.getFullYear()} Time: ${dateIso
    .toTimeString()
    .slice(0, 5)}`;
