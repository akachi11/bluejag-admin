import styled from "styled-components";
import { colors, Themes } from "../../Colors";

export const SwitchLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 25px;
    height: 14px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        cursor: pointer;
        border-radius: 30px;

        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        background-color: ${colors.grey1};

        &::before {
            position: absolute;
            content: "";
            height: 10.5px;
            width: 10.5px;
            left: 2.5px;
            bottom: 2px;
            background-color: white;
            transition: 0.4s;
            border-radius: 50%;
        }
    }

    input:checked + span:before {
        transform: translateX(8.5px);
    }

    input:checked + span {
        background-color: ${Themes.light.selected.text};
    }
`