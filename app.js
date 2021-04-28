const comprarCasco = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("Comprar casco")
  }, 1000)
})
const comprarGuantes = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("Comprar guantes")
  }, 2000)
})
const irPaseo = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("Paseo en bici")
  }, 8000)
})

const async pasearEnBici = () =>{
  comprarCasco
    .then(infoCasco=>{
      const result = await infoCasco;
      console.log(result)
      return comprarGuantes;
    })
    .then(infoGuantes=>{
      const result = await infoGuantes;
      console.log(result)
      return irPaseo;
    })
    .then(infoPaseo=>{
      const result = await infoPaseo;
      console.log(result)
      return infoPaseo;
    })
    .catch(error=>{
      console.log(error)
    })
    .finally(()=> console.log("Proceso finalizado"))
  }
  pasearEnBici();
