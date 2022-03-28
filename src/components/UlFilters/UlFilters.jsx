import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { scrollArriba } from '../../Helpers/Helpers'

const UlFilters = ({ lis }) => {
    scrollArriba()
    const { category } = useParams()
    return (
        <>
            {category !== "todo" &&
                <div className='divContenMarcaslFIlt'>

                    <div className='divUlFilt'>
                        <ul>
                            {lis && lis.map((l, i) =>
                                <NavLink
                                    key={i}
                                    to={`/categ/${category}/${l}`}
                                    className={({ isActive }) => isActive ? "ulNavLisFiltAct" : "ulNavLisFilt"}
                                >{l}</NavLink>)}
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}

export default UlFilters