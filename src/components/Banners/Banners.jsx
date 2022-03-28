
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFirestore from '../../hooks/useFirestore'
import { formatAPesCol } from '../../Helpers/Helpers'

const Banners = ({ lengt, greet }) => {

    const { infoForBanners, getDataForBanners } = useFirestore()

    useEffect(() => {
        getDataForBanners({ length: lengt })
    }, [getDataForBanners, lengt])

    return (
        <section className='sectionBannersOferts'>
            <h3>{greet}</h3>
            <div className='divCtnBanner'>
                {
                    infoForBanners.map((ban, i) =>
                        <div className='intDivBanner' key={i}>
                            <Link to={`/${ban.category}/item/${ban.id}`}>
                                <div className='divImgBanner' >
                                    <img src={ban.img} alt="" />
                                    <span className="spanPriceBefWhitoutDesc">{formatAPesCol(Math.trunc(ban.price * 1.35))} Antes</span>
                                    <p>{formatAPesCol(ban.price)}Hoy</p>
                                    <h5>{ban.title.split("-").join(" ").substring(0, 25)}</h5>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Banners