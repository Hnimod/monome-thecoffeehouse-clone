import React from 'react';

import Default from '../shared/templates/Default';
import { appColor } from '../appConfig';
import TextContent from '../shared/components/TextContent/TextContent';
import Title from '../shared/components/Title/Title';
import {
  Container,
  Wrap,
  Block1,
  Block2,
  Block2Grid,
  Block2Tile1,
  Block2Tile2,
  Block2Tile3,
  Head,
  Content,
  Block2Tile4,
  Block2Tile5,
  Block2Tile6,
  Block2Tile7,
  Block2Tile8,
  Block2Tile9,
  Block3,
  Block4,
} from './Elements';

const About = () => {
  return (
    <Default>
      <Container>
        <Block1>
          <TextContent
            title={'mình cà phê nhé'}
            titleWeight={500}
            titleColor={appColor.primary}
            textSize={'1.4em'}
          >
            “Cà phê nhé" - Một lời hẹn rất riêng của người Việt. Một lời ngỏ mộc
            mạc để mình ngồi lại bên nhau và sẻ chia câu chuyện của riêng mình.
            <br />
            <br />
            Tại The Coffee House, chúng tôi luôn trân trọng những câu chuyện và
            đề cao giá trị Kết nối con người. Chúng tôi mong muốn The Coffee
            House sẽ trở thành “Nhà Cà Phê", nơi mọi người xích lại gần nhau và
            tìm thấy niềm vui, sự sẻ chia thân tình bên những tách cà phê đượm
            hương, chất lượng.
          </TextContent>
        </Block1>

        <Block2>
          <Wrap>
            <Title center textColor={appColor.primary} weight={500}>
              4 GIÁ TRỊ LÀM NÊN THE COFFEE HOUSE
            </Title>

            <Block2Grid>
              <Block2Tile1 />
              <Block2Tile2 />
              <Block2Tile3>
                <Head>CHÂN THÀNH</Head>
                <Content>
                  Bắt đầu từ sứ mệnh “Deliver Happiness” - Trao gửi hạnh phúc,
                  chúng tôi tin rằng khi làm việc với tất cả sự chân thành và
                  tôn trọng những giá trị nguyên bản của từng nhân viên cũng như
                  khách hàng, tất cả mọi người đến với The Coffee House đều nhận
                  được những niềm vui nho nhỏ, được tốt lên và làm người khác
                  tốt lên từng ngày.
                </Content>
              </Block2Tile3>
              <Block2Tile4>
                <Head>QUAN TÂM</Head>
                <Content>
                  Mỗi sản phẩm, chiến dịch của The Coffee House luôn xoay quanh
                  con người. Chúng tôi lấy khách hàng, nhân viên và cộng đồng
                  làm trọng tâm cho mọi quyết định. Vì khi có bạn, The Coffee
                  House được tiếp thêm sức mạnh để cùng lan toả những giá trị
                  tốt đẹp cho người trẻ Việt Nam.
                </Content>
              </Block2Tile4>
              <Block2Tile5 />
              <Block2Tile6 />
              <Block2Tile7>
                <Head>SÁNG TẠO</Head>
                <Content>
                  Chúng tôi muốn tạo ra dấu ấn khác biệt cho cà phê Việt Nam
                  bằng sự tử tế và cẩn trọng. 5 năm qua, cảm ơn bạn là nguồn
                  động lực giúp chúng tôi nỗ lực đổi mới và kiến tạo mỗi ngày,
                  để mang lại những thành phẩm tuyệt vời nhất, để trải nghiệm
                  của bạn ngày một tốt hơn.
                </Content>
              </Block2Tile7>
              <Block2Tile8></Block2Tile8>
              <Block2Tile9>
                <Head>DŨNG CẢM</Head>
                <Content>
                  Tại The Coffee House, những tâm hồn đồng điệu cùng nhau làm
                  việc cần mẫn và chung sức cho những mục tiêu lớn. Mỗi ngày với
                  chúng tôi đều là một ngày được học hỏi, trải nghiệm những điều
                  mới, đón nhận thách thức và dấn thân trên con đường phía
                  trước. Hành trình tiếp theo, chúng tôi mong muốn được cùng bạn
                  nuôi dưỡng ước mơ và kiên trì đi đến tận cùng ước mơ của mình.
                </Content>
              </Block2Tile9>
            </Block2Grid>
          </Wrap>
        </Block2>

        <Block3></Block3>

        <Block4></Block4>
      </Container>
    </Default>
  );
};

export default About;
