import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header>
      <button className="login-btn">ورود</button>
      <Image src='/images/—Pngtree—online shopping sale vector _3548364.png' width={80} height={80} alt='onlineshope-logo'/>
    </header>
  )
}
