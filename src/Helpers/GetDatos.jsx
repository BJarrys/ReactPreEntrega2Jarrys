import { productosLista } from '../Data/Data.jsx'

function getById(id, array) {
  var art = {}
  array.forEach(element => {
    element.Articulos.forEach(articulo => {
      if (articulo.Id == id)
      {
        console.log(articulo)
        art = articulo
      }
    })
  });
  return art
}
const getCategoryByNombre = (nombre, array) => array.find((el) => el.Nombre === nombre).Articulos;

const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productosLista);
  }, 3000);
});

const getAllProducts = async (setState) => {
  try {
    const result = await getProducts;
    setState(result);
  } catch (error) {
    console.log(error);
    alert('No podemos mostrar los productos en este momento');
  }
};

const getProductById = async (id, setState) => {
  try {
    const result = await getProducts;
    console.log(id)
    console.log(result)
    setState(getById(id, result));
  } catch (error) {
    console.log(error);
  }
};

const getProductByCategory = async (nombre, setState) => {
    try {
      console.log(nombre)
      const result = await getProducts;
      console.log(result)
      console.log(getCategoryByNombre(nombre, result))
      setState(getCategoryByNombre(nombre, result));
    } catch (error) {
      console.log(error);
    }
  };
  
export { getAllProducts, getProductById, getProductByCategory };
