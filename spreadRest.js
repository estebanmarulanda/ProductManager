const objetos = [{
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]



//crear otro array que distinga entre tipos de productos y sume todos los valores numericos
const newObjects = () =>{
    let productsName = [];
    let productsValues = [];
    let productsTotalAmount = 0;

   objetos.forEach((el)=>{
    let productsListName = Object.keys(el)
    productsName.push(productsListName)
   })
   
    console.log(productsName)
}

newObjects()

