import React from 'react'

function ListComp({items}){
  return (
     <div>
        {items.map((item,i)=> <li key={i}>{item.title},{item.description}</li>)}
      </div>
  )
}

export default ListComp
