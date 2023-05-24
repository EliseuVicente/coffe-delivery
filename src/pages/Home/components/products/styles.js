import styled from 'styled-components'

export const ContainerProducts = styled.div`
    display: flex;
    position: relative;
    height: 102.813rem;
    top: 34.5rem;
`

export const Title = styled.h1`
    display: flex;
    position: relative;
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
    display: flex;
    position: relative;
    max-width: 80rem;
    top: 5rem;
    /* padding-right: 15rem; */
    margin:0;
`

export const CoffeeItems = styled.div`
    display: inline-grid;
    width: 17rem;
    height: 15rem;
    margin-top: 4rem;
    position: relative;
    /* grid-template-rows: auto 2fr; */
    background: #FF871F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`