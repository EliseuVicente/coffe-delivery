import styled from 'styled-components'

export const Header = styled.div`
    position: absolute;
    height: 544px;
    left: 0px;
    right: 0px;
    top: 104px;

    img{
        position: absolute;
        width: 476px;
        height: 360px;
        left: calc(50% - 476px/2 + 322px);
        top: calc(50% - 360px/2);
    }
`
export const TitleHeader = styled.div`
    display: flex;
    flex-direction: column;

    position: relative;
    width: 36.75rem;
    height: 12rem;
    left: 10%;
    /* left: calc(50% - 36.75rem/2 - 16.625rem); */
    top: calc(50% - 192px/2 - 82px);
`
export const Title = styled.h1`
    width: 36.75rem;
    height: 7.75rem;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: ${props => props.theme['base-title']};
  
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`

export const SubTitle = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin-top: 1rem;

    color: ${props => props.theme['base-subtitle']};
    font-stretch: 100;
`

export const BoxCircle = styled.div`
    max-width: 50rem;
    margin-top: 10rem;
    
    margin-left: 10%;
`
 export const LabelItems = styled.div`
    display: inline-grid;
    width: 20rem;
    height: 3.5rem;
    position: relative;
    grid-template-rows: 2fr 2fr;

    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        padding-left: 3rem;
   
        color: #574F4D;
        margin-top: -1.5rem;
     }
 `

const CicleBase = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;
 `
export const CicleYellowDark = styled(CicleBase)`
    background: ${props => props.theme['yellow-dark']};
`
export const CircleGray = styled(CicleBase)`
    background: ${props => props.theme['base-text']};
`
export const CircleYellow = styled(CicleBase)`
    background: ${props => props.theme['yellow']};
`
export const CirclePurple = styled(CicleBase)`
    background: ${props => props.theme['purple']};
`