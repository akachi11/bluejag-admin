import React, { useContext, useEffect, useState } from 'react'
import { ProductGrid, ProductInfo, ProductsListContainer, ProductsListFlexbox } from './ProductsListStyle'
import { PageHeader, PageSearch } from '../../AppStyles'
import { UIContext } from '../../context/UIContext'
import cloth from "../../assets/cloth.png"
import { BsThreeDots } from "react-icons/bs";
import ItemMenu from '../../components/ItemMenu/ItemMenu'
import { useNavigate } from 'react-router-dom'

const ProductsList = () => {
    useEffect(() => {
        selectPage('products')
    }, [])

    const [menuOpen, setMenuOpen] = useState()
    const navigate = useNavigate()

    const { sideBar, toggleSideBar, darkMode, toggleDarkMode, selectPage } = useContext(UIContext)

    return (
        <ProductsListContainer>
            <PageHeader>
                <p>Products</p>
                <button onClick={() => { navigate('/create-product') }}>Add Products</button>
            </PageHeader>

            <PageSearch darkMode={darkMode}>
                <input type="text" placeholder='Search products by name or category' />
            </PageSearch>

            <ProductsListFlexbox>
                {Array.from({ length: 10 }, (_, index) => (
                    <ProductGrid>
                        <img src={cloth} alt="" />
                        <ProductInfo darkMode={darkMode}>
                            <div>
                                <p className="name">Sleeveless</p>
                                <p className="price">$200</p>
                            </div>
                            <span onClick={() => (menuOpen === index) ? setMenuOpen() : setMenuOpen(index)}>
                                <BsThreeDots />
                                {menuOpen === index && <ItemMenu />}
                            </span>
                        </ProductInfo>
                    </ProductGrid>
                ))}
            </ProductsListFlexbox>
        </ProductsListContainer>
    )
}

export default ProductsList
