import uuid from "uuid";

// Add Entry
export const addEntry = ({
  title = "",
  input = "",
  hoursSlept = "",
  intensityLevel = "",
  entryType = "",
  createdAt = 0
} = {}) => ({
  type: "ADD_ENTRY",
  entry: {
    id: uuid(),
    title,
    input,
    hoursSlept,
    intensityLevel,
    entryType,
    createdAt
  }
});

// Remove Entry
export const removeEntry = ({ id }) => ({
  type: "REMOVE_ENTRY",
  id
});

// Edit Entry
export const editEntry = (id, updates) => ({
  type: "EDIT_ENTRY",
  id,
  updates
});