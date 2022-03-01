import React from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    color: #fff;
`

const useSelectCurrency = (label) => {
 
    const SelectCurrency = () => (
        <>
            <Label>{label}</Label>
        </>
    )

    return [SelectCurrency]
}

export default useSelectCurrency