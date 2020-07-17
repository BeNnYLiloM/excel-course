import * as actionTypes from '@/redux/types';

export function rootReducer(state, action) {
  let field;
  let val;

  switch (action.type) {
    case actionTypes.TABLE_RESIZE:
      field = action.data.type === 'col' ? 'colState' : 'rowState';

      return {
        ...state,
        [field]: value(state, field, action)
      };

    case actionTypes.CHANGE_TEXT:
      field = 'dataState';
      return {
        ...state,
        currentText: action.data.value,
        dataState: value(state, field, action)
      };

    case actionTypes.CHANGE_STYLES:
      return {
        ...state,
        currentStyles: action.data
      };

    case actionTypes.APPLY_STYLE:
      field = 'stylesState';
      val = state[field] || {};
      action.data.ids.forEach(id => {
        val[id] = {...val[id], ...action.data.value};
      });

      return {
        ...state,
        [field]: val,
        currentStyles: {
          ...state.currentStyles,
          ...action.data.value,
        },
      };

    case actionTypes.CHANGE_TITLE:
      return {
        ...state,
        title: action.data
      };

    case actionTypes.UPDATE_DATE:
      return {
        ...state,
        openedDate: new Date().toJSON()
      };

    default: return state;
  }
}

function value(state, field, action) {
  const val = state[field] || {};
  val[action.data.id] = action.data.value;
  return val;
}
