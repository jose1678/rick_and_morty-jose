
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";

export default function NavBAr(props) {
   return (
      <div className={style.container}>
         <SearchBar onSearch={props.onSearch}/> 
      </div>
   );
}
