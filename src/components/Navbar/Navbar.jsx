import React, { useContext, useEffect, useRef, useState } from 'react'
import { MenuIcon, MobileNav, MobileNavLeft, MobileSearch, NavbarContainer, NavImage, NavUser, UserDropdown } from './NavbarStyles'
import { HiMenuAlt4 } from 'react-icons/hi'
import { FaCaretDown } from 'react-icons/fa'
import userImg from '../../assets/user.png'
import { CiSettings, CiUser, CiLogout, CiSearch } from "react-icons/ci";
import Switch from '../Switch/Switch'
import { colors } from '../../Colors'
import { UIContext } from '../../context/UIContext'
import SideBar from '../SideBar/SideBar'

const dropDownIconStyles = {
    fontSize: "1rem"
}

const Navbar = () => {

    const { sideBar, toggleSideBar, darkMode, toggleDarkMode } = useContext(UIContext)
    const dropdownRef = useRef(null);

    const [dropDown, setDropDown] = useState(false)

    const toggleDropDown = () => {
        setDropDown(!dropDown)
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropDown(false);
        }
    };

    useEffect(() => {
        if (dropDown) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropDown]);

    return (
        <NavbarContainer darkMode={darkMode}>
            {sideBar &&
                <SideBar />
            }
            <MobileNav>
                <MobileNavLeft>
                    <MenuIcon darkMode={darkMode} onClick={() => toggleSideBar(true)}>
                        <HiMenuAlt4 />
                    </MenuIcon>

                    <MobileSearch>
                        <input type="text" name="" placeholder='Search' id="" />
                        <CiSearch />
                    </MobileSearch>
                </MobileNavLeft>

                <NavUser  ref={dropdownRef} onClick={toggleDropDown}>
                    <NavImage src={userImg} />
                    <FaCaretDown style={{ color: colors.grey1 }} />
                </NavUser>

                {dropDown &&
                    <UserDropdown darkMode={darkMode}>
                        <div onClick={() => setDropDown(false)}>
                            <CiUser style={dropDownIconStyles} />
                            View Profile
                        </div>
                        <div onClick={() => setDropDown(false)}>
                            <CiSettings style={dropDownIconStyles} />
                            Settings
                        </div>
                        <div onClick={() => setDropDown(false)}>
                            <CiLogout style={dropDownIconStyles} />
                            Logout
                        </div>
                        <hr />
                        <div className='switch' onClick={(e) => e.stopPropagation()}>
                            <Switch state={darkMode} setState={toggleDarkMode} />
                            Dark Mode
                        </div>
                    </UserDropdown>
                }
            </MobileNav>

            <hr />
        </NavbarContainer>
    )
}

export default Navbar
