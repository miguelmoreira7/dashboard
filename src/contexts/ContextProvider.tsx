import React, { ChangeEventHandler, createContext, useContext, useState, useCallback } from 'react';

interface StateContextType {
    activeMenu: boolean,
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>,
    isClicked: initialStateType,
    setIsClicked: React.Dispatch<React.SetStateAction<initialStateType>>,
    handleClick: Function,
    screenSize: number,
    setScreenSize: React.Dispatch<React.SetStateAction<number>>,
    currentColor: string,
    setCurrentColor: React.Dispatch<React.SetStateAction<string>>,
    currentMode: string,
    setCurrentMode: React.Dispatch<React.SetStateAction<string>>,
    setColor: Function,
    setMode: ChangeEventHandler<HTMLInputElement>,
    themeSettings: boolean,
    setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>,
    initialState: initialStateType,
}

interface StateContextProps {
    children: React.ReactNode;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

type initialStateType = {
    chat: boolean;
    cart: boolean;
    userProfile: boolean;
    notification: boolean;
}

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider = ({children}: StateContextProps) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }, [])

    const setColor = useCallback((color: string) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }, [])

    const handleClick = useCallback((clicked: string) => {
        setIsClicked({...initialState, [clicked]: true})
    }, [])

    return (
        <StateContext.Provider 
            value={{activeMenu, setActiveMenu,
             isClicked, setIsClicked, handleClick, 
             screenSize, setScreenSize, 
             currentColor, setCurrentColor, setColor,
             currentMode, setCurrentMode, setMode,
             themeSettings, setThemeSettings,
             initialState
             }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ():StateContextType => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('useStateContext deve ser usado dentro de um StateContextProvider')
    }
    return context;
}