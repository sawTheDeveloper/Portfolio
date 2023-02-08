import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://Facebook.com/Sawchosiz" rel="noreferrer" target="_blank"><BsFacebook /></a>
        <a href="https://Instagram.com/Sawchosiz" rel="noreferrer" target="_blank"><BsInstagram /></a>
        <a href="https://Github.com/sawTheDeveloper" rel="noreferrer" target="_blank"><BsGithub /></a>
    </div>

  )
}

export default HeaderSocials