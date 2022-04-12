import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
    id: uuid(),
  });
  function handleData(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form
      className="NewItem"
      onSubmit={(e) => {
        e.preventDefault();
        onItemFormSubmit({ ...formData, id: uuid() });
      }}
    >
      <label>
        Name:
        <input type="text" name="name" onChange={handleData} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleData}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
