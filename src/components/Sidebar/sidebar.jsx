import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav>
                <ul className="sidebar__menu">
                    <li><NavLink to="/profile/">Profile</NavLink></li>
                    <li><NavLink to="/dialogs/">Messages</NavLink></li>
                    <li><NavLink to="/news/">News</NavLink></li>
                    <li><NavLink to="/music/">Music</NavLink></li>
                    <li><NavLink to="/settings/">Settings</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;