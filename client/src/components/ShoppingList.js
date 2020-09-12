import React, {useState, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {getItems, addNew, deleteOne} from '../actions/itemActions';
import {connect} from 'react-redux';

const ShoppingList = props => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const name = prompt('Enter name');
    if (name) addNew(name);
  }

  useEffect(() => {
    setItems(props.item);
  }, []);

  return (
    <div className="container">
      <button onClick={addItem} className="btn btn-primary mt-4 mb-2">Add item</button>

      <TransitionGroup component="ul" className="list-group">
      {items.map(item => {
          return (
            <CSSTransition 
              classNames="fade"
              key={item.id}
              timeout={500}>
                <div key={item.id} className='mb-1' style={{display:'flex', flexDirection:'row', width:'100%'}}>
                  <button onClick={() => deleteOne(item.id)} className="btn btn-outline-danger btn-sm">X</button>
                  <li style={{flexGrow:1, marginLeft:5}} className="list-group-item">{item.name}</li>
                </div>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    item: state.item.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNew: name => dispatch(addNew(name)),
    deleteOne: id => dispatch(deleteOne(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);