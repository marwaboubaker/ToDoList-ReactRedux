import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div>
            <div className="input groupe">
                <input
                
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text" placeholder="Enter new Todo" className="form-control"/>
                <button
                
                onClick={()=>{
                       dispatch(  addTodo({
                        id: uuid(),
                        name: name
                    }));
                        setName('');
                    }}
                className="input-group-prepend">Add</button>
            </div>
        </div>
    )
}

export default TodoInput