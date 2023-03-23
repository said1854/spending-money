import React from 'react'
import BasketItem from './BasketItem'
import { moneyFormat } from '../helper'

function Basket({basket, resetBasket, total, products}) {
  return (
    <div className="bg-white">
				<h3>Alışveriş Detayları</h3>
				<ul>
					{basket.map(item => (
						<BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
					))}
				</ul>
				<div className="">
					Toplam: ${moneyFormat(total)}
				</div>
				<button className="" onClick={resetBasket}>Sepeti Sıfırla</button>
			</div>
  )
}

export default Basket