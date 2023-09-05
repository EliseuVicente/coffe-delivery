import styled from "styled-components";

export const H1 = styled.h1`
    margin-top: 50px;
    padding-left: 10rem;
    color: var(--brand-yellow-dark, #C47F17);
    font-family: Baloo 2;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`

export const H2 = styled.h2`
    padding-left: 10rem;
    color: var(--base-subtitle, #403937);
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`
export const Container = styled.div`
    display: flex;
    margin-top: 40px;
    padding-left: 10rem;
    gap: 102px
`
export const ContainerInfo = styled.div`
    display: flex;
    margin-top: 40px;
    width: 526px;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

    border-radius: 6px 36px;
    border: 1px solid #DBAC2C;
`

export const Image = styled.img`
    width: 492px;
    height: 293px;
    flex-shrink: 0;
`
export const LabelInformation = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;  

    p{
        width: 20rem;
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        
        strong{
        color: var(--base-text, #574F4D);
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        }
    }

    
`