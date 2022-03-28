import { NavLink } from "react-router-dom";

export default function Ulista({ itemsCategory }) {

    return (
        <>
            <ul className="ulNav">
                {itemsCategory && itemsCategory.map((lis) =>
                    <li key={lis}>
                        <NavLink className={({ isActive }) => isActive ? "ulNavLisActive" : "ulNavLis"} to={`/categ/${lis.toLowerCase()}`}>{lis.toUpperCase()}
                        </NavLink>
                    </li>
                )}
            </ul>
        </>
    )
}