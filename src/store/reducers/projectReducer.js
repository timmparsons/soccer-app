const initState = {
  projects: [
    {id: '1', title: 'go to the store', content: 'random text'},
    {id: '2', title: 'go for a run', content: 'random text'},
    {id: '3', title: 'take a drive', content: 'random text'}
  ]
}

const projectReducer = (state = initState, action ) => {
  return state
}

export default projectReducer;