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
    margin-top: 1rem;

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;

    color: ${props => props.theme['base-subtitle']};
`

export const ImageProducts = styled.img`
    position: absolute;
    width: 120px;
    height: 120px;
    left: calc(50% - 120px/2);
    top: -20px; 
`
export const PriceProducts = styled.div`
    display: flex;
    font-family: 'Roboto';
    font-style: normal;
    /* line-height: 130%; */
    padding-left: 1rem;
    color: #574F4D;

    h1{
        line-height: 3.5rem;
        font-weight: 400;
        font-size: 14px;
        padding-right: .2rem ;
    }
    span{
        font-family: 'Baloo 2';
        font-size: 30px;
    }
`
export const Categories = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* align-items: center;
    padding: 4px 8px;

    width: 81px;
    height: 21px;

    margin-top:7rem;

    background: #F1E9C9;
    border-radius: 100px; */
`

export const CategoriesName  = styled.p`
    font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 130%;
        /* identical to box height, or 13px */
        text-transform: uppercase;
        color: #C47F17;
`