exports.getDate = () => {
  const dateTime = new Date();
  const date = dateTime.toLocaleDateString();
  const time = dateTime.toLocaleTimeString();
  return `${date} ${time}`;
};
