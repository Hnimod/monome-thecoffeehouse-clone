import React from 'react';
import { MdClose } from 'react-icons/md';
import {
  Side,
  Container,
  MainLinks,
  MainLink,
  MainLinkItem,
  SubLinks,
  SubLink,
  SubLinkItem,
  CloseIcon,
} from './SidebarElements';

const Navbar = (props) => {
  return (
    <Container isOpen={props.isOpen}>
      <Side>
        <CloseIcon onClick={props.toggle}>
          <MdClose />
        </CloseIcon>
        <MainLinks>
          <MainLink>
            <MainLinkItem to="/menu">Sản phẩm</MainLinkItem>
          </MainLink>

          <MainLink>
            <MainLinkItem to="/about">Câu chuyện thương hiệu</MainLinkItem>
            <SubLinks>
              <SubLink>
                <SubLinkItem to="/">Về Monome</SubLinkItem>
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
      </Side>
    </Container>
  );
};

export default Navbar;
