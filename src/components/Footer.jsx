import React from 'react'
import logo_white from '../assets/images/logo-white.svg'
import Button from './Button'
import icon_youtube from '../assets/images/icon-youtube.svg'
import icon_facebook from '../assets/images/icon-facebook.svg'
import icon_twitter from '../assets/images/icon-twitter.svg'
import icon_pinterest from '../assets/images/icon-pinterest.svg'
import icon_instagram from '../assets/images/icon-instagram.svg'

export default function Footer() {
  return (
    <footer className='bg-fm-dark-blue text-center p-8'>
      <div className='lg:max-w-[1340px] lg:m-auto lg:flex lg:justify-between lg:items-center '>
         <div className='lg:flex lg:gap-22'>
       <div className='lg:flex lg:flex-col'>
           <img className='m-auto' src={logo_white} alt="" />
        <ul className='flex w-full justify-center gap-4 p-8 lg:pb-0'>
            <li><img className='hover:fill-fm-lime-green' src={icon_facebook} alt="" /></li>
            <li><img src={icon_youtube} alt="" /></li>
            <li><img src={icon_twitter} alt="" /></li>
            <li><img src={icon_pinterest} alt="" /></li>
            <li><img src={icon_instagram} alt="" /></li>
        </ul>
       </div>
         <ul className='text-neutral-50 text-sm flex flex-col gap-3 pb-8 lg:grid lg:grid-cols-2 lg:pb-0'>
            <li><a className='hover:text-fm-lime-green' href="">About Us</a></li>
            <li><a className='hover:text-fm-lime-green' href="">Contact</a></li>
            <li><a className='hover:text-fm-lime-green' href="">Blog</a></li>
            <li><a className='hover:text-fm-lime-green' href="">Carrers</a></li>
            <li><a className='hover:text-fm-lime-green' href="">Support</a></li>
            <li><a className='hover:text-fm-lime-green' href="">Privacy Policy</a></li>
        </ul>
      </div>
       
      <div className='lg:flex lg:flex-col lg:gap-4 lg:items-center'>
         <Button></Button>
       <p className='pt-8 text-fm-grayis-blue lg:pt-0'>© Easybank. All Rights Reserved</p>
      </div>
      </div>
     
    </footer>
  )
}
