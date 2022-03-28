import { useState } from "react"
import imgFace from "../../assets/img/facebookIcon.png"
import iconInstagram from "../../assets/img/instagramIcon.png"
import iconWhatsapp from "../../assets/img/whatsappIcon.png"
import ItemCount from "../ItemCount/ItemCount"



export default function ItemDetail({ itemsDetails }) {

    const [imgChange, setImgChange] = useState()
    return (
        <div className="divContentDetailsProduct" >
            <div className="divDetailsProduct">
                <div className="ctnMiniImgsProductDiv">
                    {itemsDetails.imgOthers && itemsDetails.imgOthers.map((im, i) =>
                        <div className="miniImgsProductDivs" key={i} onMouseEnter={() => setImgChange(i)}>
                            <img src={im} alt={`tienda celucommerce`} />
                        </div>)}
                </div>
                <div className="divTitImgDetail">
                    <div className="divImgprDet">
                        <img className="imgDetail" src={imgChange ? itemsDetails.imgOthers[imgChange] : itemsDetails.img} alt="celulares celucommerce" />
                    </div>
                    <div className="infoCaractsDivCtn">
                        <div className="ctnCaractsDiv">
                            <h3 className="titCaractsDesth3">Características destacadas</h3>
                            <ul >
                                {itemsDetails.chars && itemsDetails.chars.map((lis, i) => <li key={i}>{lis}</li>)}
                            </ul>
                        </div>
                        <div className="ctnResumproductDiv">
                            <h3>Resumen del producto</h3>
                            <p >{itemsDetails.description}</p>
                        </div>
                    </div>
                </div>
                <div className="divInfoDetail">
                    <h4 className="titProductDetail">{itemsDetails.title}</h4>
                    <i>Código: {itemsDetails.id}</i>
                    <span className="spanPriceBefWhitoutDesc"> $ {new Intl.NumberFormat("es-CO").format(itemsDetails.price * 1.35)} Antes</span>
                    <p className="spanValor">${new Intl.NumberFormat("es-CO").format(itemsDetails.price)} Hoy</p>
                    <p>Disponibles: {itemsDetails.onStock}</p>
                    <ItemCount item={itemsDetails} stock={itemsDetails.onStock} initial={1} />
                    <div>
                        <p className="pSiguenos">Siguenos: </p>
                        <img className="iconsRedesDetaiil" src={imgFace} alt="facebook el campo a sumerce" />
                        <img className="iconsRedesDetaiil" src={iconInstagram} alt="instagram el campo a sumerce" />
                        <img className="iconsRedesDetaiil" src={iconWhatsapp} alt="whatsapp el campo a sumerce" />
                    </div>
                </div>
            </div>
        </div>
    )
}