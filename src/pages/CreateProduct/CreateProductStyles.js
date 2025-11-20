import styled from "styled-components";
import { colors, Themes } from "../../Colors";
import { devices } from "../../Responsiveness";

export const CreateProductContainer = styled.div`
    
`

export const ProductForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3rem;
`

export const DualColumn = styled.div`
    display: flex;
    gap: 1rem;
`

export const DynamicColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (${devices.tablet}) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        row-gap: 1.5rem;

        > div {
            flex: 1 1 calc(50% - 0.5rem);
            box-sizing: border-box;
        }
    }
`

export const ProductFormField = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    label {
        margin-bottom: .7rem;
        font-weight: 700;

        @media only screen and (${devices.tablet}) {
            font-size: 1.3rem;
        }
    }

    input, textarea {
        border: 1px solid ${colors.grey1};
        width: 100%;
        border-radius: 5px;
        padding: 0.5rem;
        font-size: .8rem;
        color: ${props => props.darkMode ? colors.grey1 : colors.black};

        @media only screen and (${devices.tablet}) {
            font-size: 1rem;
        }
    }
`

export const ProductFormImageInput = styled.div`
    font-size: 5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${colors.grey1};
    border: 1px solid ${colors.grey1};
    border-radius: 5px;
    cursor: pointer;
    height: 20rem;
    position: relative;

    p{
        font-size: .8rem;

        @media only screen and (${devices.tablet}) {
            font-size: 1rem;
        }
    }

    img {
        width: 100%;
        object-fit: cover;
        height: 100%;
        border-radius: 5px;
    }
`

export const ProductUploadedImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;

    > div {
        height: 30vh;
        flex: 1 1 calc(50% - 0.5rem);
        box-sizing: border-box;
        text-align: center;
    }
`

export const UploadedImage = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid ${colors.grey1};
    border-radius: 5px;

    img {
        width: 100%;
        object-fit: cover;
        height: 100%;
        border-radius: 5px;
    }

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RemoveImage = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: .2rem;
    color: ${colors.red};
    font-size: 2rem;
`

export const ImageInput = styled.input`
    display: none;
`

export const RadioInput = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`

export const MultiSelectContainer = styled.div`
`

export const MultiSelectedItems = styled.div`
    border: 1px solid ${colors.grey1};
    display: flex;
    gap: .5rem;
    flex-wrap: wrap;
    border-radius: 5px;
    padding: .5rem;
    cursor: default;

    p {
        font-size: .9rem;
        color: ${colors.grey1};
    }
`

export const MultiSelectedOption = styled.div`
    background-color: ${props => props.darkMode ? Themes.dark.subBg : Themes.light.subBg};
    padding: 0.3rem .5rem;
    border-radius: 20px;
    font-size: .8rem;
    display: flex;
    align-items: center;
    gap: .5rem;
    
    > div {
        position: static;
        font-size: 1rem;
        margin: 0;
        display: flex;
        align-items: center;
    }
`

export const MultiSelectDropDown = styled.div`
    width: fit-content;
    margin-top: .5rem;
    position: relative;
    cursor: pointer;

    > p {
        background-color: ${props => props.darkMode ? Themes.dark.subBg : colors.grey1};
        padding: 0.3rem;
        border-radius: 5px;
        font-size: .8rem;
        font-weight: 500;
    }

    > div {
        position: absolute;
        z-index: 2;
        background-color: ${props => props.darkMode ? Themes.dark.mainBg2 : Themes.light.mainBg};
        min-width: 10rem;
        border-radius: 5px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1), 
                4px 0px 10px rgba(0, 0, 0, 0.1), 
               -4px 0px 10px rgba(0, 0, 0, 0.1);
    }
`

export const MultiSelectOption = styled.div`
    padding: .5rem;
    color: ${props => props.selected ? colors.grey1 : "inherit"};
    cursor: ${props => props.selected ? "not-allowed" : "pointer"};;

    &:hover {
        background-color: ${Themes.dark.subBg};
    }
`