import { NavLink } from "react-router-dom";
import { ABOUT, COUNTER, LIST } from "src/utils/constants/Nav/navLinksNames";
import { ROUTES } from "src/utils/constants/routes";
import { TNavLinkProps } from "src/utils/types/Nav";
import style from "./Nav.module.css";

const Nav = () => {
    const { main, about, list } = ROUTES;
    const styleLink = ({ isActive }: TNavLinkProps) => {
        return isActive ? style.activeLink : style.link
    }
    return (
        <nav className={style.nav}>
            <NavLink data-testid="main-link" className={styleLink} to={main}>{COUNTER}</NavLink>
            <NavLink data-testid="about-link" className={styleLink} to={about}>{ABOUT}</NavLink>
            <NavLink data-testid="list-link" className={styleLink} to={list}>{LIST}</NavLink>
        </nav>
    )
};

export default Nav;
