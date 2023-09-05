import styled from 'styled-components'

export const TitleContainers = styled.div`
    color: ${props => props.theme['base-subtitle']};
    font-family: Baloo 2;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 15px;
`

export const Container = styled.div`
    display: inline;
    width: 54rem;
    float: left;
    padding-left: 10rem;
    margin-top: 2.5rem;
    gap: 12px;

    @media (max-width: 574px) {
        float: ;
        padding: 1rem;
        width: 100vw;
      }
`
export const ContainerForm = styled.div`
    border-radius: 0.375rem;
    background: ${props => props.theme['base-card']};

    display: flex;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;

    @media (max-width: 574px) {
        padding: 0px;
      }
    
`
export const FormAdress = styled.div`
    display: flex;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    @media (max-width: 574px) {
        padding: .5rem;
      }

`
const BaseInput = styled.input`
    padding: 0.75rem;
    align-items: center;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    border: 1px solid var(--base-button, #E6E5E5);
    background: var(--base-input, #EDEDED);

    :focus{
        border: 1px solid var(#C47F17);
    }
`

export const AddresInput = styled(BaseInput)`
    width: 12.5rem;

    @media (max-width: 574px) {
        width: 80%;
        margin-left: 2rem;
      }

`
export const StreetInput = styled(BaseInput)`
    width: 100%;

    @media (max-width: 574px) {
        width: 80%;
        margin-left: 2rem;
      }
`
export const ComplementInput = styled(BaseInput)`
    width: 20.5rem;
    margin-left: 1rem;

    @media (max-width: 574px) {
        width: 80%;
        margin-left: 2rem;
      }
`
export const CityInput = styled(BaseInput)`
    width: 15.5rem;
    margin-left: 1rem;

    @media (max-width: 574px) {
        width: 80%;
        margin-left: 2rem;
      }
`
export const UFInput = styled(BaseInput)`
    width: 3.95rem;
    margin-left: 1rem;

    @media (max-width: 574px) {
        width: 30%;
        margin-left: 2rem;
      }
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

        @media (max-width: 574px) {
            width: 20rem;
          }
    }

    span {
        margin-top: 1.5rem;
        margin-left: -9.5rem;
        color: ${props => props.theme['base-text']};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;  


        @media (max-width: 574px) {
            margin-left: -20rem;
          }
    }
`

export const ContainerPayment = styled.div`
    padding: 2.5rem;      
    margin-top: 1rem;
    border-radius: 0.375rem;
    background: ${props=> props.theme['base-card']};
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
    background: ${ props => (props.isSelected ? props.theme['purple-light'] : props.theme['base-button'])};
    border: 1px solid ${props => (props.isSelected ? props.theme['purple'] : props.theme['base-button'])};
    /* background: ${props=> props.theme['base-button']}; */
   
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

    :hover{
        background: ${props=> props.theme['base-hover']};
        transition: .6s;
        cursor: pointer;
    }

    @media (max-width: 574px) {
        margin-right: 0rem;
      }

`

export const ContainerCart = styled.div`
    float: right;
    margin-top: 2.5rem;  
    
    @media (max-width: 574px) {
        margin-top: 1rem;  
        float: none;
        padding: 1rem;
      }
`

export const ContainerCartItems = styled.div`
    display: inline;
    width: 28rem;
    padding: 2.5rem;
    float: right;
    margin-right: 10rem;
    gap: 1.5rem;
    background: ${props => props.theme['base-card']};
    border-radius: 6px 44px;

    @media (max-width: 574px) {
        padding: 0rem;
        width: 100vw;
        float: none;
        margin-right: 0rem;
      }
`
    export const FrameValues = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    margin-bottom: 12px;

p {
    color: ${props=> props.theme['base-text']};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
}

h1 {
    color: var(--base-subtitle, #403937);
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
}
@media (max-width: 574px) {
    width: 90vw;
  }

`

export const ButtonCart = styled.button`
    display: flex;
    width: 100%;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    border:none;

    border-radius: 6px;
    background: var(--brand-yellow, #DBAC2C);

    color: var(--base-white, #FFF);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 22.4px */
    text-transform: uppercase;

    :hover {
        background: var(--brand-yellow-dark, #C47F17);
        transition: .6s;
        cursor: pointer;
    }

`