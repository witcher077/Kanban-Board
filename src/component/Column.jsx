import React from 'react'

const Column = ({ onDrop, title, onDragStart, Tasks, bgCol,logo }) => {

    return (

        
        <div onDragOver={(e) => e.preventDefault()} onDrop={onDrop} className='w-[30%] bg-slate-400 mx-5 rounded-t-md pb-3'>
            <h2 className='font-bold text-xl text-orange-300 bg-green-600 py-2 mb-4 rounded-t-md'>{title}</h2>

            {
                Tasks.map((task, index) => {
                    
                      return  <div draggable onDragStart={(e) => onDragStart(e, task, title)} key={index} className={`cursor-pointer block rounded-lg mx-5 my-4 ${bgCol} p-3 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white`}><p class="my-2 text-base font-serif">{logo} {task}</p></div>
                    
                }
                )
            }
        </div>
    )
}

export default Column