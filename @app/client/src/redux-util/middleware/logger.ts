const logger = (store: { getState: () => any }) => (
  next: (arg0: any) => any
) => (action: { type: any }) => {
  try {
    if (typeof window !== "undefined") {
      console.groupCollapsed(action.type);
      console.info("dispatching", action);
      let result = next(action);
      console.log("next state", store.getState());
      console.groupEnd();
      return result;
    } else return "Logging SAGA action dispatch On server";
  } catch {
    return "Catch E: Logging SAGA action dispatch On server";
  }
};
export default logger;
