// setWaktu
export const getChatTime = date => {
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
};

// setHari
export const setDateChat = oldDate => {
  const year = oldDate.getFullYear();
  const mouth = oldDate.getMonth() + 1; // default mouth januari dimulai dari 0
  const date = oldDate.getDate();

  return `${year}-${mouth}-${date}`;
};
