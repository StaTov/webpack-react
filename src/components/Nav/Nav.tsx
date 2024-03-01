import { NavLink } from "react-router-dom";
import { SECOND, FIRST } from "src/utils/constants/Nav/navLinksNames";
import { ROUTES } from "src/utils/constants/routes";
import { TNavLinkProps } from "src/utils/types/Nav";
import style from "./Nav.module.css";

const Nav = () => {
    const { first, second } = ROUTES;
    const styleLink = ({ isActive }: TNavLinkProps) => {
        return isActive ? style.activeLink : style.link;
    };
    return (
        <nav className={style.nav}>
            <NavLink className={styleLink} to={first}>{FIRST}</NavLink>
            <NavLink className={styleLink} to={second}>{SECOND}</NavLink>
        </nav>
    );
};

export default Nav;
