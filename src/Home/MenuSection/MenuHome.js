import React from 'react';
import { Button } from '../../shared/components/Button/Button';
import Title from '../../shared/components/Title/Title';
import { Section, Container, Top } from './MenuHomeElements';
import ProductsMenu from '../../shared/components/ProductsMenu/ProductsMenu';

import prodImage1 from '../../assets/images/product-1.jpg';

const products = [
  {
    image: prodImage1,
    name: 'trà đào cam sả',
    price: 50000,
  },
  {
    image: prodImage1,
    name: 'trà oolong bưởi mật ong',
    price: 50000,
  },
  {
    image: prodImage1,
    name: 'trà sữa mắc ca trân châu trằng',
    price: 50000,
  },
  {
    image: prodImage1,
    name: 'caramel macchiato',
    price: 50000,
  },
  {
    image: prodImage1,
    name: 'mocha',
    price: 50000,
  },
  {
    image: prodImage1,
    name: 'cappuccino',
    price: 50000,
  },
];
const MenuHome = () => {
  return (
    <Section>
      <Container>
        <Top>
          <Title textColor={'#ea8025'}>Menu</Title>
          <Button to="/">Xem thêm tất cả sản phẩm</Button>
        </Top>
        <ProductsMenu items={products} size={'0.9em'} />
      </Container>
    </Section>
  );
};

export default MenuHome;
