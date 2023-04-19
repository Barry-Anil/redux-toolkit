import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
   const numOfcakes = useSelector((state) => state.cake.numOfCakes)

   const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of Cakes - {numOfcakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
    </div>
    

  )
}
