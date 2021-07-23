import React, { MouseEvent } from "react"

interface HeaderProps {
  heading: string
  handleLanguageToggle: (event: MouseEvent<HTMLElement>) => void
}

const Header = ({ heading, handleLanguageToggle }: HeaderProps) => {
  return (
    <header>
      <h1>{heading}</h1>
      <div className="row center">
        <div className="button" id="en" onClick={handleLanguageToggle}>
          En
        </div>
        <div className="button" id="fi" onClick={handleLanguageToggle}>
          Fi
        </div>
      </div>
    </header>
  )
}

export default Header
