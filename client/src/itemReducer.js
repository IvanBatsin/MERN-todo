import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from './actions/types';

const initialState = {
  items: [{id:1, name:'hello'}]
};

const reducer = (state=initialState, action) => {
  switch(action.type){
    case GET_ITEMS: return {...state};
    case ADD_ITEM: return {...state, items: [...state.items, {id: Date.now(), name:action.payload}]};
    case DELETE_ITEM: return {...state, items: state.items.filter(item => item.id !== action.payload)};
    default: return state;
  }
}

export default reducer;