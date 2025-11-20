import React, { useContext, useEffect, useState } from 'react'
import { HomeContainer, HomeGrid, HomeGridIcon, HomeGrids, HomeOrder, HomeOrders, HomeOrderTitles } from './HomeStyles'
import { PageHeader, SubHeader } from '../../AppStyles'
import { CiShoppingCart } from "react-icons/ci";
import { colors } from '../../Colors';
import { UIContext } from '../../context/UIContext';
import { BsThreeDots } from "react-icons/bs";
import ItemMenu from '../../components/ItemMenu/ItemMenu';

export const Home = ({ orderRef }) => {

  const { darkMode, selectPage, toggleOrderModal, orderModal } = useContext(UIContext)

  const handleClickOutside = (event) => {
    if (orderRef.current && !orderRef.current.contains(event.target)) {
      toggleOrderModal();
    }
  };

  useEffect(() => {
    if (orderModal) {
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 1);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [orderModal]);

  useEffect(() => {
    selectPage('home')
  }, [])

  const [menuOpen, setMenuOpen] = useState()

  return (
    <HomeContainer>
      <PageHeader>
        <p>Home</p>
      </PageHeader>

      <HomeGrids>
        <HomeGrid darkMode={darkMode} color={darkMode ? colors.homeGrid1.text : colors.homeGrid1.bg}>
          <HomeGridIcon>
            <CiShoppingCart />
          </HomeGridIcon>

          <div>
            <p>95,000</p>
            <p className='sub'>Total Orders</p>
          </div>
        </HomeGrid>

        <HomeGrid darkMode={darkMode} color={darkMode ? colors.homeGrid2.text : colors.homeGrid2.bg}>
          <HomeGridIcon>
            <CiShoppingCart />
          </HomeGridIcon>

          <div>
            <p>95,000</p>
            <p className='sub'>Total Orders</p>
          </div>
        </HomeGrid>

        <HomeGrid darkMode={darkMode} color={darkMode ? colors.homeGrid3.text : colors.homeGrid3.bg}>
          <HomeGridIcon>
            <CiShoppingCart />
          </HomeGridIcon>

          <div>
            <p>95,000</p>
            <p className='sub'>Total Orders</p>
          </div>
        </HomeGrid>
      </HomeGrids>


      <SubHeader>
        Latest Orders
      </SubHeader>

      <HomeOrders>
        <HomeOrderTitles>
          <p className="products">Product</p>
          <p className="id">Order ID</p>
          <p className="date">Date</p>
          <p className="name">Customer Name</p>
          <p className="status">Status</p>
          <p className="amount">Amount</p>
          <p className="action">Actions</p>
        </HomeOrderTitles>

        {Array.from({ length: 10 }, (_, index) => (
          <HomeOrder key={index}>
            <hr />
            <div>
              <p className="products">Sleeveless Hoodie</p>
              <p className="id">203301</p>
              <p className="date">01-02-2024</p>
              <p className="name">Akachukwu Chimadika</p>
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


    </HomeContainer>
  )
}
