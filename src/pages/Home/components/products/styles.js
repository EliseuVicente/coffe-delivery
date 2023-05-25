import styled from 'styled-components'

export const ContainerProducts = styled.div`
    display: flex;
    position: relative;
    height: 102.813rem;
    top: 34.5rem;
`

export const Title = styled.h1`
    display: block;
    position: absolute;
    width: 25rem;
    height: 2.625rem;
    left: 10%;
    top: 2rem;

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;

    color: #403937;
`
export const CoffeeList = styled.div`
    position: relative;
    max-width: 80rem;
    top: 3rem;
    left: 10%;
`

export const CoffeeItems = styled.div`
    display: inline-grid;
    width: 16rem;
    height: 19.375rem;
    margin-top: 4rem;
    position: relative;
    margin-right: 1rem;
    background: ${props => props.theme['base-card']};
    
    border-radius: 6px 36px;
`

export const NameCoffes = styled.h2`
    text-align: center;
    height: 1.625rem;
    margin-top: 9.313rem;

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;

    color: ${props => props.theme['base-subtitle']};
`