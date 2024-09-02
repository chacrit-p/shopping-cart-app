"use client";

import React, { useState, useMemo } from "react";
import Card from "@/components/Card";
import PriceFormatter from "@/components/PriceFormatter";

type Product = {
  id: number;
  name: string;
  image_src: string;
  price: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "Iphone15",
    image_src: "/assets/images/iphone_15.webp",
    price: 18700,
  },
  {
    id: 2,
    name: "Iphone15 Max",
    image_src: "/assets/images/iphone_15_max.webp",
    price: 26700,
  },
  {
    id: 3,
    name: "Macbook Air 13",
    image_src: "/assets/images/macbook_air_13.webp",
    price: 39900,
  },
  {
    id: 4,
    name: "Ipad Air 11",
    image_src: "/assets/images/ipad_air_11.webp",
    price: 23900,
  },
];

export default function Page() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const handleAddToCart = (productId: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId] > 1) {
        updatedCart[productId] -= 1;
      } else {
        delete updatedCart[productId];
      }
      return updatedCart;
    });
  };

  // Calculate total amount
  const totalAmount = useMemo(() => {
    return products.reduce((total, product) => {
      const quantity = cart[product.id] || 0;
      return total + quantity * product.price;
    }, 0);
  }, [cart]);

  return (
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
        {products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            image_src={product.image_src}
            price={product.price}
            quantity={cart[product.id] || 0}
            onAdd={() => handleAddToCart(product.id)}
            onRemove={() => handleRemoveFromCart(product.id)}
          />
        ))}
      </div>

      {/* Display total amount */}
      <div className="p-4 mt-6 border-t">
        <h2 className="text-2xl font-semibold">
          Total Amount: <PriceFormatter price={totalAmount} /> THB
        </h2>
      </div>
    </div>
  );
}
