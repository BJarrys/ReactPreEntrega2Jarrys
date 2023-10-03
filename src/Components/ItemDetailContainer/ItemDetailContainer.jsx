import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { getProductById } from '../../Helpers/GetDatos.jsx';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const { id } = useParams()
    
  const [product, setProducts] = useState(null);

  useEffect(() => {
    getProductById(id, setProducts);
    console.log(product)
  }, [id]);

  return (
    
    <div className="product-list-container">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.Colores[0].Imagen} />
      <Card.Body>
        <Card.Title>{product.Nombre}</Card.Title>
        <Card.Text>
          {product.Descripcion}
          <br />
          <br />
          <strong>Código:</strong> {product.Codigo}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

export default ItemDetailContainer;
