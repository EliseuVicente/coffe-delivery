import styled from 'styled-components'

export const Navbar = styled.header`
/* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px 160px;
    gap: 820px;

    position: absolute;
    height: 104px;
    left: 0px;
    right: 0px;
    top: 0px;

    img{ 
    width: 84.95px;
    height: 40px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    }

`

export const Action = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;

    width: 143px;
    height: 38px;

    /* Brand/Purple Light */

    background: #EBE5F9;
    border-radius: 6px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

    span{
        
    width: 101px;
    height: 18px;

    /* Text/Regular S */

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    /* or 18px */


    /* Brand/Purple Dark */

    color: #4B2995;
    background: #EBE5F9;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    }
    `
