import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Rating from './Rating';

export const product = ({product}) => {
  return (
    <Card className="my-3 p-3" rounded="true">
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top" ></Card.Img>
        </Link>
        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as="div" className='product-title'>
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="div">
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </Card.Text>
            <Card.Text as="h3">
                £{product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default product