export default entries => {
  return entries
    .map(entries => entries.hoursSlept)
    .reduce((sum, value) => sum + value, 0);
};