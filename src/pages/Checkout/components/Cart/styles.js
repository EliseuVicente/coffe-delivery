import styled from 'styled-components'

export const ItemsCart = styled.div`
    display: flex;
    margin-bottom: 3rem;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    margin-top: 2.5rem;
    background: ${props => props.theme['base-card']};
`
export const ImageProducts = styled.img`
    position: absolute;
    width: 4rem;
    height: 4rem;
    justify-content: center;
    align-items: center; 
`
export const DetailsItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const NameCoffes = styled.p`
    margin-top: .3rem;
    margin-left: 5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    color: ${props => props.theme['base-subtitle']};
`
export const ItemValue = styled.div`
    
    padding-left: 20rem;
    margin-top: -1.9rem;
    color: ${props => props.theme['base-text']};

    p{
        text-align: center;
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; 
    }
`

export const Action = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: 5rem;

`
export const Counter = styled.div`
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    background: ${props => props.theme['base-button']};
    border-radius: 6px;
`
export const TrashButton = styled.div`
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    border-radius: 0.375rem;
    background: ${props => props.theme['base-button']};

    :hover{
        cursor: pointer;
        background: ${props => props.theme['base-hover']};
        transition: .5s;
    }
    
    p{
        font-family: Roboto;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        text-transform: uppercase;

        color: ${props => props.theme['base-text']};
    }
`
    export const Divider = styled.div`
    display: flex;
    width: 100%;
    margin-top: 7rem;
    margin-left: -22rem;
`