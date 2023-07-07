import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    position: relative;
    flex-wrap: wrap;
    margin-top: 5rem;
    padding: 0rem 10rem;
`
export const ContainerForm = styled.div`
    width: 40rem;
    border-radius: 0.375rem;
    background: ${props => props.theme['base-card']};
    
`

export const FormAdress = styled.div`
    display: flex;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    
`

export const LabelForm = styled.div`
    /* display:flex;
    align-items: flex-start;
    gap: 0.5rem;
    align-self: stretch; */

    h1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: stretch;

        color: ${props => props.theme['base-subtitle']}; 
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%;
    }

    span {
        
        display: flex;
        height: 1.3125rem;
        flex-direction: column;
        justify-content: center;

        color: ${props => props.theme['base-text']};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;  
    }
`

export const ContainerPayment = styled.div`
    width: 40rem;       
    margin-top: 1rem;
    border-radius: 0.375rem;
    background: var(--base-card, #F3F2F2);
`

export const ContainerCoffeeList = styled.div`
    width: 28rem;
    
    margin-left: 1rem;
    padding: 5rem;
    border-radius: 0.375rem 2.75rem;
    background: ${props => props.theme['base-card']};

    @media (max-width: 1500px) {
    margin-top: 2rem;
    order: 3;
    }
`