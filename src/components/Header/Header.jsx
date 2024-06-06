import Location from "../../assets/images/icons/location.svg"
import Phone from "../../assets/images/icons/phone-call.svg"
import Logo from "../../assets/images/icons/logo.svg"
import Catalog from "../../assets/images/icons/catalog.svg"
import CatalogMain from "../../assets/images/icons/catalog-main.svg"
import Search from "../../assets/images/icons/search.svg"
import User from "../../assets/images/icons/user.svg"
import Store from "../../assets/images/icons/store.svg"

import "./Header.css"
import React, { useState } from 'react'

const Header = () => {

    const [menu, setMenu] = useState(false);

  return (
    <header className='site-header pt-4 pb-1'>
        <div className='container'>
            <div className='site-navbar'>
                <div className='navbar-top flex justify-between items-center w-100'>
                    <div className="navbar-top--location location flex flex-nowrap justify-start gap-2">
                        <img className="location-image" src={Location} alt="Location-marker" />
                        <span className="location-place text-base font-normal leading-5">Ваш город: Москва</span>
                    </div>
                    <ul className="navbar-top--list list flex justify-between items-center w-[700px]">
                        <li className="list-item"><a className="list-link text-base font-normal leading-5" href="#">Бонусы</a></li>
                        <li className="list-item"><a className="list-link text-base font-normal leading-5" href="#">Документация</a></li>
                        <li className="list-item"><a className="list-link text-base font-normal leading-5" href="#">О нас</a></li>
                        <li className="list-item ">
                            <a className="list-link phone flex items-center gap-2" href="#">
                                <img className="phone-image" src={Phone} alt="Phone" />
                                <span className="phone-link text-base font-normal leading-5" href="tel:+998997235430">+(99) 899 7723-54-30</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-bottom flex justify-between items-center w-100 gap-3 mt-4">
                    <div className="navbar-bottom--logo logo flex">
                        <a className="logo-link" href="#">
                            <img src={Logo} alt="Logo"/>
                        </a>
                    </div>
                    <div className="navbar-bottom--search search w-full flex relative">
                        <div className="dropdown relative inline-block">
                            <button className="dropbtn w-full flex cursor-pointer rounded text-base items-center">
                                <img className="search-image" src={CatalogMain} alt="Catalog" />
                                <span>Каталог</span>
                            </button>
                            <ul className="dropdown-list w-full absolute z-10 rounded">
                                <li className="dropdown-list-item"><a className="dropdown-list-link block no-underline text-base font-normal leading-5 rounded" href="#">Мужские</a></li>
                                <li className="dropdown-list-item"><a className="dropdown-list-link block no-underline text-base font-normal leading-5 rounded" href="#">Женские</a></li>
                                <li className="dropdown-list-item"><a className="dropdown-list-link block no-underline text-base font-normal leading-5 rounded" href="#">Универсал</a></li>
                            </ul>
                        </div>
                        <input className="search-input w-full text-base font-normal leading-5 rounded" type="text" placeholder="Найти парфюм.." />
                        <img className="search-image--search absolute" src={Search} alt="" />
                    </div>
                    <div className="navbar-bottom--user user flex items-center gap-4">
                        <div>
                            <img className="cursor-pointer" src={User} alt="User" />
                        </div>     
                        <div>
                            <img className="cursor-pointer" src={Store} alt="Store" />    
                        </div>               
                    </div>
                </div>
                {
                    menu ? 
                    <>
                        <div className="side-menu">
                            <div className="side-menu--close close">
                                <img className="close-image" src={Close} alt="Close" />
                            </div>
                            
                        </div>
                    </> : 
                    <>
                    
                    </>
                }
            </div>
        </div>
    </header>
  )
}

export default Header