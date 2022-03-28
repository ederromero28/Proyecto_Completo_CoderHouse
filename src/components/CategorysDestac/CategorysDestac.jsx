import React from 'react'
import { Link } from 'react-router-dom'
import { datImgsHomeIcon } from "../../Helpers/Helpers"

const CategorysDestac = ({ greet }) => {

    return (
        <section className='sectionCategIcons'>
            <h3>{greet}</h3>
            <div className='divImgsIconHomeCateg'>
                {datImgsHomeIcon.map((dv, i) =>
                    <div className='ctnDivImgIconHomeCateg' key={i}>
                        {(dv.categor === "celulares") || (dv.categor === "laptops") || (dv.categor === "televisores") ?
                            <Link to={`/categ/${dv.categor}`} >
                                <div className='divImgIconHomeCateg'>
                                    <img src={dv.icon} alt={dv.categor} />
                                    <h4>{dv.categor}</h4>
                                </div>
                            </Link>
                            :
                            <div className='divImgIconHomeCateg' >
                                <img src={dv.icon} alt={dv.categor} />
                                <h4>{dv.categor}</h4>
                                <h5>(Próximamente)</h5>
                            </div>
                        }
                    </div>
                )}
            </div>
        </section>
    )
}

export default CategorysDestac