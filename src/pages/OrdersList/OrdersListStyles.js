import styled from "styled-components";
import { colors, Themes } from "../../Colors";
import { devices } from "../../Responsiveness";

export const OrdersListContainer = styled.div`

`

export const OrderModalContainer = styled.div`
    z-index: 4;
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.darkMode ? Themes.light.mainBg : Themes.dark.mainBg};
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.darkMode ? colors.black : colors.grey1};
    opacity: 0.5;
    z-index: 1;
`

export const OrderModal = styled.div`
    background-color: ${props => props.darkMode ? Themes.dark.mainBg2 : colors.white};
    z-index: 2;
    padding: 1rem;
    min-width: 80%;
    border-radius: 5px;

    @media only screen and (${devices.tablet}) {
        min-width: 50%;
    }

    @media only screen and (${devices.laptop}) {
        min-width: 35%;
    }
`

export const OrderInfoContainer = styled.div`
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const OrderInfo = styled.div`

    p {
        font-size: .8rem;

        &.key {
            font-weight: 700;
        }

        &.value {
            color: ${colors.grey1};
        }

        &.price {
            font-size: 1.5rem;
            font-weight: 700;
        }
    }
`

export const OrderLink = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    color: ${Themes.light.selected.text};
    cursor: pointer;
    font-size: .8rem;
`

export const OrderReciept = styled.div`
    margin-top: 2rem;
    border: 2px solid ${Themes.dark.mainBg};
    font-size: .9rem;
    width: fit-content;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.darkMode ? Themes.dark.subBg : colors.grey1};
    }
`

