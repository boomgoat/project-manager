const initState = {};

export const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project");
      alert("Done. :D", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      alert("Something went wrong. :(" + action.err);
    default:
      return state;
  }
};
