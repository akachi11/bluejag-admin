import styled from "styled-components";
import { colors, Themes } from "../../Colors";
import { devices } from "../../Responsiveness";

export const UsersListContainer = styled.div`
`

export const UserGrid = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
    border: 1px solid ${colors.grey1};
    border-radius: 10px;
    flex: 0 0 calc(50% - .5rem);
    box-sizing: border-box;
    padding: 1.5rem 0;
    font-size: .8rem;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1), 
                2px 0px 5px rgba(0, 0, 0, 0.1), 
               -2px 0px 5px rgba(0, 0, 0, 0.1);

    @media only screen and (${devices.tablet}) {
        flex: 0 0 calc(33.33% - .7rem);
    }

    @media only screen and (${devices.laptop}) {
        flex: 0 0 calc(20% - .7rem);
    }

    div {
        padding: 1.5rem 1rem;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        text-align: center;

        p {  
            white-space: nowrap;     
            overflow: hidden;  
            text-overflow: ellipsis;

            &.name {
                font-weight: 700;
            }
            &.info {
                color: ${colors.grey1};
            }
        }
    }

    img {
        margin: auto;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        object-fit: cover;
        object-position: top;
    }

    button {
        width: 8rem;
        margin: auto;
        background-color: ${Themes.light.selected.text};
        font-size: .8rem;
        padding: 0.5rem 0;
        border-radius: 10px;
        font-weight: 700;
        color: ${colors.white};
        cursor: pointer;
    }
`