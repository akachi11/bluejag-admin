import React, {createContext, useState} from "react";

const UIContext = createContext();

const UIContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)
    const [sideBar, setSideBar] = useState(false)
    const [page, setPage] = useState('home')
    const [orderModal, setOrderModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const selectPage = (page) => {
        setPage(page)
    }

    const toggleLoading = (state) => {
        state ? setLoading(state) : setLoading(!loading)
    }

    const toggleSideBar = (state) => {
        setSideBar(state)
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const toggleOrderModal = () => {
        setOrderModal(!orderModal)
    }

    const value = {
        darkMode,
        sideBar,
        toggleDarkMode,
        toggleSideBar,
        page,
        selectPage,
        orderModal,
        toggleOrderModal,
        loading,
        toggleLoading
    }
    
    return (
        <UIContext.Provider value={value}>
            {children}
        </UIContext.Provider>
    )
}

export { UIContext, UIContextProvider }