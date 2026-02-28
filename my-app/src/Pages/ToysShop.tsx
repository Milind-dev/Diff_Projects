import { useState } from "react";
import ProductCart from "../components/ProductCart";
import { toys } from "../data/toys";

export default function ToysShop() {
  // Cart structure:
  // { productId: quantity }
  // Example: { 1: 2, 2: 1 }

  const [toyCart, setToyCarts] = useState<Record<number, number>>({});

  // ➕ Add product to cart
  const handleAdd = (id: number): void => {
    setToyCarts((prev) => ({
      ...prev, // copy previous cart
      [id]: (prev[id] || 0) + 1, // increase quantity or start with 1
    }));
  };

  // ➖ Remove product from cart
  const handleRemove = (id: number): void => {
    setToyCarts((prev) => {
      const updated = { ...prev }; // copy previous cart

      if (updated[id] > 1) {
        updated[id] -= 1; // decrease quantity
      } else {
        delete updated[id]; // remove key if quantity = 1
      }

      return updated;
    });
  };

  return (
    <div>
      <h2>Toys Shop</h2>

      {/* Mapping toys */}
      <div>
        {toys.map((toy) => (
          <ProductCart
            key={toy.id} // ✅ IMPORTANT (React needs this)
            product={toy}
            quantity={toyCart[toy.id] ?? 0} // show 0 if not in cart
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
}

/* import React, { useState } from "react";
import ProductCart from "../components/ProductCart";
import { toys } from "../data/toys";

export default function ToysShop() {
  //   const [toyCarts, setToyCarts] = useState([]);
  const [toyCart, setToyCarts] = useState<Record<number, number>>({});

//     {
//     {id:}, 
//     {id:}
//   }
//   prev means {id:4} => [4] (prev[4] || 0) + 1

  const handleAdd = (id: number): void => {
    setToyCarts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };
  const handleRemove = (id: number): void => {
    setToyCarts((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };
  return (
    <div>
      <div>ToysShop</div>
      <div>
        {toys.map((toy) => (
          <ProductCart
            key={toy.id}
            onAdd={handleAdd}
            onRemove={handleRemove}
            quantity={toyCart[toy.id] || 0}
            product={toy}
          />
        ))}
      </div>
    </div>
  );
}
 */
// toy = {
//     id: 1,
//     toyname: "Teddy Bear",
//     price: 499,
//     category: "Soft",
//   },
//   {
//     id: 2,
//     toyname: "Remote Car",
//     price: 999,
//     category: "Remote",
//   },

/* const [cart, setCart] = useState<Record<number, number>>({}); //Record<ProductId, quantity>
const [cart, setCart] = useState<
  { id: number; quantity: number }[]
>([]);

  const handleAdd = (id: number): void => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleRemove = (id: number): void => {
    setCart((prev) => {
      const updated = { ...prev };

      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
 */
