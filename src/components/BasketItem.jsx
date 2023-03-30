import React from 'react'

function BasketItem({item, product}) {
  return (
    <div>
      <li className="mx-auto w-48 bg-red-600 my-2 text-white rounded">
        {item.amount} adet {product.title}
      </li>
    </div>
  );
}

export default BasketItem