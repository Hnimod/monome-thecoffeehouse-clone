import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  Container,
  Logo,
  MainLinks,
  MainLink,
  MainLinkItem,
  SubLink,
  SubLinks,
  SubLinkItem,
  SideMenuBtn,
} from './NavbarElements';

const Navbar = (props) => {
  return (
    <Nav>
      <Container>
        <SideMenuBtn onClick={props.toggle}>
          <FaBars />
        </SideMenuBtn>

        <Logo to="/">Monome</Logo>

        <MainLinks>
          <MainLink>
            <MainLinkItem to="/menu">Sản phẩm</MainLinkItem>
          </MainLink>
          <MainLink>
            <MainLinkItem to="/about">Câu chuyện thương hiệu</MainLinkItem>
            <SubLinks>
              <SubLink>
                <SubLinkItem to="/">Về Momome</SubLinkItem>
              </SubLink>
              <SubLink>
                <SubLinkItem to="/">Trách nhiệm cộng đồng</SubLinkItem>
              </SubLink>
              <SubLink>
                <SubLinkItem to="/">Thông cáo báo chí</SubLinkItem>
              </SubLink>
            </SubLinks>
          </MainLink>

          <MainLink>
            <MainLinkItem to="/">Chuyện ăn vặt</MainLinkItem>
            <SubLinks>
              <SubLink>
                <SubLinkItem to="/">Nghệ thuật ăn vặt</SubLinkItem>
              </SubLink>
              <SubLink>
                <SubLinkItem to="/">Workshop</SubLinkItem>
              </SubLink>
              <SubLink>
                <SubLinkItem to="/">Truy xuất nguồn gốc</SubLinkItem>
              </SubLink>
            </SubLinks>
          </MainLink>

          <MainLink>
            <MainLinkItem to="/">Ưu đãi thành viên</MainLinkItem>
          </MainLink>
          <MainLink>
            <MainLinkItem to="/">Tin tức</MainLinkItem>
          </MainLink>
          <MainLink>
            <MainLinkItem to="/">Tuyển dụng</MainLinkItem>
          </MainLink>
        </MainLinks>
      </Container>
    </Nav>
  );
};

export default Navbar;
