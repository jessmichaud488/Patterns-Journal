import moment from "moment";

// Get visible entries based on sorting
const getVisibleEntries = (
  entries,
  { text, sortBy, entryFilter, startDate, endDate }
) => {
  return entries
    .filter(entry => {
      const createdAtMoment = moment(entry.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch = entry.title.toLowerCase().includes(text.toLowerCase());

      if (entryFilter === "all") {
        return textMatch && startDateMatch && endDateMatch;
      } else if (entryFilter === "content") {
        return (
          textMatch &&
          startDateMatch &&
          endDateMatch &&
          entry.entryType === "content"
        );
      } else if (entryFilter === "undecided") {
        return (
          textMatch &&
          startDateMatch &&
          endDateMatch &&
          entry.entryType === "undecided"
        );
      } else if (entryFilter === "depressed") {
        return (
          textMatch &&
          startDateMatch &&
          endDateMatch &&
          entry.entryType === "depressed"
        );
      }
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "hoursSlept") {
        return a.hoursSlept < b.hoursSlept ? 1 : -1;
      }
    });
};

export default getVisibleEntries;