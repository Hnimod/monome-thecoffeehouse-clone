import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/components/Button/Button';
import Title from '../../shared/components/Title/Title';
import {
  Section,
  Container,
  Top,
  Blogs,
  Blog,
  BlogTitle,
  BlogContent,
  BlogImage,
  BlogDetail,
} from './BlogElements';
import blogImage from '../../assets/images/hero.jpg';

const blogs = [
  {
    image: blogImage,
    title: 'TASTE OF XMAS - CHẠM VỊ GIÁNG SINH',
    content:
      'Không khí se lạnh len lỏi khắp ngõ ngách phố phường báo hiệu một mùa Giáng sinh nữa lại về. Giáng sinh năm nay có thể sẽ khác hơn, đặc biệt...',
  },
  {
    image: blogImage,
    title: 'The Coffee House đồng hành cùng bạn "Go Green"!',
    content:
      'Tại The Coffee House, hành trình "Go Green" được lan toả mỗi ngày bằng những hành động thiết thực mang tính cộng đồng. Chúng tôi mong muốn truyền cảm hứng...',
  },
  {
    image: blogImage,
    title: 'Top 10 cửa hàng The Coffee House bạn nên trải nghiệm tại Hà Nội',
    content:
      'Dạo quanh các con phố Hà Nội, bạn nhất định phải ghé qua 10 cửa hàng The Coffee House sau đây để vừa nhâm nhi thức uống yêu thích, vừa...',
  },
  {
    image: blogImage,
    title: '7 NGÀY FREE UPSIZE - YÊU BẠN NỮ KHÔNG THỂ NÀO CAI',
    content:
      'Tuần này, The Coffee House thật háo hức để gửi tặng một nửa Thế giới xinh đẹp chương trình vô cùng ngọt ngào "7 ngày Free Upsize - Yêu bạn nữ...',
  },
];

const BlogSection = () => {
  return (
    <Section>
      <Container>
        <Top>
          <Title textColor="#ea8025" lineColor="#fff">
            Blog
          </Title>
          <Button to="/" light="true">
            Xem thêm
          </Button>
        </Top>

        <Blogs>
          {blogs.map((blog) => (
            <Blog key={blog.title}>
              <Link to="/">
                <BlogImage src={blog.image} />
              </Link>
              <BlogDetail>
                <BlogTitle to="/">{blog.title}</BlogTitle>
                <BlogContent>{blog.content}</BlogContent>
                <Button primary="true" to="/">
                  Xem thêm
                </Button>
              </BlogDetail>
            </Blog>
          ))}
        </Blogs>
      </Container>
    </Section>
  );
};

export default BlogSection;
