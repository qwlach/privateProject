
function nameSpace(name) {
  return v => `${v}_${name}`;
}

const ns = nameSpace('111')

export const TEST_ACTION = ns('testAction');

export const testValue = (value) => {
  return dispatch => (
    dispatch({
      type: TEST_ACTION,
      data: value,
    })
  )
}