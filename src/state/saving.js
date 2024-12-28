export const SET_SAVING = "SET_SAVING";

export const savingReducer = (state = false, action) => {
  switch (action.type) {
    case SET_SAVING:
      return action.saving;
    default:
      return state;
  }
};
