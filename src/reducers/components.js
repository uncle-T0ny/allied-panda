const initialState = {
  //header
  menuOpened: false,
};

export default function components(state = initialState, action) {
  switch (action.type) {
    case 'COMPONENTS_CHANGE_FIELD':
      const obj = {};
      obj[action.field] = action.value;
      return {
        ...state,
        ...obj,
      };
    default:
      return state;
  }
}
