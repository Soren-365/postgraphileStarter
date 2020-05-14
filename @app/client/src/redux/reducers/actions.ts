import { ACTION } from "../types/types";

export const exampleInitialState = {
  error: "",
  light: false,
  placeholderData: null,
  route_history: [""],
};

type State = {
  error: string;
  light: boolean;
  placeholderData: any;
  route_history: string[];
};

const action = (
  state = exampleInitialState,
  action: {
    type: string;
    error: string;
    data: string;
    light: boolean;
    newRoute: string;
  }
): State => {
  switch (action.type) {
    case ACTION.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case ACTION.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };

    case ACTION.TICK_CLOCK:
      return {
        ...state,
        ...{ light: !!action.light },
      };

    // case ACTION.ROUTE_UPDATE:
    //   return {
    //     ...state,
    //     ...{ route_history: state.route_history.push(action.newRoute) },
    //   };

    default:
      return state;
  }
};

export default action;
