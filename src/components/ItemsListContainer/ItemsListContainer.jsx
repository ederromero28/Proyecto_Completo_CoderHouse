import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import WhileCharg from "../whileCharging/WhileCharging";
import useFirestore from "../../hooks/useFirestore";
import { useEffect } from "react";
import UlFilters from "../UlFilters/UlFilters";
import { filtCategBrand, enDesorden } from "../../Helpers/Helpers";

export default function ItemsListContainer({ greeting }) {

    const { info, charge, getData } = useFirestore()
    const { idBrand, category } = useParams()

    useEffect(() => {
        getData();
    }, [getData]);
    return (
        <>
            {charge ? <div className="itemListContaimer">
                <div className="ctnTitGreetAndUlFilt">
                    <div className="divTicContentListCtn">
                        <h1 className="titContentItemListCtn">{(category === undefined || category === "todo" ? greeting = "Lo mejor de la tecnologia en este lugar" : greeting = category.toUpperCase())}</h1>
                    </div>
                    <UlFilters lis={filtCategBrand({ categ: category, infoData: info })} />
                </div>
                <div className="divCtnItemsList">
                    {category === undefined || category === "todo" ?
                        <ItemList product={enDesorden(info)} />
                        :
                        <ItemList product={(category && idBrand) ? (info.filter((f) => f.brand === idBrand)) : (info.filter((f) => f.category === category))} />
                    }
                </div>
            </div> :
                <WhileCharg position={"fixed"} />
            }
        </>
    )
}