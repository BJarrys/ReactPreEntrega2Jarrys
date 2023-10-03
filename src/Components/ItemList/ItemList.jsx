import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { getProductByCategory } from '../../Helpers/GetDatos.jsx';
import { useParams } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap';

const ItemList = () => {
    const { nombre } = useParams()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductByCategory(nombre, setProducts);
  }, [nombre]);

  return (
    
    <div className="product-list-container">

      <h2>{nombre}</h2>
    <hr />
<Row xs={1} md={3} className="g-4">
      {products.map((product) => (
        <Col key={product.Id}>
          <Card>
            <Card.Img variant="top" src={product.Colores[0].Imagen} height="400px" />
            <Card.Body>
              <Card.Title>{product.Nombre}</Card.Title>
              <Card.Text>
                {product.Descripcion}
                <br />
                <br />
                <strong>Código:</strong> {product.Codigo}
              </Card.Text>
              <LinkContainer to={`/item/${product.Id}`}>
              <Button variant="secondary">Ver Artículo</Button>
            </LinkContainer>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default ItemList;
