import styled from 'styled-components'

export const Container = styled.div`
    display: inline;
    width: 54rem;
    float: left;
    padding-left: 10rem;
    gap: 12px;
`
export const ContainerForm = styled.div`
    /* width: 40rem; */
    /* border-radius: 0.375rem; */
    background: ${props => props.theme['base-card']};

    display: flex;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
    
`
export const FormAdress = styled.div`
    display: flex;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

`
const BaseInput = styled.input`
    padding: 0.75rem;
    align-items: center;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    border: 1px solid var(--base-button, #E6E5E5);
    background: var(--base-input, #EDEDED);
`

export const AddresInput = styled(BaseInput)`
    width: 12rem;
`
export const StreetInput = styled(BaseInput)`
    width: 100%;
`
export const ComplementInput = styled(BaseInput)`
    width: 62.5%;
    margin-left: 1rem;
`
export const CityInput = styled(BaseInput)`
    width: 50%;
    margin-left: 1rem;
`
export const UFInput = styled(BaseInput)`
    width: 10%;
    margin-left: 1rem;
`

export const LabelForm = styled.div`
    display:flex;
    align-items: flex-start;
    gap: 0.5rem;
    align-self: stretch;

    h1{
        color: ${props => props.theme['base-subtitle']}; 
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%;
    }

    span {
        margin-top: 1.5rem;
        margin-left: -9.5rem;
        color: ${props => props.theme['base-text']};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;  
    }
`

export const ContainerPayment = styled.div`
    padding: 2.5rem;
    /* width: 40rem; */       
    margin-top: 1rem;
    border-radius: 0.375rem;
    background: var(--base-card, #F3F2F2);
`

export const LabelPayment = styled.div`
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        align-self: stretch;
    h1{
        color: ${props => props.theme['base-subtitle']}; 
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%;
    }

    span {
        margin-top: 1.5rem;
        margin-left: -5.5rem;
        color: ${props => props.theme['base-text']};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;  
    }
`

export const TypePayment = styled.div`
    display: inline-flex;
    padding: 1rem;
    margin-top: 2rem;
    margin-right: .9rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 0.375rem;
    background: var(--base-button, #E6E5E5);

    &:nth-child(4) {
        width: 10.6rem;
        margin-right: 0rem;
    }

    p{
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        text-transform: uppercase;
    }
`

export const ContainerCart = styled.div`
    display: inline;
    width: 28rem;
    padding: 2.5rem;
    float: right;
    margin-right: 10rem;
    gap: 1.5rem;
    background: ${props => props.theme['base-card']};
    border-radius: 6px 44px;
`