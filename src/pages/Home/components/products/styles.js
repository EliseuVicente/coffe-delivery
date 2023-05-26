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
    

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;

    color: ${props => props.theme['base-subtitle']};
`

export const ImageProducts = styled.img`
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;
    left: calc(50% - 120px/2);
    top: -1.25rem; 
`
export const PriceProducts = styled.div`
    display: flex;
    font-family: 'Roboto';
    font-style: normal;
    
    padding-left: 1rem;
    color: ${props => props.theme['base-text']};

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
`
export const FirstCategory = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 5.063rem;
    height: 1.313rem;

    margin-top:7rem;

    background: ${props => props.theme['yellow-light']};
    border-radius: 100px;
`
export const SecondCategory = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 4.375rem;
    height: 1.313rem;
    margin-left: 0.375rem;
    margin-top: 7rem;

    background: ${props => props.theme['yellow-light']};
    border-radius: 100px;
`
export const CategoriesName  = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
        
    text-transform: uppercase;
    color: ${props => props.theme['yellow-dark']};
`

export const DescriptionItens = styled.div`
    display: flex;
    text-align: center;

    margin-left: 1.25rem;
    margin-right: 1.25rem;
   
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    color: color: ${props => props.theme['base-label']};;
`