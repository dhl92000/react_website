import { useState } from "react";
import classNames from "classnames";
import MobileMenuLinks from "./MobileMenuLinks";

// CSS mobile: desktop menu hidden & desktop: @media display desktop menu, hide mobile-menu

// when mobileMenuOpen, open component that holds all the links
// burger lines become x 
// button's className changes

const MobileMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // classNames package for dynamic classNames
  // 'mobile-menu-button' is short form for {'mobile-menu-button': true}
  // if 'open':false it's not added => just 'mobile-menu-button'
  let active = classNames('mobile-menu-button', {
    open: mobileMenuOpen
  })

  return (
    <span className="mobile-menu">
      <div>
        <button
        aria-label="Toggle mobile menu button"
        // 'mobile-menu-button' or 'mobile-menu-button-open'
        // onClick sets state to opposite
        className={active}
        onClick={() => {
            setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen)
        }}
        >
          <div className="burger1"/>
          <div className="burger2" />
          <div className="burger3" />
        </button>
      </div>

      <MobileMenuLinks open={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
    </span>
  );
};

export default MobileMenu;
