import styled from "styled-components";
import { colors, Themes } from "../../Colors";
import { devices } from "../../Responsiveness";

export const ProductDetailsContainer = styled.div`
`

export const ProductInventoryInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (${devices.laptop}) {
        flex-direction: row;
    }
`

export const ProductUsersInfo = styled.div`
    flex: 1;

    @media only screen and (${devices.laptop}) {
        display: flex;
        flex-direction: column;
    }
`

export const ProductImages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (${devices.tablet}) {
        flex-direction: row;
    }

    @media only screen and (${devices.laptop}) {
        flex: 1.5;
        gap: .5rem;
    }
`

export const SelectedImage = styled.div`
    height: 50vh;

    @media only screen and (${devices.tablet}) {
        flex: 6;
    }

    @media only screen and (${devices.laptop}) {
        height: 100%;
        flex: 4;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
`

export const ProductImageFlexBox = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;

    @media only screen and (${devices.tablet}) {
        flex-direction: column;
        flex: 1;
    }

    img {
        width: 5rem;
        border-radius: 5px;

        &.selected {
            border: 2px solid ${colors.yellow};
        }

        @media only screen and (${devices.tablet}) {
            width: 100%;
        }
    }
`

export const DescriptionImg = styled.div`
    height: 50vh;
    margin-bottom: 2rem;
    text-align: center;

    @media only screen and (${devices.tablet}) {
        height: auto;
    }

    img {
        width: 80%;
        object-fit: cover;
        border-radius: 5px;

        @media only screen and (${devices.tablet}) {
            flex: 6;
        }

        @media only screen and (${devices.laptop}) {
            width: 100%;
        }
    }
`

export const ProductPrice = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
        &.old-price {
            text-decoration: line-through;
            color: ${colors.grey1}
        }
        
        &.new-price {
            font-size: 1.3rem;
            font-weight: 700;
        }
    }
`

export const ReviewSummary = styled.div`
    display: flex;
    align-items: center;

    p {
        font-size: .8rem;
        color: ${colors.grey1}
    }
`

export const ProductInfo = styled.div`

`

export const ProductInfoSelection = styled.div`
    position: relative;
    cursor: pointer;
    margin: 2rem 0 1rem;
    width: fit-content;
    > p {
        font-weight: 700;
        padding-bottom: .3rem;
        border-bottom: 2px solid ${Themes.light.selected.text};
        width: fit-content;
    }
    color: ${Themes.light.selected.text};

    div {
        display: flex;
        gap: .5rem;
    }
`

export const ProductInfoDropDown = styled.div`
    position: absolute;
    border-radius: 5px;
    color: ${colors.grey1};
    top: 0;
    z-index: 2;
    margin-top: 1.5rem;
    background-color: ${(props) => props.darkMode ? Themes.dark.mainBg : colors.white};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1), 
                4px 0px 10px rgba(0, 0, 0, 0.1), 
               -4px 0px 10px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    gap: 0 !important;

    &.user {
        margin-top: 1.8rem;
    }

    p {
        font-size: .8rem;
        padding: .7rem 1.3rem;
        cursor: pointer;

        &:hover {
            background-color: ${props => props.darkMode ? Themes.dark.subBg : Themes.light.selected.bg};
        }
    }
`

export const ProductInfoDetails = styled.div`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
    p {
        color: ${colors.grey1};
        font-size: .8rem;
        &.key {
            font-weight: 700;
        }

        &.value {
            
        }
    }
`

export const ProductKeyValue = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
`

export const ProductReviews = styled.div`

`

export const ProductReview = styled.div`
    
`
