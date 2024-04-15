import './App.css'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Link } from "react-router-dom"
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
                <TooltipComponent content="Settings">
                    <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                    style = {{background: currentColor, borderRadius: '50%'}}
                    onClick={() => setThemeSettings(true)}>
                        <FiSettings/>
                    </button>
                </TooltipComponent>
            </div>
            {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                    <Sidebar/>
                </div>
            ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                    <Sidebar/>
                </div>
            )}
            <div className={
                `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 
                    'md:ml-72' : 'flex-2'}`
            }>
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                    <Navbar/>
                </div>
                <div>
                {themeSettings && <ThemeSettings/>}
                <Outlet/>
                    <Link to="/ecommerce"></Link>
                    <Link to="/orders"></Link>
                    <Link to="/employees"></Link>
                    <Link to="/customers"></Link>
                    <Link to="/kanban"></Link>
                    <Link to="/editor"></Link>
                    <Link to="/calendar"></Link>
                    <Link to="/colorPicker"></Link>
                    <Link to="/line"></Link>
                    <Link to="/area"></Link>
                    <Link to="/bar"></Link>
                    <Link to="/pie"></Link>
                    <Link to="/financial"></Link>
                    <Link to="/colorMapping"></Link>
                    <Link to="/pyramid"></Link>
                    <Link to="/stacked"></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App