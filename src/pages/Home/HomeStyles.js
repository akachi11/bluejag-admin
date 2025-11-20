import styled from "styled-components";
import { devices } from "../../Responsiveness";
import { colors, Themes } from "../../Colors";

export const HomeContainer = styled.div`
    width: 100%;

    @media only screen and (${devices.laptop}) {
    }
`

export const HomeGrids = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;

    @media only screen and (${devices.tablet}) {
        flex-direction: row;
    }
`

export const HomeGrid = styled.div`
    display: flex;
    border-radius: 10px;
    margin: auto;
    min-width: 0;
    align-items: center;
    gap: 2rem;
    padding: 1rem 3rem;
    flex: 1;
    background-color: ${props => props.darkMode ? Themes.dark.subBg : props.color};
    cursor: default;

    @media only screen and (${devices.mobileMedium}) {
        padding: 1rem 5rem;
    }

    @media only screen and (${devices.tablet}) {
        padding: 1rem 2rem;
        justify-content: center;
        gap: 2rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        p {
            font-size: 1.7rem;
            font-weight: 700;
            color: ${props => props.darkMode ? props.color : colors.black};

            &.sub {
                font-size: .9rem;
                font-weight: 500;
                color: ${props => props.darkMode ? Themes.light.mainBg2 : Themes.dark.mainBg};
            }
        }
    }
`

export const HomeGridIcon = styled.div`
    background-color: ${Themes.dark.mainBg};
    border-radius: 50%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
    font-size: 2rem;
`

export const HomeOrders = styled.div`
    overflow-x: scroll;

    p {
        white-space: nowrap;     
        overflow: hidden;  
        text-overflow: ellipsis;

        &.products {
            width: 7rem; 
            
            @media only screen and (${devices.tablet}) {
                width: 15rem;
            }
        }

        &.id {
            width: 5rem;
            
        }

        &.date {
            width: 5rem;

            @media only screen and (${devices.tablet}) {
                width: 7rem;
            }
        }

        &.name {
            width: 7rem;

            @media only screen and (${devices.tablet}) {
                width: 10rem;
            }
        }

        &.status {
            width: 7rem;
        }

        &.amount {
            width: 5rem;
        }

        &.action {
            width: 4rem;
            text-align: center;
            cursor: pointer;
            position: relative;

            div {
                border: 1px solid ${Themes.light.selected.text};
                padding: 0.5rem;
                font-size: .7rem;
                border-radius: 5px;
            }
        }
    }

    @media only screen and (${devices.laptop}) {
        p {
            &.products {
                flex: 2;
                min-width: 0;
            }

            &.id {
                flex: 1;
                min-width: 0;
            }

            &.date {
                flex: 1;
                min-width: 0;
            }

            &.name {
                flex: 2;
                min-width: 0;
            }

            &.status {
                word-wrap: break-word;
                overflow-wrap: break-word;
                flex: 2;
                min-width: 0;
            }

            &.amount {
                word-wrap: break-word; 
                overflow-wrap: break-word;
                flex: 2;
                min-width: 0;
            }

            &.action {
                word-wrap: break-word;
                overflow-wrap: break-word;
                flex: 1;
                min-width: 0;
            }
        }
    }
`

export const HomeOrderTitles = styled.div`
    display: flex;
    gap: .8rem;
    margin: 1rem 0;
    align-items: center;
    font-size: .8rem;
    font-weight: 700;
    width: fit-content;

    @media only screen and (${devices.laptop}) {
        width: 100%;
    }

    p {
        color: ${colors.grey1};
    }
`

export const HomeOrder = styled.div`
    width: fit-content;

    @media only screen and (${devices.laptop}) {
        width: 100%;
    }
    > div {
        display: flex;
        gap: .8rem;
        font-size: .8rem;
        align-items: center;
        margin: 1rem 0;
    }
    cursor: pointer;

    p {
        &.status {
            display: flex;
            align-items: center;
            gap: .3rem;

            div {
                min-width: 5px;
                min-height: 5px;
                border-radius: 50%;
                background-color: red;

                &::after {
                    content: "";
                }
            }
        }
    }
`

