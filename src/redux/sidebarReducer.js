

let initialState = {
  friends: [
    {id : 1, name: 'Erentsen', avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
    {id : 2, name: 'Saglara', avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
    {id : 3, name: 'Chingis', avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
    {id : 4, name: 'Mama', avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
    {id : 5, name: 'Papa', avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'}
  ]
};


const sidebarReducer = (state = initialState, action) => {
  return state;
}


export default sidebarReducer;