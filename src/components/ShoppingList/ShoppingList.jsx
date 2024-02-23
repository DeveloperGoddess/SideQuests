import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";

function ShoppingList() {
    const [items, setItems] = useState(
        [
            {id: uuid(), product: "Bananas", quantity: 8},
            {id: uuid(), product: "Eggs", quantity: 12},
        ]
    );
    const addItem = (item) => {
        setItems((currItems) => {
            return [...currItems, { ...item, id: uuid() }];
        });
    };

    return (
        <div>
            <h1>Shopping List</h1>
            <ShoppingListForm addItem={addItem} />
            <ul>
                {items.map(i =>
                    <li key={i.id}>
                        {i.product} - {i.quantity}
                    </li>
                )}
            </ul>
        </div>
    )
};

export default ShoppingList;