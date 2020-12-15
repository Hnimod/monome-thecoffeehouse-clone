import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import prodImage1 from '../assets/images/product-1.jpg';
import Default from '../shared/templates/Default';
import Title from '../shared/components/Title/Title';
import ProductsMenu from '../shared/components/ProductsMenu/ProductsMenu';
import { Button } from '../shared/components/Button/Button';
import { appColor, breakpoint } from '../appConfig';
import TextContent from '../shared/components/TextContent/TextContent';

const PRODUCT = {
  image: prodImage1,
  category: 'trà trái cây',
  name: 'trà đào cam sả',
  price: 50000,
};
const RELATED_PRODUCTS = [
  {
    image: prodImage1,
    category: 'trà trái cây',
    name: 'trà đào cam sả',
    price: 50000,
  },
  {
    image: prodImage1,
    category: 'trà trái cây',
    name: 'trà olong phúc bồn tử',
    price: 50000,
  },
  {
    image: prodImage1,
    category: 'trà trái cây',
    name: 'trà olong bưởi mật ong',
    price: 50000,
  },
  {
    image: prodImage1,
    category: 'trà trái cây',
    name: 'trà oolong hạt sen',
    price: 50000,
  },
];

const Container = styled.div`
  font-size: 1rem;

  @media screen and (max-width: ${breakpoint.laptop}) {
    font-size: 0.8rem;
    padding: 0 1em;
  }
`;
const Breadscrum = styled.ul`
  max-width: 1100px;
  margin: 0 auto;
  text-transform: uppercase;
  margin-top: 60px;
  list-style: none;
  display: flex;
  height: 5em;
`;
const Scope = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    margin-right: 25px;
  }

  &:not(:last-of-type)::after {
    position: absolute;
    top: 0;
    left: 100%;
    height: 100%;
    content: '/';
    color: #777;
    padding: 0 10px;
    display: flex;
    align-items: center;
  }
`;
const ScopeLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 0.8em;
  transition: all 0.4s ease-in-out;
  font-weight: 500;

  &:hover,
  &:active {
    color: ${appColor.primary};
  }
`;
const Info = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding-bottom: 4em;

  @media screen and (max-width: ${breakpoint.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Image = styled.img`
  width: 30em;
  height: 30em;
  margin-right: 8em;

  @media screen and (max-width: ${breakpoint.laptop}) {
    margin-right: 4em;
  }

  @media screen and (max-width: ${breakpoint.tablet}) {
    width: 100%;
    height: 100%;
    margin-right: 0;
    margin-bottom: 2em;
  }
`;
const Price = styled.h3`
  color: ${appColor.primary};
  margin-top: 3em;
  margin-bottom: 1em;
  font-size: 1.3em;
  font-weight: 500;
`;
const Contact = styled.p`
  margin-top: 1em;
  font-weight: 300;
`;
const Description = styled.div`
  background: #fff;
`;
const Related = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 5em 0;

  & > :first-child {
    margin: 0 auto 2em auto;
  }
`;

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Default style={{ background: '#f5f5f5' }}>
      <Container>
        <Breadscrum>
          <Scope>
            <ScopeLink to="/">Menu</ScopeLink>
          </Scope>
          <Scope>
            <ScopeLink to="/">Trà trái cây</ScopeLink>
          </Scope>
          <Scope>
            <ScopeLink to="/">Trà bưởi mật ong</ScopeLink>
          </Scope>
        </Breadscrum>

        <Info>
          <Image src={PRODUCT.image} />
          <Detail>
            <Title lineColor={appColor.primary} weight={500}>
              {PRODUCT.name}
            </Title>
            <Price>{PRODUCT.price} Đ</Price>
            <Button to="/" primary="true" padding={'0.5em 3em'}>
              Mua ngay
            </Button>
            <Contact>Gọi giao hàng tận nơi 1800 6936</Contact>
          </Detail>
        </Info>

        <Description>
          <TextContent
            title={'Cho ngày thêm tươi'}
            titleColor={appColor.primary}
            titleWeight={500}
          >
            Lớp trà oolong đã man mát, nhưng sẽ vị càng thêm vị khi có hương
            bưởi cùng những tép bưởi mọng nước đi kèm - cho bạn 1 cách thưởng
            thức đầy thú vị. Cùng đánh thức vị giác, khởi động 1 ngày tươi tắn
            cùng hương vị mới lạ này nhé!
          </TextContent>
        </Description>

        <Related>
          <Title lineColor={appColor.primary} weight={500} center>
            Có thể bạn thích
          </Title>
          <ProductsMenu items={RELATED_PRODUCTS} />
        </Related>
      </Container>
    </Default>
  );
};

export default Product;
