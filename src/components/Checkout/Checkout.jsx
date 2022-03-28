import { React, useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Banners from '../Banners/Banners'
import CategorysDestac from '../CategorysDestac/CategorysDestac'
import WhileCharging from '../whileCharging/WhileCharging'
import { CarrrContext } from "../../Context/CartContext"
import useFirestore from '../../hooks/useFirestore'
import {
    formatAPesCol,
    scrollArriba,
    OptionsBanq,
    deleteOtherPaymentMethod,
    validaInpts,
    habilbtnContinuarInfoClient,
    habilbtnContinuarDatosEnvio,
    mapLabelInputInfoClient,
    mapLabelInputDatosEnvio,
    mapLabelInputPayTarjetaCredito,
    mapLabelInputPayPSE,
    habilSubmitRegex
} from '../../Helpers/Helpers'
import LablInptsInfoPayment from '../LablInptsInfoPayment/LablInptsInfoPayment'
import SetDatesPagoChekout from '../SetDatesPagoChekout/SetDatesPagoChekout'
import ButtonBack from '../LablInptsInfoPayment/ButtonBack/ButtonBack'


const Checkout = ({ prdctCartCheck, totalShop }) => {
    scrollArriba()
    const { cartItm } = useContext(CarrrContext)
    const { generOrder, idOrden, todoBien, datesPago, datosEnvio, infoClient, payCardCredit, payPSE, payEfectivo, charge, nextStepValid, setPaymentInf } = useFirestore()

    const [btnSubmit, setBtnSubmit] = useState(false)
    const [btnContinuarInfClient, setBtnContinuarInfClient] = useState(false)
    const [btnContinuarDatosEnvio, setBtnContinuarDatosEnvio] = useState(false)

    const [checkForm, setCheckForm] = useState({
        buyer: {
            metodoDePago: ""
        },
        items: prdctCartCheck,
        totalCompra: totalShop
    });
    const handlChangInfClient = (e) => {
        setCheckForm({
            ...checkForm,
            buyer: {
                ...checkForm.buyer,
                [e.target.name]: e.target.value,
            }
        });
    }
    const handSbmt = (evt) => {
        evt.preventDefault()
        generOrder({ dataClient: checkForm })
    }

    useEffect(() => {
        habilSubmitRegex(validaInpts, checkForm, setBtnSubmit)
        habilbtnContinuarInfoClient(validaInpts, checkForm, setBtnContinuarInfClient)
        habilbtnContinuarDatosEnvio(validaInpts, checkForm, setBtnContinuarDatosEnvio)
    }, [checkForm])

    deleteOtherPaymentMethod({ obj: checkForm, payCardCredit: payCardCredit, payPSE: payPSE, payEfectivo: payEfectivo })

    return (
        <>{cartItm.length > 0 ?
            !todoBien &&
            <div className='ctnDivCheckout'>
                <div className='divCheckout' >
                    <form onSubmit={handSbmt} >
                        <div className="intenrDivsCheckout divInfoClient">
                            <div className='divTitCheckout' >
                                <b>Monto de compra: ${formatAPesCol(totalShop)}</b>
                                <h5>CHECKOUT</h5>
                                <div className='divMethPago'>
                                    <div style={{ backgroundColor: infoClient && "#28a538" }}>
                                        <b className={infoClient ? "liCheckClientInfoAct" : "liCheck"}>Información Del Cliente</b>
                                    </div>
                                    <div style={{ backgroundColor: datosEnvio && "#28a538" }}>
                                        <b className={datosEnvio ? "liCheckDatEnvioAct" : "liCheck"} >Datos de envío</b>
                                    </div>
                                    <div style={{ backgroundColor: datesPago && "#28a538" }}>
                                        <b className={datesPago ? "liCheckDatPagoAct" : "liCheck"} >Pagar</b>
                                    </div>
                                </div>
                            </div>
                            <LablInptsInfoPayment infoFor={infoClient} mapLabelInputs={mapLabelInputInfoClient} checkForm={checkForm} statBtn={btnContinuarInfClient} handlChangInfClient={handlChangInfClient} nextStepValid={nextStepValid} nextStepsBools={{ boolEnvio: true, boolInfoclient: false, boolDatesPago: false, boolPayCredit: false, boolPayEfectivo: false, boolPayPSE: false }} />

                            <LablInptsInfoPayment infoFor={datosEnvio} mapLabelInputs={mapLabelInputDatosEnvio} checkForm={checkForm} statBtn={btnContinuarDatosEnvio} handlChangInfClient={handlChangInfClient} nextStepValid={nextStepValid} nextStepsBools={{ boolEnvio: false, boolInfoclient: false, boolDatesPago: true, boolPayCredit: false, boolPayEfectivo: false, boolPayPSE: false }} />

                            {datesPago && <div className='divCtnLblInput' >
                                <label >Metodo de pago: </label>
                                <ul className='ulMethPago'>
                                    <SetDatesPagoChekout gree={"Tarjeta de Credito"} funcSetPaymentInf={setPaymentInf} statePrinc={payCardCredit} stateSec={payEfectivo} stateTer={payPSE} boolPayCredit={true} boolPayEfectivo={false} boolPayPSE={false} />
                                    <SetDatesPagoChekout gree={"PSE"} funcSetPaymentInf={setPaymentInf} statePrinc={payPSE} stateSec={payEfectivo} stateTer={payCardCredit} boolPayCredit={false} boolPayEfectivo={false} boolPayPSE={true} />
                                    <SetDatesPagoChekout gree={"Efectivo"} funcSetPaymentInf={setPaymentInf} statePrinc={payEfectivo} stateSec={payCardCredit} stateTer={payPSE} boolPayCredit={false} boolPayEfectivo={true} boolPayPSE={false} />
                                </ul>
                                <ButtonBack clasNam={"btnAtras"} greet={"««"} functi={nextStepValid} boolEnvio={true} boolInfoclient={false} boolDatesPago={false} boolPayCredit={false} boolPayEfectivo={false} boolPayPSE={false} />
                            </div>
                            }
                            <LablInptsInfoPayment infoFor={payCardCredit} mapLabelInputs={mapLabelInputPayTarjetaCredito} checkForm={checkForm} statBtn={btnSubmit} handlChangInfClient={handlChangInfClient} nextStepValid={nextStepValid} nextStepsBools={{ boolEnvio: false, boolInfoclient: false, boolDatesPago: true, boolPayCredit: true, boolPayEfectivo: false, boolPayPSE: false }} />

                            <LablInptsInfoPayment infoFor={payPSE} optionsBancos={OptionsBanq} mapLabelInputs={mapLabelInputPayPSE} checkForm={checkForm} statBtn={btnSubmit} handlChangInfClient={handlChangInfClient} nextStepValid={nextStepValid} nextStepsBools={{ boolEnvio: false, boolInfoclient: false, boolDatesPago: true, boolPayCredit: false, boolPayEfectivo: false, boolPayPSE: true }} />

                            {payEfectivo && <div className='divCtnLblInput' >
                                <h3>Uno de nuestros acesores se comunicara contigo al numero telefonico brindado, verifica que este correstamente escrito para mayor efectividad al contactarte.</h3>
                                <p>presiona en "aceptar" para confirmar </p>
                                <button type="sumbit" className='btnContinuarCheckout'>Aceptar</button>
                            </div>
                            }
                        </div>
                    </form>
                </div >
            </div>
            : <div className='carEmptyCheckout'>
                <div className='divCarCheckEmpty'>
                    <h3>Tu carrito se encuentra vacio</h3>
                    <Link to={"/categ/todo"} className="linkBtn"> Quiero ir a comprar</Link>
                </div>
                <CategorysDestac greet={"categorias"} />
                <Banners lengt={8} greet={"Mas demandados"} />
            </div>
        }
            {
                todoBien &&
                <div className='ctnDivOkayAll'>
                    <div className='divOkayAll'>
                        <h1>Felicidades, tu proceso de pago se ah realizado con exito</h1>
                        <p>Código de tu orden: <b>{idOrden}</b></p>
                        <Link to={"/"} className="linkBtn">aceptar</Link>
                    </div>
                </div>
            }
            {charge && <WhileCharging position={"absolute"} />}</>
    )
}
export default Checkout