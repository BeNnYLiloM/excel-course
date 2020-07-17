import * as actionTypes from '@/redux/types';

export function tableResize(data) {
  return {
    type: actionTypes.TABLE_RESIZE,
    data
  };
}

export function changeText(data) {
  return {
    type: actionTypes.CHANGE_TEXT,
    data
  };
}

export function changeStyles(data) {
  return {
    type: actionTypes.CHANGE_STYLES,
    data
  };
}

export function applyStyle(data) {
  return {
    type: actionTypes.APPLY_STYLE,
    data
  };
}

export function changeTitle(data) {
  return {
    type: actionTypes.CHANGE_TITLE,
    data
  };
}

export function updateDate() {
  return {
    type: actionTypes.UPDATE_DATE
  };
}
