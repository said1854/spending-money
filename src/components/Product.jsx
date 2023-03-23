import React from 'react'
import { moneyFormat } from '../helper'

function Product({ product, basket, setBasket, total, money }) {
    const basketItem = basket.find(item => item.id === product.id)

	const addBasket = () => {
		const checkBasket = basket.find(item => item.id === product.id)
		// ürün daha önce eklenmiş
		if (checkBasket) {
			checkBasket.amount += 1
			setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
		} else {
			setBasket([...basket, {
				id: product.id,
				amount: 1,
			}])
		}
	}

	const removeBasket = () => {
		const currentBasket = basket.find(item => item.id === product.id)
		const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
		currentBasket.amount -= 1
		if (currentBasket.amount === 0) {
			setBasket([...basketWithoutCurrent])
		} else {
			setBasket([...basketWithoutCurrent, currentBasket])
		}
	}

    return (
        <>
            <div className="bg-white border w-56 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-8">
                <img className="rounded-t-lg w-48 h-48" src={product.link} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${moneyFormat(product.price)}</p>
                    <button onClick={removeBasket} disabled={!basketItem}  className='bg-red-600 p-3 rounded-lg'>sat</button>
                    <span className='p-3 border rounded-lg'>{basketItem && basketItem.amount || 0} </span>
                    <button onClick={addBasket} disabled={total + product.price > money}  className='bg-green-600 p-3 rounded-lg'>satin al</button>
                </div>
            </div>
        </>
      )
}

export default Product