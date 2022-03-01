import React from 'react'

const useSelectCurrencies = () => {
 
    const selectCurrencies = () => {
        console.log('Desdde select currencies')
    }

    return [selectCurrencies]
}

export default useSelectCurrencies