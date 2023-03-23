import React from 'react'
import { moneyFormat } from '../helper'

function Header({total, money}) {
    return (
      <>
        {total > 0 && money - total !== 0 && (
				<div className='bg-green-500 text-3xl text-center p-4 text-white '>Harcayacak <span>$ {moneyFormat(money - total)}</span> paranız kaldı!</div>
        )}
        {total === 0 && (
            <div className='bg-green-500 text-3xl text-center p-4 text-white '>{moneyFormat(money)}$ paraniz var</div>
        )}
        {money - total === 0 && (
            <div className='bg-red-600 text-3xl text-center p-4 text-white '>Paraniz bitti</div>
        )}
      </>


      
  )
}

export default Header