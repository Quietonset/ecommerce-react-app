import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    // menu state 
    const [ isClicked, setIsClicked ] = useState(false);

    const handleMenuClose = () => {
        setIsClicked(false);
    };

    return (
        <MenuContext.Provider value={{ isClicked, setIsClicked, handleMenuClose }}>
            { children }
        </MenuContext.Provider>
    );
};