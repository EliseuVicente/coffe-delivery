import styled from "styled-components"

export const Navbar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 10rem;
`

export const Action = styled.div`
    display: flex;
    width: 11rem;
`
export const Location = styled.div`
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    width: 8rem;
    height: 2.375rem;
    gap: .31rem;
    background: ${props => props.theme['purple-light']};
    border-radius: 6px;

    p {
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
    margin-left: .5rem;
    width: 2.375rem;
    height: 2.375rem;

    background: ${props => props.theme['yellow-light']};
    border-radius: 6px;
`