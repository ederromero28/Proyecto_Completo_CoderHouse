import React from 'react'

const LablInptsInfoPayment = ({ infoFor, mapLabelInputs, optionsBancos, checkForm, statBtn, handlChangInfClient, nextStepValid, nextStepsBools: { boolEnvio, boolInfoclient, boolDatesPago, boolPayCredit, boolPayEfectivo, boolPayPSE } }) => {


    return (
        <>
            {infoFor && mapLabelInputs.map((lb, i) =>
                <div className='divCtnLblInput' key={i}>
                    {lb.namee === "BancoDeOrigen" &&
                        <div className='divLblBancOrigen'>
                            <label htmlFor={lb.idFor}>Banco de origen: </label>
                            <select onChange={handlChangInfClient} name={lb.namee} id={lb.idFor} value={checkForm.buyer.BancoDeOrigen || ""}>
                                {optionsBancos && optionsBancos.map((op, i) => <option key={i}>{op}</option>)}
                            </select>
                        </div>
                    }
                    {lb.namee !== "BancoDeOrigen" && <label htmlFor={lb.idFor}>{lb.label}</label>}
                    {lb.namee !== "BancoDeOrigen" && <input
                        type="text"
                        maxLength={
                            lb.namee === "cvv" && "3"
                        }
                        id={lb.idFor}
                        value={
                            (lb.namee === "Nombre" ? checkForm.buyer.Nombre : "") ||
                            (lb.namee === "lastName" ? checkForm.buyer.lastName : "") ||
                            (lb.namee === "document" ? checkForm.buyer.document : "") ||
                            (lb.namee === "phone" ? checkForm.buyer.phone : "") ||
                            (lb.namee === "email" ? checkForm.buyer.email : "") ||
                            (lb.namee === "Ciudad" ? checkForm.buyer.Ciudad : "") ||
                            (lb.namee === "Zona" ? checkForm.buyer.Zona : "") ||
                            (lb.namee === "Direccion" ? checkForm.buyer.Direccion : "") ||
                            (lb.namee === "TelefonoContactoEnvio" ? checkForm.buyer.TelefonoContactoEnvio : "") ||
                            (lb.namee === "cardNumber" ? checkForm.buyer.cardNumber : "") ||
                            (lb.namee === "fullNameCard" ? checkForm.buyer.fullNameCard : "") ||
                            (lb.namee === "cvv" ? checkForm.buyer.cvv : "") ||
                            (lb.namee === "BancoDeOrigen" ? checkForm.buyer.BancoDeOrigen : "") ||
                            (lb.namee === "TitularCuenta" ? checkForm.buyer.TitularCuenta : "") ||
                            (lb.namee === "NumeroDeCuenta" ? checkForm.buyer.NumeroDeCuenta : "")
                        }
                        placeholder={lb.placeholder} required name={lb.namee} onChange={handlChangInfClient} />
                    }
                    {lb.namee === "Ciudad" && <button onClick={() => nextStepValid({ boolEnvio: false, boolInfoclient: true, boolDatesPago: false })} className="btnAtras">««</button>}
                </div>
            )}
            {infoFor && <button type={(boolPayCredit || boolPayPSE) ? "submit" : null} disabled={(!statBtn) || (boolPayCredit && !checkForm.buyer.cardNumber) || (checkForm.buyer.BancoDeOrigen === "Seleccionar") || (boolPayPSE && !checkForm.buyer.BancoDeOrigen)} onClick={() => nextStepValid({ boolEnvio: boolEnvio, boolInfoclient: boolInfoclient, boolDatesPago: boolDatesPago, boolPayCredit: boolPayCredit, boolPayEfectivo: boolPayEfectivo, boolPayPSE: boolPayPSE })} className="btnContinuarCheckout">{(boolPayCredit || boolPayPSE) ? "Pagar" : "Continuar"}</button>}
        </>
    )
}

export default LablInptsInfoPayment