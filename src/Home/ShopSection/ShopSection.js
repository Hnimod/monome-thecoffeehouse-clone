import React from 'react';
import {
  Section,
  Container,
  Top,
  Wrap,
  Content,
  Head,
  Description,
  Image,
} from './ShopSectionElements';
import Title from '../../shared/components/Title/Title';
import shopImage from '../../assets/images/shop-1.jpg';

const ShopSection = () => {
  return (
    <Section>
      <Container>
        <Top>
          <Title textColor="#ea8025">Cửa hàng</Title>
        </Top>
        <Wrap>
          <Content>
            <Head>THE COFFEE HOUSE SIGNATURE</Head>
            <Description>
              Với những nghệ nhân rang tâm huyết và đội ngũ Barista tài năng
              cùng những câu chuyện cà phê đầy cảm hứng, ngôi nhà Signature 19B
              Phạm Ngọc Thạch, Q.3, TP.HCM là không gian dành riêng cho những ai
              trót yêu say đắm hương vị của những hạt cà phê tuyệt hảo.
            </Description>
          </Content>
          <Image src={shopImage} />
        </Wrap>
      </Container>
    </Section>
  );
};

export default ShopSection;
