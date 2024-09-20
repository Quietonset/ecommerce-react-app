import React, { createContext, useState } from "react";
import { SidebarContext } from "./SidebarContext";

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
    const [ userInput, setUserInput ] = useState('');


    return (
        <SidebarContext.Provider value={{ userInput, setUserInput }}>
            { children }
        </SidebarContext.Provider>
    );
};