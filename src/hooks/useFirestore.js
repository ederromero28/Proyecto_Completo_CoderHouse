import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { useState, useContext, useCallback } from "react";
import { CarrrContext } from "../Context/CartContext";
import db from "../Service/firebase";

const useFirestore = () => {
  const [info, setInfo] = useState([]);
  const [infoForBanners, setInfoForBanners] = useState([]);
  const [charge, setCharge] = useState(false);
  const [infoDetails, setInfoDetails] = useState({});
  const [idOrden, setIdOrden] = useState();
  const { clear } = useContext(CarrrContext);

  const getData = useCallback(async () => {
    try {
      const data = collection(db, "itemsCels");
      const col = await getDocs(data);
      const reslt = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setInfo(reslt);
      setCharge(true);
    } catch (err) {
      console.log(err);
    }
  }, []);
  // get data for banners on home
  const getDataForBanners = useCallback(async ({ length }) => {
    try {
      const data = collection(db, "itemsCels");
      const docum = await getDocs(data);
      const respta = docum.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      const aleatBanner = respta.sort(() => {
        return Math.random() - 0.5;
      });
      aleatBanner.length = length;
      setInfoForBanners(aleatBanner);
    } catch (err) {
      console.log(err);
    }
  }, []);
  // get data de detalle individual
  const getDataDetailIndividual = useCallback(async ({ id }) => {
    setCharge(false);
    try {
      const docment = doc(db, "itemsCels", id);
      const resp = await getDoc(docment);
      const result = { id: resp.id, ...resp.data() };
      setInfoDetails(result);
      setCharge(true);
    } catch (err) {
      console.log(err);
    }
  }, []);
  // generador de orden de compra del cliente
  const [todoBien, setTodoBien] = useState(false);
  const generOrder = async ({ dataClient }) => {
    setCharge(true);
    try {
      const colect = collection(db, "ordenes");
      const orderClient = await addDoc(colect, dataClient);
      setCharge(false);
      setIdOrden(orderClient.id);
      actualStock(dataClient.items);
      setTodoBien(true);
      clear();
    } catch (error) {
      console.log(error);
      setCharge(false);
    }
  };
  // actualizacion de stock
  const actualStock = async (items) => {
    items.forEach((elmnt) => {
      const orderComp = doc(db, "itemsCels", elmnt.id);
      try {
        updateDoc(orderComp, { onStock: elmnt.onStock - elmnt.quanty });
      } catch (error) {
        console.log(error);
      }
    });
  };

  const [infoClient, setInfoClient] = useState(true);
  const [datesPago, setDatesPago] = useState(false);
  const [datosEnvio, setDatosEnvio] = useState(false);
  const [payCardCredit, setPayCardCredit] = useState(false);
  const [payEfectivo, setPayEfectivo] = useState(false);
  const [payPSE, setPayPSE] = useState(false);
  const nextStepValid = ({
    boolEnvio,
    boolInfoclient,
    boolDatesPago,
    boolPayCredit,
    boolPayEfectivo,
    boolPayPSE,
  }) => {
    setDatosEnvio(boolEnvio);
    setInfoClient(boolInfoclient);
    setDatesPago(boolDatesPago);
    setPayCardCredit(boolPayCredit);
    setPayEfectivo(boolPayEfectivo);
    setPayPSE(boolPayPSE);
  };

  const setPaymentInf = ({ boolPayCredit, boolPayEfectivo, boolPayPSE }) => {
    setPayCardCredit(boolPayCredit);
    setPayEfectivo(boolPayEfectivo);
    setPayPSE(boolPayPSE);
  };

  return {
    getData,
    getDataDetailIndividual,
    info,
    charge,
    infoDetails,
    generOrder,
    actualStock,
    idOrden,
    nextStepValid,
    setPaymentInf,
    todoBien,
    infoClient,
    datesPago,
    datosEnvio,
    payCardCredit,
    payEfectivo,
    payPSE,
    getDataForBanners,
    infoForBanners,
  };
};

export default useFirestore;
