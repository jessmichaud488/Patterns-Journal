// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SET_ENTRY_FILTER
export const setEntryFilter = (entryFilter = "all") => ({
  type: "SET_ENTRY_FILTER",
  entryFilter
});

// SORT_BY_TYPE
export const sortByHoursSlept = () => ({
  type: 'SORT_BY_HOURS_SLEPT'
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

// SET_START_DATE
export const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

// SET_END_DATE
export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});