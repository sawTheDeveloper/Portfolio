import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://Facebook.com/Sawchosiz" target="_blank"><BsFacebook /></a>
        <a href="https://Github.com/sawTheDeveloper" target="_blank"><BsGithub /></a>
        <a href="https://Instagram.com/Sawchosiz" target="_blank"><BsInstagram /></a>
    </div>

  )
}

export default HeaderSocials