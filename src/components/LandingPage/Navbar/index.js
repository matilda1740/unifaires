import NextImage from "common/components/NextImage";
import React, { useState, useContext } from "react";
import {
  UncontrolledButtonDropdown as UIBtn,
  DropdownMenu as UIMenu,
  DropdownToggle as UIDrop,
} from "reactstrap";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
  NavBtnLinkSecondary,
  SearchBar,
} from "./NavbarElements";
import Button from "common/components/Button";
import styled from "styled-components";
import { DrawerContext } from "common/contexts/DrawerContext";
import HamburgMenu from "common/components/HamburgMenu";
import Drawer from "common/components/Drawer";
import { androidClose } from "react-icons-kit/ionicons/androidClose";
import ScrollSpyMenu from "common/components/ScrollSpyMenu";
import { Icon } from "react-icons-kit";
import SearchPanel from "../SearchPanel";
import { openModal, closeModal } from "@redq/reuse-modal";
import { menuData } from "common/data/Interior";
import lang from "../../../public/images/home-two/lang.svg";
import globe from "../../../public/images/home-two/glob.svg";
import ServiceDropDown from "../DropDownMenu";
import useToggle from "common/hooks/useToggle";
import Link from "next/link";

const DropdownMenu = styled(UIMenu)`
  margin-top: 45px;
`;
const DropdownToggle = styled(UIDrop)`
  background: transparent !important;
  border: none !important;
  box-shadow: transparent !important;
  border-color: transparent !important;
  color: #fff;
  font-weight: 600;
  -webkit-transition: 0.5s;
  &:hover {
    background: transparent !important;
    border: none !important;
    box-shadow: none;
    border-color: transparent !important;
  }
  &:focus {
    box-shadow: none;
  }
`;
const UncontrolledButtonDropdown = styled(UIBtn)`
  background: transparent !important;
  border: none !important;
  color: #fff;
  font-weight: 600;
  &:hover {
    background: transparent !important;
    border: none !important;
    box-shadow: transparent !important;
    border-color: transparent !important;
  }
`;
const Menu = styled(ScrollSpyMenu)`
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 16px;

  li {
    padding: 10px;
  }
  a {
    color: #5832da;
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
  }
  a:hover {
    cursor: pointer;
    border-bottom: black 1px solid;
  }
`;
const Hamburg = styled(HamburgMenu)`
  display: none;
  color: #fff;

  @media screen and (max-width: 1000px) {
    margin-top: 10px;
    order: 2;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
  span {
    background-color: white;
  }
`;

const MenuDrawer = styled(Drawer)`
  button {
    border-radius: 999px;
    background-color: #5832da;
    border: 0;
    font-size: 10px;
    padding: 10px;
    margin: 10px;
    color: white;
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);

    &:hover {
      background-color: white;
      color: #5832da;
      border: 1px solid #5832da;
    }
  }
`;

const SearchButton = styled(Button)`
  @media screen and (min-width: 1000px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  order: 1;
  background: rgba(255, 255, 255, 0.2);

  border-radius: 9999px;
  border: none;
  color: white;
  padding: 10px; ;
`;

const CloseModalButtonAlt = () => (
  <Button
    className="modalCloseBtn alt"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const { state, dispatch } = useContext(DrawerContext);

  //sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", showStickyMenu);
  }
  const handleSearchModal = () => {
    openModal({
      config: {
        className: "search-modal",
        disableDragging: true,
        width: "90%",
        height: "100%",
        animationFrom: { transform: "translateY(100px)" },
        animationTo: { transform: "translateY(0)" },
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: SearchPanel,
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: true,
    });
  };

  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };
  return (
    <>
      <Nav>
        <Link href="/">
          <NavLink>
            <p>Unifaires</p>{" "}
          </NavLink>
        </Link>

        <SearchButton
          variant="textButton"
          onClick={handleSearchModal}
          icon={<i className="flaticon-magnifying-glass" />}
          aria-label="search button"
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          <MenuDrawer
            width="250px"
            placement="right"
            drawerHandler={<Hamburg />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
          >
            <button
              type="button"
              className={state.isOpen ? "active" : ""}
              onClick={toggleHandler}
              aria-label="drawer toggle button"
            >
              <Icon icon={androidClose} />
            </button>
            <Menu menuItems={menuData} drawerClose={true} offset={-100} />
          </MenuDrawer>
        </div>
        <NavMenu>
          <NavLink>
            <UncontrolledButtonDropdown>
              <DropdownToggle>Services</DropdownToggle>
              <DropdownMenu>
                <ServiceDropDown />
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </NavLink>
          {/* // SEARCH component FIXME: Change this to pure Styled components. */}
          <div className="nav-widget-form nav-widget-form-bg ">
            <form className="search-form">
              <input
                type="search"
                className="form-control"
                placeholder="Search for anything "
                // onClick={handleSearchModal}
              />
              <button type="button">
                <i className="ri-search-line"></i>
              </button>
            </form>
          </div>
          <NavLink>
            <NextImage
              src={lang}
              width={25}
              height={25}
              alt=""
              className="svg_logo"
            />
          </NavLink>

          <NavLink>Unifairs Bussiness</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Pricing</NavLink>
          <Link href="/contact">
            <NavLink>Contact</NavLink>
          </Link>
        </NavMenu>

        <NavBtn>
          <Link href="/login">
            <NavBtnLinkSecondary>Log In</NavBtnLinkSecondary>
          </Link>
          <Link href="/signup">
            <NavBtnLink>Sign Up</NavBtnLink>
          </Link>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
