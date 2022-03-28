// formateo de moneda
export const formatAPesCol = (valor) => {
  return new Intl.NumberFormat().format(valor)
}
// dejar scroll arriba cada render
export const scrollArriba = () => {
  window.scrollTo(0, 0)
}
// array a partir de un numero para uso futuro en selects u otros
export const arrayFromNumber = (num) => {
  let arNum = [num]
  let n = 0
  for (let j = 1; j < num; j++) {
    n = num - [j]
    arNum.push(n)
  }
  return arNum;
}
// desordenar aleatoriamente array
export const enDesorden = (laData) => {
  return laData.sort(() => {
    return Math.random() - 0.5;
  });
};
// funcion para saber cambiar precio tottal si aplica descuento o no
export const pricDesOrNot = ({ pric }) => {
  if (pric > 3000000) return pric * 0.95
  if (pric <= 3000000) return pric
}
// funcion retorna true o false precio total mayor a 3m
export const priceShoppIsMore3Millon = ({ price }) => {
  if (price > 3000000) return true
  if (price <= 3000000) return false
}
// filtrar categorias de toda la info par ausar en componente ulfilter y traer listas te las brand segun la categoria
export const filtCategBrand = ({ categ, infoData }) => {
  let filtByCateg;
  let resultByCateg;
  if (categ === "todo") {
    filtByCateg = infoData.filter((el) => el);
    resultByCateg = filtByCateg.map((br) => br.brand);
  } else {
    filtByCateg = infoData.filter((el) => el.category === categ);
    resultByCateg = filtByCateg.map((br) => br.brand);
  }
  return resultByCateg.filter(
    (ele, pos) => resultByCateg.indexOf(ele) === pos
  );
};
// categorias navbar
export const itemsCategory = [
  "todo",
  "Celulares",
  "laptops",
  "televisores"
]
// funcion para borrar elementos de buyer al momento de cambiar de metodo de pago en caso que ocurra
export const deleteOtherPaymentMethod = ({ obj, payCardCredit, payPSE, payEfectivo }) => {
  if (!payCardCredit) { delete obj.buyer.cardNumber; delete obj.buyer.fullNameCard; delete obj.buyer.cvv }
  if (!payPSE) { delete obj.buyer.BancoDeOrigen; delete obj.buyer.TitularCuenta; delete obj.buyer.NumeroDeCuenta }
  if (!payEfectivo) { delete obj.buyer.pagoEnEfectivo }
  if (payCardCredit) { obj.buyer.metodoDePago = "Tarjeta De Credito" } else { obj.buyer.metodoDePago = "pending" }
  if (payEfectivo) obj.buyer.metodoDePago = "Pago En Efectivo"
  if (payPSE) obj.buyer.metodoDePago = "PSE"
}
// metodos de pago para checkout y bancos
export const OptionsBanq = [
  "Seleccionar", "AV Villas", "Banco de bogota", "Banco Popular", "Banco Caja Social", "Banca Mia", "Bancolombia", "Servibanca", "Itau", "Davivienda", "Nequi", "Daviplata", "RappiPay", "Scotiabank Colpatria", "Pichincha"
]
// datos para inputs y labels en formularios checkout segun state (informacion principal cliente)
export const mapLabelInputInfoClient = [
  { label: "Nombre", idFor: "Nombre", namee: "Nombre", placeholder: "Nombres" },
  { label: "Apellidos", idFor: "Apellido", namee: "lastName", placeholder: "Apellidos" },
  { label: "Numero de documento", idFor: "Document", namee: "document", placeholder: "Documento (123456789)" },
  { label: "Telefono de Contacto", idFor: "TelContact", namee: "phone", placeholder: "Telefono (987654321)" },
  { label: "Correo electronico", idFor: "CorreoElectronico", namee: "email", placeholder: "ejemplo@ejemplo.com" },
]
//  datos para inputs y labels en formularios checkout segun state (informacion datos de envio)
export const mapLabelInputDatosEnvio = [
  { label: "Ciudad", idFor: "Ciudad", namee: "Ciudad", placeholder: "Ciudad" },
  { label: "Zona o localidad", idFor: "Zona", namee: "Zona", placeholder: "Zona o localidad" },
  { label: "Direccion", idFor: "Direccion", namee: "Direccion", placeholder: "Direccion de destino" },
  { label: "Telefono de Contacto", idFor: "TelefonoContactoEnvio", namee: "TelefonoContactoEnvio", placeholder: "Telefono para contactar (987654321)" }
]
//  datos para inputs y labels en formularios checkout segun state (pago contarjeta de credito)
export const mapLabelInputPayTarjetaCredito = [
  { label: "Numero de Tarjeta", idFor: "cardNumber", namee: "cardNumber", placeholder: "XXXX XXXX XXXX XXXX" },
  { label: "Nombre impreso en la tarjeta", idFor: "fullNameCard", namee: "fullNameCard", placeholder: "Nombre impreso en la tarjeta" },
  { label: "codigo cvv", idFor: "cvv", namee: "cvv", placeholder: "cvv (123)" }
]
//  datos para inputs y labels en formularios checkout segun state (pago por PSE)
export const mapLabelInputPayPSE = [
  { label: "Banco de origen", idFor: "BancoDeOrigen", namee: "BancoDeOrigen", placeholder: "Banco de origen" },
  { label: "Nombre del titular de la cuenta", idFor: "TitularCuenta", namee: "TitularCuenta", placeholder: "Nombre de titular" },
  { label: "Numero de la cuenta", idFor: "NumeroDeCuenta", namee: "NumeroDeCuenta", placeholder: "numero de cuenta (987456321)" }
]
// objeto regex para validaciones
export const validaInpts = {
  infoClient: {
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
    documento: /^[0-9]{7,15}$/,
    telefono: /^[0-9+]{8,15}$/,
    correo: /^(([^<>()[\],;:\s@"]+([^<>()[\],;:\s@"]+)*)|(".+"))@(([^<>()[\],;:\s@"]+)+[^<>()[\],;:\s@"]{2,})$/i
  },
  datosEnvio: {
    ciudad: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    barrio: /^[a-zA-ZÀ-ÿ0-9%'#+-\s]{4,40}$/,
    direccion: /^[a-zA-ZÀ-ÿ0-@9%'#+-\s]{4,40}$/,
    telefonoContactEnvio: /^[0-9+]{8,15}$/
  },
  tarjetaDeCredito: {
    tarjetaCredit: (/^(?:\d{15,16}|\d{4}(?:(?:\s+\d{4}){3}|\s+\d{6}\s\d{5}))$/),
    nameTarjetCredit: /^[a-zA-ZÀ-ÿ\s]{7,40}$/,
    cvvTarjetCredit: /^[0-9]{3}$/
  },
  pse: {
    nombreTitular: /^[a-zA-ZÀ-ÿ\s]{10,40}$/,
    numeroCuenta: /^[0-9]{8,15}$/
  }
}
// funcion para validar los inputs de acuerdo a requerimientos de pago
export const habilSubmitRegex = (objValues, objInpts, setbtn) => {
  if ((objValues.tarjetaDeCredito.tarjetaCredit.test(objInpts.buyer.cardNumber) && objValues.tarjetaDeCredito.nameTarjetCredit.test(objInpts.buyer.fullNameCard) && objValues.tarjetaDeCredito.cvvTarjetCredit.test(objInpts.buyer.cvv)) || (objValues.pse.nombreTitular.test(objInpts.buyer.TitularCuenta) && objValues.pse.numeroCuenta.test(objInpts.buyer.NumeroDeCuenta))) {
    setbtn(true)
  } else {
    setbtn(false)
  }
}
// funcion para validar los inputs de acuerdo a datos requeridos
export const habilbtnContinuarInfoClient = (objValues, objInpts, setbtn) => {
  if (
    objValues.infoClient.nombre.test(objInpts.buyer.Nombre) &&
    objValues.infoClient.apellido.test(objInpts.buyer.lastName) &&
    objValues.infoClient.documento.test(objInpts.buyer.document) &&
    objValues.infoClient.telefono.test(objInpts.buyer.phone) &&
    objValues.infoClient.correo.test(objInpts.buyer.email)
  ) {
    setbtn(true)
  } else {
    setbtn(false)
  }
}
export const habilbtnContinuarDatosEnvio = (objValues, objInpts, setbtn) => {
  if (
    objValues.datosEnvio.ciudad.test(objInpts.buyer.Ciudad) &&
    objValues.datosEnvio.barrio.test(objInpts.buyer.Zona) &&
    objValues.datosEnvio.direccion.test(objInpts.buyer.Direccion) &&
    objValues.datosEnvio.telefonoContactEnvio.test(objInpts.buyer.TelefonoContactoEnvio)
  ) {
    setbtn(true)
  } else {
    setbtn(false)
  }
}

// data para componente cataagorias destacadas
export const datImgsHomeIcon = [
  { icon: "https://i.ibb.co/mFDLVwZ/celulares.png", categor: "celulares" },
  { icon: "https://i.ibb.co/QrsGGxQ/laptop.png", categor: "laptops" },
  { icon: "https://i.ibb.co/HpgV89b/television.png", categor: "televisores" },
  { icon: "https://i.ibb.co/X8Pd8yx/deportes.png", categor: "deportes" },
  { icon: "https://i.ibb.co/T4Nn0RY/electrodomesticos.png", categor: "electrodomesticos" },
  { icon: "https://i.ibb.co/2hxnJLf/hogar.png", categor: "hogar" },
  { icon: "https://i.ibb.co/BLLmVcC/juguetes.png", categor: "juguetes" },
  { icon: "https://i.ibb.co/whrdNFy/salud.png", categor: "salud" },
  { icon: "https://i.ibb.co/RHdVHmH/video-juegos.png", categor: "video-juegos" }
]