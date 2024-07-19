export const useSumaTotal = (array) =>{
    let sumaTotal = 0
    array.map(item =>{
        sumaTotal += item.precio * item.cantidad
    })

    return{
        sumaTotal
    }
}