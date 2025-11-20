import styled from "styled-components"
import { colors, Themes } from "../../Colors"
import { devices } from "../../Responsiveness"

export const NavbarContainer = styled.div`
    z-index: 3;
    position: fixed;
    width: 100%;
    background-color: ${props => props.darkMode ? Themes.dark.mainBg2 : Themes.light.mainBg};

    @media only screen and (${devices.laptop}) {
        width: 75%;
        right: 0;
    }
`

export const MobileNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    
    @media only screen and (${devices.laptop}) {
        margin-bottom: 0rem;
    }
`

export const MobileNavLeft = styled.div`
    display: flex;
    gap: 1rem;
`

export const MobileSearch = styled.div`
    display: flex;
    align-items: center;
    color: ${colors.grey1};
    padding-bottom: .2rem;
    border-bottom: 1px solid grey;

    input {
        padding: .2rem;
        color: ${colors.grey1};
    }
`

export const MenuIcon = styled.div`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${props => props.darkMode ? Themes.light.subBg : Themes.dark.mainBg2};

    @media only screen and (${devices.laptop}) {
     display: none;   
    }
`

export const NavUser = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
`

export const NavImage = styled.img`
    width: 1.5rem;
    border-radius: 50%;
`

export const UserDropdown = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${props => props.darkMode ? Themes.dark.mainBg2 : Themes.light.mainBg};
    margin-top: 3.7rem;
    margin-right: 1rem;
    min-width: 10rem;
    border-radius: 5px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1), 
                4px 0px 10px rgba(0, 0, 0, 0.1), 
               -4px 0px 10px rgba(0, 0, 0, 0.1);

    div {
        color: ${props => props.darkMode ? colors.grey1 : colors.black};
        padding: .5rem 1rem;
        display: flex;
        gap: .5rem;
        cursor: pointer;
        align-items: center;
        font-size: .8rem;

        &.switch {
            &:hover {
                background-color: unset;
            }

            padding-bottom: 1rem;
        }

        &:hover {
            background-color: ${props => props.darkMode ? Themes.dark.subBg : Themes.light.selected.bg};
            color: ${Themes.light.selected.text};
        }
    }
`