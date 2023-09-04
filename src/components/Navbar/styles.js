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

export const IconCar = styled.div`
    display: flex;
    margin-left: .5rem;
    height: 2.375rem;
    display: flex;
    padding: 8px;

    background: ${props => props.theme['yellow-light']};
    border-radius: 6px;
`

export const Counter = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-left: 20px;
    margin-top: -40px;

    p{
        color: var(--base-white, #FFF);
        text-align: center;

        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -0.72px;
    }

    border-radius: 1000px;
    background: var(--brand-yellow-dark, #C47F17);
`