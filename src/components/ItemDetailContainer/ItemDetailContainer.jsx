import ItemDetail from "../ItemDetail/ItemDetail"
import useFirestore from "../../hooks/useFirestore"
import WhileCharg from "../whileCharging/WhileCharging"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { scrollArriba } from "../../Helpers/Helpers"

export default function ItemDetailContainer() {
    scrollArriba()

    const { idBrand } = useParams()
    const { charge, infoDetails, getDataDetailIndividual } = useFirestore()
    useEffect(() => {
        getDataDetailIndividual({ id: idBrand });
    }, [getDataDetailIndividual, idBrand]);

    return (
        <>
            {charge ?
                <ItemDetail itemsDetails={infoDetails} />
                : <WhileCharg position={"relative"} />
            }
        </>
    )
}