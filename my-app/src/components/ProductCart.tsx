import type { toytype } from "../types/toytype";

// Props type
export interface Props {
  product: toytype;
  quantity: number;
  onAdd: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function ProductCart({
  product,
  quantity,
  onAdd,
  onRemove,
}: Props) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      {/* Product Details */}
      <h3>{product.toyname}</h3>
      <p>Price: ₹ {product.price}</p>
      <p>Category: {product.category}</p>

      {/* Current Quantity */}
      <h4>Quantity: {quantity}</h4>

      {/* Buttons */}
      <button onClick={() => onAdd(product.id)}>+ Add</button>
      <button onClick={() => onRemove(product.id)}>- Remove</button>
    </div>
  );
}

/* import type { toytype } from "../types/toytype";

export interface Props {
  product: toytype;
  quantity: number;
  onAdd: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function ProductCart({
  product,
  quantity,
  onAdd,
  onRemove,
}: Props) {
  return (
    <div>
      <div>
        <h1>ProductCart {quantity}</h1>
        <h3>{product.toyname}</h3>
        <p>Price: ₹ {product.price}</p>
        <p>Category: {product.category}</p>
        <h4>Quantity: {quantity}</h4>
      </div>
      <div>
        <button onClick={() => onAdd(product.id)}>+ Add Cart</button>
        <button onClick={() => onRemove(product.id)}>- Remove From Cart</button>
      </div>
    </div>
  );
}
 */
