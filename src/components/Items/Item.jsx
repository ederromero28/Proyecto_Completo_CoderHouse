import { Link } from "react-router-dom";

export default function Item({ items }) {


    return (
        <>
            <div className={`${items.brand} ctnGeneralProducts`} >
                <div className="imgProductDiv">
                    <Link to={`/${items.category}/item/${items.id}`}><img className="imgProduct" src={items.img} alt="productos el campo a sumerce" /></Link>
                </div>
                <div className="titAndEspecificProductDivGeneral">
                    <div className="titProductDiv">
                        <h2 className="titProduct" >{items.title.split("-").join(" ")}</h2>
                    </div>
                    <div className="especificacionesDiv">
                        <h3 className="especificacionesTit">Especificaciones</h3>
                        <div className="especificItemDivGeneral">
                            {items.specifications.hardDisk && <div className="especificItemDiv">
                                <div className="especificiItemDivIntern1"><p>Memoria interna</p></div>
                                <div className="especificiItemDivIntern2"><p>{items.specifications.hardDisk} GB</p></div>
                            </div>}
                            {items.specifications.ram && <div className="especificItemDiv" >
                                <div className="especificiItemDivIntern1"><p>Memoria RAM</p></div>
                                <div className="especificiItemDivIntern2"><p>{items.specifications.ram} GB</p></div>
                            </div>}
                            {items.specifications.typeCamFront && <div className="especificItemDiv">
                                <div className="especificiItemDivIntern1"><p>Tipo de camara frontal</p></div>
                                <div className="especificiItemDivIntern2"><p>{items.specifications.typeCamFront}</p></div>
                            </div>}
                            {items.specifications.typeCamPost && <div className="especificItemDiv">
                                <div className="especificiItemDivIntern1"><p>Tipo de camara posterior</p></div>
                                <div className="especificiItemDivIntern2"><p>{items.specifications.typeCamPost}</p></div>
                            </div>}
                            {/* para pcs ⇊ */}
                            {items.specifications.memRamPc && <div className="especificItemDiv">
                                <div className="especificiItemDivIntern1"><p>RAM</p></div>
                                <div className="especificiItemDivIntern2"><p>{items.specifications.memRamPc} Gb</p></div>
                            </div>}
                            {items.specifications.discHDD && <div className="especificItemDiv">
                                <div className="especificiItemDivIntern1"><p>Hard Disk</p></div>
                                <div className="especificiItemDivIntern2"><p>{items.specifications.discHDD} HDD</p></div>
                            </div>}
                            {items.specifications.discSSD && <div className="especificItemDiv">
                                <div className="especificiItemDivIntern1"><p>Disco en estado sólido</p></div>
                                <div className="especificiItemDivIntern2"><p>{items.specifications.discSSD} SSD</p></div>
                            </div>}
                            {items.specifications.procesador && <div className="especificItemDiv">
                                <div className="especificiItemDivIntern1"><p>Procesador</p></div>
                                <div className="especificiItemDivIntern2"><p>{items.specifications.procesador}</p></div>
                            </div>}
                            {items.specifications.tarjetaGrafica && <div className="especificItemDiv">
                                <div className="especificiItemDivIntern1"><p>Tarjeta Gráfica</p></div>
                                <div className="especificiItemDivIntern2"><p>{items.specifications.tarjetaGrafica}</p></div>
                            </div>}
                            {/* para Televisores ⇊ */}
                            {items.specifications.tamPantallaTv && <div className="especificItemDiv">
                                <div className="especificiItemDivIntern1"><p>Tamaño de pantalla</p></div>
                                <div className="especificiItemDivIntern2"><p>{items.specifications.tamPantallaTv} Pulgadas</p></div>
                            </div>}
                            {items.specifications.tipoPantallaTv && <div className="especificItemDiv">
                                <div className="especificiItemDivIntern1"><p>Tipo de pantalla</p></div>
                                <div className="especificiItemDivIntern2"><p>{items.specifications.tipoPantallaTv}</p></div>
                            </div>}
                            {items.specifications.resolucionPantallaTv && <div className="especificItemDiv">
                                <div className="especificiItemDivIntern1"><p>Resolución de pantalla</p></div>
                                <div className="especificiItemDivIntern2"><p>{items.specifications.resolucionPantallaTv}</p></div>
                            </div>}
                            {items.specifications.smartTv && <div className="especificItemDiv">
                                <div className="especificiItemDivIntern1"><p>¿ Smart ?</p></div>
                                <div className="especificiItemDivIntern2"><p>{items.specifications.smartTv} Es Smart Tv</p></div>
                            </div>}
                            {/* para todos */}
                            {items.specifications.warranty && <div className="especificItemDiv">
                                <div className="especificiItemDivIntern1"><p>Garantía fabricante</p></div>
                                <div className="especificiItemDivIntern2"><p>{items.specifications.warranty} Meses</p></div>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="BtnpriceBtndetBtnaddDiv" visibility="false">
                    <div className="pricesDiv">
                        <p className="priceBefWithoutDesc">Antes: <span className="spanPriceBefWhitoutDesc">${new Intl.NumberFormat("es-CO").format(items.price * 1.35)}</span></p>
                        <h3 className="priceActualWithDesc">Hoy: <span className="spanPriceActualWithDesc">${new Intl.NumberFormat("es-CO").format(items.price)}</span></h3>
                    </div>
                    <Link to={`/${items.category}/item/${items.id}`} className="linkBtnMoreDetails">Ver más detalles</Link>
                </div>
            </div>
        </>
    )
}