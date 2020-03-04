const initState = {
  projects: [
    {
      id: "1",
      title: "help me find peach",
      content: "some test, text data to fill up space."
    },
    {
      id: "2",
      title: "collect all the stars",
      content: "some test, text data to fill up space."
    },
    {
      id: "3",
      title: "eff hunt with yoshi",
      content: "some test, text data to fill up space."
    }
  ]
};

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
