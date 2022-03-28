import React from 'react'

const ButtonBack = ({ clasNam, greet, functi, boolEnvio, boolInfoclient, boolDatesPago, boolPayCredit, boolPayEfectivo, boolPayPSE }) => {
    return (
        <button className={clasNam} onClick={() => functi({ boolEnvio: boolEnvio, boolInfoclient: boolInfoclient, boolDatesPago: boolDatesPago, boolPayCredit: boolPayCredit, boolPayEfectivo: boolPayEfectivo, boolPayPSE: boolPayPSE })}>{greet}</button>
    )
}

export default ButtonBack