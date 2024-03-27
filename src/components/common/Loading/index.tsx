import React, { ReactElement } from "react"
import "./styles.scss"

const Preloader = (): ReactElement => {
  return (
    <div className="preloader">
      <div className="sk-chase">
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
      </div>
    </div>
  )
}

export default Preloader
