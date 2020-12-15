import React from 'react';
import { Link } from 'react-router-dom';
import {
  Products,
  Product,
  Image,
  Name,
  Detail,
  Price,
  Order,
} from './ProductsMenuElements';
import { Button } from '../Button/Button';

const ProductsMenu = (props) => {
  return (
    <Products size={props.size}>
      {props.items.map((product) => (
        <Product key={product.name}>
          <Link to="/menu/:prodId">
            <Image src={product.image} />
          </Link>
          <Name to="/menu/:prodId">{product.name}</Name>
          <Detail>
            <Price>{product.price} đ</Price>
            <Order>
              <Button to="/" primary="true">
                Mua ngay
              </Button>
              <Button to="/" reverse="true">
                Tìm hiểu ngay
              </Button>
            </Order>
          </Detail>
        </Product>
      ))}
    </Products>
  );
};

export default ProductsMenu;
