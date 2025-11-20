import styled from "styled-components";
import { colors, Themes } from "../../Colors";


export const ItemMenuContainer = styled.div`
    position: absolute;
    border-radius: 5px;
    color: ${colors.grey1};
    top: 0;
    right: 0;
    z-index: 2;
    margin: 1.5rem 1rem 0 0;
    background-color: ${(props) => props.darkMode ? Themes.dark.mainBg : colors.white};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1), 
                4px 0px 10px rgba(0, 0, 0, 0.1), 
               -4px 0px 10px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
`

export const ItemMenuOption = styled.div`
   display: flex;
   gap : .5rem;
   font-size: 1rem;
   padding: .7rem 1.3rem;

   &:hover {
    color: ${Themes.light.selected.text};
    background-color: ${props => props.darkMode ? Themes.dark.subBg : Themes.light.selected.bg};
   }

   p {
    font-size: .8rem;
   }
`