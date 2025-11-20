import React, { useContext, useEffect, useRef, useState } from 'react'
import { Stat, UserActions, UserDeets, UserDetailsContainer, UserInfo, UserInfoSection, UserStat, UserStats } from './UserDetailsStyles'
import { UIContext } from '../../context/UIContext'
import image from '../../assets/cloth.png'
import { FaCaretDown } from 'react-icons/fa'
import { ProductInfoDropDown } from '../ProductDetails/ProductDetailsStyles'
import { HomeOrder, HomeOrders, HomeOrderTitles } from '../Home/HomeStyles'
import { PageHeader } from '../../AppStyles'

const UserDetails = ({ orderRef }) => {

    const dropdownRef = useRef(null);
    const { darkMode, toggleOrderModal, orderModal } = useContext(UIContext)
    const [dropdown, setDropdown] = useState(false)

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdown(false);
        }
        if (orderRef.current && !orderRef.current.contains(event.target)) {
            toggleOrderModal();
        }
    };

    useEffect(() => {
        if (dropdown || orderModal) {
            setTimeout(() => {
                document.addEventListener('click', handleClickOutside);
            }, 1);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropdown, orderModal]);

    return (
        <UserDetailsContainer darkMode={darkMode}>
            <UserInfoSection>
                <UserInfo>
                    <UserDeets>
                        <img src={image} alt="" />
                        <p className="name">John Doe</p>
                    </UserDeets>
                    <UserActions darkMode={darkMode} ref={dropdownRef} onClick={() => setDropdown(!dropdown)}>
                        <div className='clicker'>
                            <p>Actions</p>
                            <FaCaretDown />
                        </div>
                        {
                            dropdown &&
                            <ProductInfoDropDown className='user' darkMode={darkMode}>
                                <p onClick={() => { console.log("Hi"); setDropdown(false) }}>Description</p>
                                <p onClick={() => { console.log("Hi"); setDropdown(false) }}>Information</p>
                                <p onClick={() => { console.log("Hi"); setDropdown(false) }}>Reviews</p>
                            </ProductInfoDropDown>
                        }
                    </UserActions>
                </UserInfo>

                <UserStats>
                    <UserStat className='stat'>
                        <Stat>
                            <p className="statHead">Total orders:</p>
                            <p className="statVal">500</p>
                        </Stat>
                        <Stat>
                            <p className="statHead">Total spent:</p>
                            <p className="statVal">$7000</p>
                        </Stat>
                    </UserStat>

                    <UserStat>
                        <p className="header">Contacts</p>
                        <div className='info'>
                            <Stat>
                                <p className="statHead">Email:</p>
                                <p className="deetVal">johndoe@gmail.com</p>
                            </Stat>
                            <Stat>
                                <p className="statHead">Phone:</p>
                                <p className="deetVal">+234 123 456 7890</p>
                            </Stat>
                        </div>
                    </UserStat>

                    <UserStat>
                        <p className="header">Address</p>
                        <div className='info'>
                            <Stat>
                                <p className="statHead">State:</p>
                                <p className="deetVal">Lagos</p>
                            </Stat>
                            <Stat>
                                <p className="statHead">Address:</p>
                                <p>1234 Aston Lane Street</p>
                            </Stat>
                            <Stat>
                                <p className="statHead">Postal code:</p>
                                <p className="deetVal">12345</p>
                            </Stat>
                        </div>
                    </UserStat>
                </UserStats>
            </UserInfoSection>

            <PageHeader>
                <p>User Orders</p>
            </PageHeader>

            <HomeOrders>
                <HomeOrderTitles>
                    <p className="products">Product</p>
                    <p className="id">Order ID</p>
                    <p className="date">Date</p>
                    <p className="status">Status</p>
                    <p className="amount">Amount</p>
                    <p className="action">View</p>
                </HomeOrderTitles>

                {Array.from({ length: 10 }, (_, index) => (
                    <HomeOrder key={index}>
                        <hr />
                        <div>
                            <p className="products">Sleeveless Hoodie</p>
                            <p className="id">203301</p>
                            <p className="date">01-02-2024</p>
                            <p className="status">
                                <div></div>
                                Successful
                            </p>
                            <p className="amount">$250000.00</p>
                            <p className='action' >
                                <div onClick={() => { toggleOrderModal() }}>
                                    Details
                                </div>
                            </p>
                        </div>
                    </HomeOrder>
                ))}
            </HomeOrders>
        </UserDetailsContainer>
    )
}

export default UserDetails
