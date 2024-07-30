import React from 'react';



const Items = ({items}) => {
  
    {

        if (items.length === 0) {
            return <span>No items in list</span>;
             }

          if (items.length === 1) {
            return <span class="App">{items[0]}</span>;
          }

  if (items.length > 1) {
    return (
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    );
  }
}
    }
  

export default Items;