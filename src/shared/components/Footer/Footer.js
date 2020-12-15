import React from 'react';
import {
  Footer,
  Container,
  Wrap,
  About,
  Head,
  Link,
  Address,
  Detail,
  Delivery,
  Copyright,
  Logo,
  Text,
  Policy,
  Privacy,
  Terms,
} from './FooterElements';

const FooterSection = () => {
  return (
    <Footer>
      <Container>
        <Wrap>
          <Logo>Monome</Logo>
          <About>
            <Head>About</Head>
            <Link to="/">Về chúng tôi</Link>
            <Link to="/">Cơ hội nghề nghiệp</Link>
            <Link to="/">Cửa hàng</Link>
          </About>

          <Address>
            <Head>Always-on support</Head>
            <Detail>Delivery 1800 6936 (07:00-21:00)</Detail>
            <Detail>Support +842871 078 079 (07:00-21:00)</Detail>

            <Head>Address</Head>
            <Detail>
              86 - 88 Cao Thang, Ward 4, District 3, Ho Chi Minh, Vietnam.
            </Detail>
            <Detail>
              Head Office 2: 62 Tran Quang Khai, Tan Dinh Ward, District 1 Ho
              Chi Minh, Vietnam.
            </Detail>
            <Detail>+842871 078 079</Detail>
            <Detail>hi@thecoffeehouse.vn</Detail>
          </Address>

          <Delivery>
            <Head>Delivery</Head>
            <Link to="/">Shipping methods</Link>
            <Link to="/">Payment</Link>
            <Link to="/">Cash voucher</Link>
            <Link to="/">Return</Link>
            <Link to="/">Exchange</Link>
          </Delivery>
        </Wrap>
        <Copyright>
          <Text>Copyright © 2020 The Coffee House. All rights reserved.</Text>
          <Policy>
            <Privacy to="/">Privacy Policy</Privacy>
            <Terms to="/">Terms of use</Terms>
          </Policy>
        </Copyright>
      </Container>
    </Footer>
  );
};

export default FooterSection;
