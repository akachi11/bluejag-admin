import styled from "styled-components";
import { colors, Themes } from "../../Colors";
import { devices } from "../../Responsiveness";

export const SideBarContainer = styled.div`
    position: fixed;
    width: 85%;
    height: 100%;
    background-color: ${props => props.darkMode ? Themes.dark.mainBg : colors.grey1};
    z-index: 2;

    @media only screen and (${devices.laptop}) {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: static;
        height: fit-content
    }
`

export const SideBarClose = styled.div`
    position: absolute;
    right: 0;
    margin: 1rem 1rem 0 0;
    font-size: 2rem;
    color: ${props => props.darkMode ? colors.white : Themes.dark.subBg};

    @media only screen and (${devices.laptop}) {
        display: none;
    }
`

export const SideBarLogo = styled.img`
    width: 100%;
    padding-top: 30%;

    @media only screen and (${devices.laptop}) {
        padding-top: 0;
    }
`

export const SideBarLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: 500;

    div {
        display: flex;
        cursor: pointer;
        align-items: center;
        gap: .5rem;
        margin: auto;
        min-width: 70%;
        padding: .5rem 1rem;
        border-radius: 5px;
        color: ${props => props.darkMode ? colors.white : Themes.dark.subBg};

        &.selected {
            background-color: ${Themes.light.selected.text};
            color: ${colors.white};
            font-weight: 700;

            &:hover {
            background-color: ${Themes.light.selected.text};
        }
        }

        &:hover {
            background-color: ${props => props.darkMode ? Themes.dark.subBg : Themes.light.selected.bg};
        }

        @media only screen and (${devices.laptop}) {
            font-size: 1rem;
        }
    }
`