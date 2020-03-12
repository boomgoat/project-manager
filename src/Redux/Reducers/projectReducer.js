const initState = {};

export const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project");
      return state;
    case "CREATE_PROJECT_ERROR":
    default:
      return state;
  }
};
