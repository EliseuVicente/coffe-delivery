import styled from 'styled-components'

export const ContainerProducts = styled.div`
    display: flex;
    position: relative;
    height: 102.813rem;
    top: 34.5rem;

    @media (max-width: 574px) {
        width: 100vw;
      }
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

    color: ${props => props.theme['base-subtitle']};

    @media (max-width: 574px) {
        display: flex;
        width: 80vw;
      }
`
export const CoffeeList = styled.div`
    position: relative;
    max-width: 80rem;
    top: 3rem;
    left: 10%;

    @media (max-width: 574px) {
        width: 80vw;
      }
`

export const CoffeeItems = styled.div`
    display: inline-grid;
    width: 16rem;
    height: 19.375rem;
    margin-top: 4rem;
    position: relative;
    margin-right: 2rem;
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
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
        
    text-transform: uppercase;
    color: ${props => props.theme['yellow-dark']};
`
export const DescriptionItens = styled.div`
    text-align: center;

    margin-left: 1.25rem;
    margin-right: 2rem;
   
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    color: ${props => props.theme['base-label']};
`
export const SectionBuy = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 2rem;
    margin-left: 1.5rem;
    gap: 1.813rem;
    height: 2.375rem;   
`
export const Action = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    margin-left:-1rem;
    width: 7.375rem;
    height: 2.375rem;
`
export const PriceProducts = styled.div`
    display: flex;
    margin-top: 0.5rem;
    color: ${props => props.theme['base-text']};

    h1{
        line-height: 3.5rem;
        font-weight: 400;
        font-size: 14px;
    }
    span{
        font-family: 'Baloo 2';
        font-size: 30px;
    }
`
export const Counter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    width: 4.5rem;
    height: 2.375rem;

    background: ${props => props.theme['base-button']};;
    border-radius: 6px;
`
export const CarMarketing = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 2.375rem;
    height: 2.375rem;

    background: ${props => props.theme['purple-dark']};
    border-radius: 6px;

    :hover{
        background: ${props => props.theme['brand-purple']};
        transition: .4s;
    }
`