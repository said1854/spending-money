import React from 'react'

function BasketItem({item, product}) {
  return (
      <div>
          <li className="">
				{product.title} <span>x {item.amount}</span>
			</li>
    </div>
  )
}

export default BasketItem