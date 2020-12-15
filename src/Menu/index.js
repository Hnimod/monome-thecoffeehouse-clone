import React from 'react';
import Title from '../shared/components/Title/Title';
import Default from '../shared/templates/Default';
import prodImage1 from '../assets/images/product-1.jpg';
import ProductsMenu from '../shared/components/ProductsMenu/ProductsMenu';
import { appColor } from '../appConfig';
import {
  Container,
  Wrap,
  MenuCategory,
  SideContainer,
  TopImg,
} from './MenuElements';
import SideMenu from './SideMenu';
import topImage from '../assets/images/menu-top.jpg';

const PRODUCTS = [
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

const Menu = () => {
  return (
    <Default style={{ background: '#f5f5f5' }}>
      <TopImg image={topImage} />

      <Wrap>
        <SideContainer>
          <SideMenu />
        </SideContainer>

        <Container>
          <MenuCategory id="noi-bat">
            <Title lineColor={appColor.primary}>Nổi bật</Title>
            <ProductsMenu items={PRODUCTS} />
          </MenuCategory>

          <MenuCategory id="cafe-viet">
            <Title lineColor={appColor.primary}>Cà phê việt</Title>
            <ProductsMenu items={PRODUCTS} />
          </MenuCategory>

          <MenuCategory id="cafe-may">
            <Title lineColor={appColor.primary}>Cà phê máy</Title>
            <ProductsMenu items={PRODUCTS} />
          </MenuCategory>
        </Container>
      </Wrap>
    </Default>
  );
};

export default Menu;
