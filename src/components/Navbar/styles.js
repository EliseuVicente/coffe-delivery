import styled from "styled-components"

export const Navbar = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 7rem;
    gap: 2rem;
`

export const Action = styled.div`
    display: flexbox;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-left: 0.5rem;
    gap: .31rem;

    width: 8.938rem;
    height: 2.375rem;

    background: ${props => props.theme['purple-light']};
    border-radius: 6px;

    div{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    
    color: ${props => props.theme['purple-dark']};
 
    }
`
export const IconCar = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    width: 2.375rem;
    height: 2.375rem;

    background: ${props => props.theme['yellow-light']};
    border-radius: 6px;
`