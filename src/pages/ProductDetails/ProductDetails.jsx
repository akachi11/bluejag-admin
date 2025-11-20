import React, { useContext, useEffect, useRef, useState } from 'react'
import shirt from '../../assets/cloth.png'
import { DescriptionImg, ProductDetailsContainer, ProductImageFlexBox, ProductImages, ProductInfo, ProductInfoDetails, ProductInfoDropDown, ProductInfoSelection, ProductInventoryInfo, ProductKeyValue, ProductPrice, ProductUsersInfo, ReviewSummary, SelectedImage } from './ProductDetailsStyles'
import { PageHeader, SubHeader } from '../../AppStyles'
import { FaCaretDown } from 'react-icons/fa'
import { UIContext } from '../../context/UIContext'

const ProductDetails = () => {

    const dropdownRef = useRef(null);
    const { darkMode } = useContext(UIContext)
    const [selectedDetail, setSelectedDetail] = useState('Description')
    const [dropdown, setDropdown] = useState(false)

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdown(false);
        }
    };

    useEffect(() => {
        if (dropdown) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropdown]);

    return (
        <ProductDetailsContainer>
            <PageHeader>
                <p>Product Details</p>
            </PageHeader>

            <ProductInventoryInfo>
                <ProductImages>
                    <SelectedImage>
                        <img src={shirt} alt="" />
                    </SelectedImage>
                    <ProductImageFlexBox>
                        <img className='selected' src={shirt} alt="" />

                        <img src={shirt} alt="" />

                        <img src={shirt} alt="" />

                        <img src={shirt} alt="" />
                    </ProductImageFlexBox>
                </ProductImages>

                <ProductUsersInfo>
                    <DescriptionImg>
                        <img src={shirt} alt="" />
                    </DescriptionImg>

                    <SubHeader>
                        Short sleeve Tank
                    </SubHeader>

                    <ProductPrice>
                        <p className="old-price">$700</p>
                        <p className="new-price">$560</p>
                    </ProductPrice>

                    <ReviewSummary>
                        <p>520 Customer Reviewed</p>
                    </ReviewSummary>
                </ProductUsersInfo>
            </ProductInventoryInfo>

            <ProductInfo>
                <ProductInfoSelection ref={dropdownRef} onClick={() => setDropdown(!dropdown)}>
                    <div>
                        <p>{selectedDetail}</p>
                        <FaCaretDown />
                    </div>
                    {
                        dropdown &&
                        <ProductInfoDropDown darkMode={darkMode}>
                            <p onClick={() => { setSelectedDetail('Description'); setDropdown(false) }}>Description</p>
                            <p onClick={() => { setSelectedDetail('Information'); setDropdown(false) }}>Information</p>
                            <p onClick={() => { setSelectedDetail('Reviews'); setDropdown(false) }}>Reviews</p>
                        </ProductInfoDropDown>
                    }
                </ProductInfoSelection>

                {
                    selectedDetail === 'Description' &&
                    <ProductInfoDetails>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, vero. Sit, alias eaque id quo, obcaecati numquam ipsa laborum repudiandae excepturi ipsum vero dicta dolore, architecto corporis laboriosam quas quasi?</p>
                    </ProductInfoDetails>
                }

                {
                    selectedDetail === 'Information' &&
                    <ProductInfoDetails>
                        {Array.from({ length: 5 }, (_, index) => (
                            <ProductKeyValue key={index}>
                                <p className="key">Key: </p>
                                <p className="value">Value</p>
                            </ProductKeyValue>
                        ))}
                    </ProductInfoDetails>
                }
                
                {
                    selectedDetail === 'Reviews' &&
                    <ProductInfoDetails>
                        {Array.from({ length: 5 }, (_, index) => (
                            <ProductKeyValue key={index}>
                                <p className="key">Key: </p>
                                <p className="value">Value</p>
                            </ProductKeyValue>
                        ))}
                    </ProductInfoDetails>
                }
            </ProductInfo>
        </ProductDetailsContainer>
    )
}

export default ProductDetails
