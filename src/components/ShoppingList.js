import { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Sets new category in state according to user selection
  const handleSelectedCategory = (e) => setSelectedCategory(e.target.value)

  const itemsToDisplay = items.filter(item => {
    return selectedCategory === 'All' ? true : item.category === selectedCategory
  })

  const itemsList = itemsToDisplay.map(item => {
    return <Item key={item.id} name={item.name} category={item.category} />
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsList}
      </ul>
    </div>
  );
}

export default ShoppingList;
