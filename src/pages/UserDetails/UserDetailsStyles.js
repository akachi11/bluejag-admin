import styled from "styled-components";
import { colors, Themes } from "../../Colors";
import { devices } from "../../Responsiveness";

export const UserDetailsContainer = styled.div`
    @media only screen and (${devices.tablet}) {
        padding: 0 3rem;
    }
`

export const UserInfoSection = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    @media only screen and (${devices.tablet}) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

export const UserDeets = styled.div`
    img {
        width: 10rem;
        border-radius: 10px;
        height: 10rem;
        object-fit: cover;
    }

    p {
        font-size: 1.2rem;
        font-weight: 700
    }
`

export const UserStats = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media only screen and (${devices.tablet}) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
`

export const UserStat = styled.div`
    &.stat {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    div {
        &.info {
            display: flex;
            flex-direction: column;
            gap: .5rem;
        }
    }

    p {
        &.header {
            font-weight: 700;
            margin-bottom: .5rem;
        }
    }
`

export const Stat = styled.div`
    p {
        font-size: .9rem;
        &.statHead {
            color: ${colors.grey1};
            font-size: .8rem;
        }

        &.statVal {
            color: ${Themes.light.selected.text};
            font-weight: 500;
            font-size: 1rem;
        }
    }
`

export const UserActions = styled.div`
    position: relative;

    div {

        &.clicker {
            display: flex;
            align-items: center;
            gap: .2rem;
            background-color: ${props => props.darkMode ? Themes.dark.subBg : colors.grey1};
            width: fit-content;
            padding: 0.3rem;
            border-radius: 5px;
            cursor: pointer;
            font-size: .8rem;
            color: ${colors.white};
        }
    }
`





