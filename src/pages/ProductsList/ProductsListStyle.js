import styled from "styled-components";
import { colors, Themes } from "../../Colors";
import { devices } from "../../Responsiveness";

export const ProductsListContainer = styled.div`

`

export const ProductsListFlexbox = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    flex-wrap: wrap;
    row-gap: 1rem;

    @media only screen and (${devices.laptop}) {
        gap: .8rem;
    }
`

export const ProductGrid = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${colors.grey1};
    border-radius: 10px;
    flex: 0 0 calc(50% - .5rem);
    box-sizing: border-box;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1), 
                2px 0px 5px rgba(0, 0, 0, 0.1), 
               -2px 0px 5px rgba(0, 0, 0, 0.1);

    @media only screen and (${devices.tablet}) {
        flex: 0 0 calc(33.33% - .7rem);
    }

    @media only screen and (${devices.laptop}) {
        flex: 0 0 calc(20% - .7rem);
    }

    img {
        width: 100%;
        height: 30vh;
        border-radius: 10px 10px 0 0;
        object-fit: cover;
    }
`

export const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .5rem .5rem 1rem;
    font-size: .8rem;

    @media only screen and (${devices.tablet}) {
        font-size: 1rem;
    }

    span {
        cursor: pointer;
        position: relative;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    p {
        &.name {
            font-weight: 500;
            color: ${props => props.darkMode ? colors.grey1 : colors.black};
        }

        &.price {

        }
    }
`

