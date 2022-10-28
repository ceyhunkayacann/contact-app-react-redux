import React from 'react'

function Item({item}) {
  return (
    <div>
        {item.name} - {item.phone_number}
    </div>
  )
}

export default Item