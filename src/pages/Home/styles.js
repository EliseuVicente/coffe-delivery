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

    background: #FAFAFA;

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

    display: flexbox;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0rem;
    gap: 5px;

    width: 143px;
    height: 38px;

    /* Brand/Purple Light */
    background: #EBE5F9;
    border-radius: 6px;
    /* Inside auto layout */

    div{
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
    }
`
export const IconCar = styled.span`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
   
    margin-left: 2rem;
    margin-top: -0.1rem;
    width: 38px;
    height: 38px;

    /* Brand/Yellow Light */
    background: #F1E9C9;
    border-radius: 6px;
`
export const Header = styled.div`
    position: absolute;
    height: 544px;
    left: 0px;
    right: 0px;
    top: 104px;

    background: #FAFAFA;

    img{
        position: absolute;
        width: 476px;
        height: 360px;
        left: calc(50% - 476px/2 + 322px);
        top: calc(50% - 360px/2);
    }
`
export const BoxCircle = styled.div`
    position: absolute;
    width: 567px;
    height: 84px;
    left: calc(50% - 567px/2 - 276.5px);
    top: calc(50% - 84px/2 + 122px);

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;

        color: #574F4D;
    }
`
export const BaseCircleItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 32px;
    height: 32px;

    border-radius: 1000px;
`
export const CircleYellowDark = styled(BaseCircleItem)`
    margin-top: 0px;
    background: #C47F17;
`
export const TitleCircleYellowDark = styled.div`
    margin-top: -25px;
    margin-left: 45px; 
`
export const CircleGray = styled(BaseCircleItem)`
    margin-top: -26px;
    margin-left: 271px;
    background: #574F4D; 
`
export const TitleCircleGray = styled.div`
    margin-top: -26px;
    margin-left: 320px;
    width: 250px;
    height: 21px;
`
export const CircleYellow = styled(BaseCircleItem)`
    margin-top: 20px;
    margin-left: 0px;
    background: #DBAC2C; 
`
export const TitleCircleYellow = styled.div`
    margin-top: -26px;
    margin-left: 45px;
`
export const CirclePurple = styled(BaseCircleItem)`
    margin-top: -26px;
    margin-left: 272px;
    background: #8047F8; 
`
export const TitleCirclePurple = styled.div`
    margin-top: -26px;
    margin-left: 320px;
`