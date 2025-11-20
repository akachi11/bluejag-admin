import React, { useContext } from 'react'
import { ItemMenuContainer, ItemMenuOption } from './ItemMenuStyles'
import { MdArrowOutward, MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import { UIContext } from '../../context/UIContext';
import { useNavigate } from 'react-router-dom';

const ItemMenu = () => {

    const { darkMode } = useContext(UIContext)
    const navigate = useNavigate()

  return (
    <ItemMenuContainer darkMode={darkMode}>
        <ItemMenuOption darkMode={darkMode}>
            <MdOutlineRemoveRedEye />
            <p>View details</p>
        </ItemMenuOption>
        <ItemMenuOption onClick={() => navigate('/product-details')} darkMode={darkMode}>
            <MdArrowOutward />
            <p>Go to</p>
        </ItemMenuOption>
        <ItemMenuOption darkMode={darkMode}>
            <MdDeleteOutline />
            <p>Delete</p>
        </ItemMenuOption>
    </ItemMenuContainer>
  )
}

export default ItemMenu
