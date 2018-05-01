const initialState = {
  isFetchAuth: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_FIELD':
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
