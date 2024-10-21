import React from 'react'
import '../scss/Header.scss'

function Header() {
  return (
    <>
    <header className="header">
        <div className="one">
        <img src="https://media.licdn.com/dms/image/v2/D4E0BAQFtoH7AFayJWw/company-logo_200_200/company-logo_200_200/0/1703627777248/techtonic_tribe_logo?e=1735776000&v=beta&t=k4OrPdu23X5RfbMtxD92Wt_-75jKkqtwccqFhyn4Tbo" alt="" />
        </div>
        <div className="two">
        <a href="#">About Us</a>
        <a href="#">Programs</a>
        <a href="#">Contact US</a>
        <a href="#">Register</a>
        </div>
    </header>
    </>
  )
}

export default Header