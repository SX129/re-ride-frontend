import Link from 'next/link'
import React from 'react'
import { LiaLinkedin, LiaGithub,  } from "react-icons/lia";
import { LuMail } from "react-icons/lu";


const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-content">
        <Link
          href="mailto:nguyenhenry682@gmail.com"
          className="flex items-center gap-2 link-style"
        >
          <LuMail size={25}/>
          nguyenhenry682@gmail.com
        </Link>
        <Link
          href="https://www.linkedin.com/in/henry-nguyen682/"
          className="flex items-center gap-1 link-style"
        >
          <LiaLinkedin size={30}/>
          LinkedIn
        </Link>
        <Link
          href="https://github.com/henry-nguyen682"
          className="flex items-center gap-1 link-style"
        >
          <LiaGithub size={30}/>
          GitHub
        </Link>
      </div>
      <div className="footer-content">
        <Link
          href="https://www.linkedin.com/in/henry-nguyen682/"
          className="link-style"
        >
          Privacy Policy
        </Link>
        <Link
          href="https://www.linkedin.com/in/henry-nguyen682/"
          className="link-style"
        >
          Terms & Conditions
        </Link>
        <p>© 2025</p>
      </div>
    </div>
  )
}

export default Footer