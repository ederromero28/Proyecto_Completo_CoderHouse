import React from 'react'

const SetDatesPagoChekout = ({ gree, funcSetPaymentInf, statePrinc, stateSec, stateTer, boolPayCredit, boolPayEfectivo, boolPayPSE }) => {

    // const metpagos = [
    //     "Tarjeta de credito",
    //     "PSE",
    //     "Efectivo"
    // ]
    return (
        <>
            {<li onClick={() => funcSetPaymentInf && funcSetPaymentInf({ boolPayCredit: boolPayCredit, boolPayEfectivo: boolPayEfectivo, boolPayPSE: boolPayPSE })} style={{ backgroundColor: statePrinc && "#28a538", color: statePrinc && "#fff", display: (stateSec || stateTer) && "none" }} >{gree}</li>}
        </>

    )
}


export default SetDatesPagoChekout