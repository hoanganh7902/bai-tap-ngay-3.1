import React from 'react'
import "./App.css"
export default function InteractiveList({ items, setItems }) {
    console.log(items);

    const handleToggle = (id) => {
        const currentClick = items.map((currentId) =>
            currentId.id === id ? { ...currentId, completed: !currentId.completed } : currentId
        )
       setItems(currentClick)
        
    }


    return (
        <div>
            <ul>
                {items.map((item) => {
                    return (
                        <button className={item.completed ? 'completed' : 'not-completed'}
                            onClick={() => handleToggle(item.id)}>
                            {item.name}
                        </button>
                    )
                })}
            </ul>
        </div>
    )
}
