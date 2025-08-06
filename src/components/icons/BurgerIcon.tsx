import React from "react"

interface MenuIconProps {
  className?: string
}

export const MenuIcon:React.FC<MenuIconProps> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 7L4 7" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 12L4 12" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 17L4 17" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}