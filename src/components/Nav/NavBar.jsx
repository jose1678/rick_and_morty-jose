
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBAr(props) {
   return (
      <div className={style.container}>
         <NavLink to="/about">
            <button>About</button>
         </NavLink>
         <NavLink to="/home">
            <button>Home</button>
         </NavLink>
         <SearchBar onSearch={props.onSearch}/> 
      </div>
   );
}
