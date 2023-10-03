import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
  const { nombre } = useParams()
  return (
    <section className='ItemListContainer'>
      
    <ItemList />
    </section>
  );
};

export default ItemListContainer;