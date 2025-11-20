import React, { useContext, useEffect, useState } from 'react'
import { UserGrid, UsersListContainer } from './UsersListStyles'
import { ProductsListFlexbox } from '../ProductsList/ProductsListStyle'
import { PageHeader, PageSearch } from '../../AppStyles'
import { UIContext } from '../../context/UIContext'
import { useNavigate } from 'react-router-dom'
import image from "../../assets/cloth.png"

const UsersList = () => {
    useEffect(() => {
        selectPage('users')
    }, [])

    const navigate = useNavigate()

    const { sideBar, toggleSideBar, darkMode, toggleDarkMode, selectPage } = useContext(UIContext)

    return (
        <UsersListContainer>
            <PageHeader>
                <p>Users</p>
                {/* <button onClick={() => { navigate('/create-product') }}>Add Products</button> */}
            </PageHeader>

            <PageSearch darkMode={darkMode}>
                <input type="text" placeholder='Search users by name' />
            </PageSearch>

            <ProductsListFlexbox className='users'>
                <UserGrid darkMode={darkMode}>
                    <img src={image} alt="" />

                    <div>
                        <p className="name">John Doe</p>
                        <p className="info">User ID: #123456</p>
                        <p className="info">johndoe@gmail.com</p>
                    </div>
                    
                    <button onClick={() => navigate('/user-details')}>View Profile</button>
                </UserGrid>

                <UserGrid darkMode={darkMode}>
                    <img src={image} alt="" />

                    <div>
                        <p className="name">John Doe</p>
                        <p className="info">User ID: #123456</p>
                        <p className="info">johndoe@gmail.com</p>
                    </div>

                    <button onClick={() => navigate('/user-details')}>View Profile</button>
                </UserGrid>
            </ProductsListFlexbox>
        </UsersListContainer>
    )
}

export default UsersList
