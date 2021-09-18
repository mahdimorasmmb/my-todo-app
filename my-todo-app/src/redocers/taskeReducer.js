export default function taskeReducer(state, action) {
  switch (action.type) {
    case "add":
      return action.payload;
  }
}
