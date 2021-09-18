import { nanoid } from "nanoid";

export default function listTodoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: nanoid(),
          text: action.paylod,
          checked: false,
        },
      ];
    case "remove":
      const removeNewListTaske = state.filter((taske) => {
        return taske.id !== action.paylod;
      });
      return removeNewListTaske;
    case "cheked":
      const chekedNewListTaske = state.map((taske) => {
        if (taske.id === action.paylod) {
          return { ...taske, checked: !taske.checked };
        }
        return taske;
      });
      return chekedNewListTaske;
  }
}
