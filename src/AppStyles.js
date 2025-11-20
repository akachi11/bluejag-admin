import styled, { keyframes } from "styled-components";
import { devices } from "./Responsiveness";
import { colors, Themes } from "./Colors";

const breatheAnimation = keyframes`
 0% { 
    transform: scale(1);
  }

  50% {
    transform: scale(0.7);
  }

  100% {
    transform: scale(1);
  }
`

export const AppContainer = styled.div`
    width: 100%;
    background-color: ${props => props.darkMode ? Themes.dark.mainBg2 : Themes.light.mainBg};
    min-height: 100vh;

    @media only screen and (${devices.laptop}) {
        display: flex;
    }
`

export const FixedSideBar = styled.div`
    display: none;

    @media only screen and (${devices.laptop}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 25%;
        height: 100%;
        position: fixed;
        background-color: ${props => props.darkMode ? Themes.dark.mainBg : colors.grey1};
    }
`

export const AppContent = styled.div`
    padding: 5.5rem 1rem;
    color: ${props => props.darkMode ? colors.white : colors.black};
    box-sizing: border-box;

    @media only screen and (${devices.laptop}) {
        width: 75%;
        margin-left: 25%;
    }
`

export const PageHeader = styled.div`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    /* display: flex; */
    margin-bottom: 1rem;

    p {
        font-size: 1.5rem;
        font-weight: 700;

        @media only screen and (${devices.tablet}) {
            font-size: 2rem;
        }

        &.modal {
            font-size: 1.2rem;
        }
    }

    div {
        cursor: pointer;
        font-size: 1.3rem;
    }

    button {
        color: ${colors.white};
        background-color: ${Themes.light.selected.text};
        border: none;
        padding: 0.3rem 1rem;
        border-radius: 5px;
        font-weight: 500;
        cursor: pointer;

        @media only screen and (${devices.tablet}) {
            font-size: 1.2rem;
            font-weight: 700;
            padding: 0.5rem 1rem;
        }

        &.submit {
            font-size: 1rem;
            font-weight: 700;

            @media only screen and (${devices.tablet}) {
               font-size: 1.5rem;
            }
        }
    }
`

export const SubHeader = styled.p`
    font-size: 1rem;
    font-weight: 700;
`

export const PageSearch = styled.div`
    border-radius: 15px;

    input {
        background-color: ${props => props.darkMode ? Themes.dark.subBg : Themes.light.subBg};
        color: ${props => props.darkMode ? colors.white : colors.black};
        font-size: .8rem;
        border-radius: 15px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        padding: .5rem 1rem;

        @media only screen and (${devices.tablet}) {
            width: 50%;
            font-size: 1rem;
        }
    }
`

export const LoadingScreen = styled.div`
    z-index: 5;
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.darkMode ? Themes.light.mainBg : Themes.dark.mainBg};

    img {
        width: 8rem;
        animation: ${breatheAnimation} 2s linear infinite;
        z-index: 2;
    }
`