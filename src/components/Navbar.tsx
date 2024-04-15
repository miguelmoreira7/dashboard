import React, {MouseEventHandler, useEffect, useLayoutEffect} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import hugo from '../data/hugo.jpg';
import { Cart, Chat, Notification, UserProfile } from './';
import { useStateContext } from '../contexts/ContextProvider';
import { FiShoppingCart } from 'react-icons/fi';

type NavButtonProps = {
  title: string,
  customFunc: MouseEventHandler<HTMLButtonElement>,
  icon: React.ReactNode,
  color: string,
  dotColor: string,
}

const NavButton = ({title, customFunc, icon, color, dotColor}: NavButtonProps) => (
  <TooltipComponent content={title}>
    <button type='button' onClick={customFunc} style={{ color }} 
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{ background: dotColor}} 
      className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

  useLayoutEffect(() => {
    const handleResize = () => {setScreenSize(window.innerWidth)};

    window.addEventListener('resize', handleResize);

    setScreenSize(window.innerHeight);

    screenSize < 800 ? setActiveMenu(false) : setActiveMenu(true);

    return () => {window.removeEventListener('resize', handleResize);}

  }, [screenSize])
  
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" 
        customFunc={() => setActiveMenu((prevActiveMenu) =>
        !prevActiveMenu)} 
        color={currentColor} 
        icon={<AiOutlineMenu/>} 
        dotColor=""/>
      <div className='flex'>
        <NavButton title="Cart" 
          customFunc={() => handleClick('cart')} 
          color={currentColor} 
          icon={<FiShoppingCart/>} 
          dotColor=""/>
        <NavButton title="Chat" 
          customFunc={() => handleClick('chat')} 
          color={currentColor} 
          icon={<BsChatLeft/>} 
          dotColor="#03C9D7"/>
        <NavButton title="Notifications" 
          customFunc={() => handleClick('notification')} 
          color={currentColor} 
          icon={<RiNotification3Line/>} 
          dotColor=""/>
          <TooltipComponent content="Profile" position='BottomCenter'>
            <div className="flex items-center gap-2 cursor-pointer p-1
              hover:bg-light-gray rounded-lg" 
              onClick={() => handleClick('userProfile')}>
                <img src={hugo} className='rounded-full w-10 h-10'/>
                <p>
                  <span className="text-gray-400 text-14">Hi, </span> {' '}
                  <span className="text-gray-400 font-bold ml-1 text-14">Hugo</span>
                </p>
                <MdKeyboardArrowDown className="text-gray-400 text-14"/>
              </div>
          </TooltipComponent>
          {isClicked.cart && <Cart/>}
          {isClicked.chat && <Chat/>}
          {isClicked.notification && <Notification/>}
          {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar