import styled from 'styled-components'

export const Navbar = styled.header`
/* Auto layout */
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

    /* Brand/Purple Light */
    background: ${props => props.theme['purple-light']};
    border-radius: 6px;
    /* Inside auto layout */

    div{
    /* Text/Regular S */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    /* Brand/Purple Dark */
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
    /* Brand/Yellow Light */
    background: ${props => props.theme['yellow-light']};
    border-radius: 6px;
`
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
// export const BoxCircle = styled.div`
//     // position: relative;
//     // width: 35.438rem;
//     // height: 5.25rem;
//     // left: calc(50% - 567px/2 - 276.5px);
//     // top: calc(50% - 84px/2 + 122px);
// `
// export const BaseLabelItem = styled.div`
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         padding: 0px;
//         gap: 12px;

//     span{
//             font-family: 'Roboto';
//             font-style: normal;
//             font-weight: 400;
//             font-size: 16px;
//             line-height: 130%;
//             padding-left: 3rem;
//             padding-top: 0.5rem; 
//             color: #574F4D;
//             width: 20rem;
//     }
// `
// export const LabelYellowDark = styled(BaseLabelItem)`
//     width: 231px;
//     height: 32px;
//     left: 0px;
//     top: 0px;
// `
// export const TitleCircleYellowDark = styled.div`
//     // display: grid;    
//     margin-top:  -1.7rem;
//     margin-left: 2.3rem;
//     /* margin-top: -55rem;
//      margin-left: 45px;  */
// `
// export const CircleGray = styled(BaseCircleItem)`
//     /* margin-top: -26px;
//     margin-left: 271px; */
//     background: #574F4D; 
// `
// export const TitleCircleGray = styled.div`
//     // display: grid;    
//     margin-top:  -1.7rem;
//     margin-left: 2.3rem;
//    /* margin-top: -26px;
//     margin-left: 320px;
//     width: 250px;
//     height: 21px; */
// `
// export const CircleYellow = styled(BaseCircleItem)`
//     /* margin-top: 20px;
//     margin-left: 0px; */
//     background: #DBAC2C; 
// `
// export const TitleCircleYellow = styled.div`
//     // display: grid;    
//     margin-top:  -1.7rem;
//     margin-left: 2.3rem;
//     /* margin-top: -26px;
//     margin-left: 45px; */
// `
// export const CirclePurple = styled(BaseCircleItem)`
//     /* margin-top: -26px;
//     margin-left: 272px; */
//     background: #8047F8; 
// `
// export const TitleCirclePurple = styled.div`
//     // display: grid;    
//     margin-top:  -1.7rem;
//     margin-left: 2.3rem;
//     /* margin-top: -26px;
//     margin-left: 320px; */
// `