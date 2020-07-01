export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFireStore }) => {
    dispatch( { type: 'CREATE_PROJECT', project });
  }
}