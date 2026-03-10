import React from 'react';
import { Layout, Typography, Row, Col, Timeline, Tag, Space, Avatar, Divider, ConfigProvider } from 'antd';
import { BookOutlined, TranslationOutlined, HistoryOutlined, TeamOutlined, GlobalOutlined } from '@ant-design/icons';
import { yanfuData } from './data/yanfuData';
import { HeroWrapper, SectionContainer, PhilosophyBox } from './components/StyledUI';
import LegacyCard from './components/LegacyCard';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const App = () => {
  const { name, altName, summary, tags, images, timeline, philosophy, works } = yanfuData;

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#1890ff', borderRadius: 12 } }}>
      <Layout style={{ minHeight: '100vh', background: '#fff', width: '100%' }}>
        <Header style={{ 
          position: 'sticky', top: 0, zIndex: 10, width: '100%', 
          background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', 
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 5%', borderBottom: '1px solid #f0f0f0'
        }}>
          <Title level={4} style={{ margin: 0, fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>{name}</Title>
          <Space wrap>{tags.map(t => <Tag color="blue" key={t}>{t}</Tag>)}</Space>
        </Header>

        <Content style={{ width: '100%' }}>
          <HeroWrapper>
            <Avatar 
              size={{ xs: 120, sm: 160, md: 200, lg: 220, xl: 240, xxl: 260 }} 
              src={images.portrait} 
              style={{ border: '6px solid rgba(255,255,255,0.2)', marginBottom: 24, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }} 
            />
            <Title style={{ color: '#fff', fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: 0, lineHeight: 1.1 }}>{name}</Title>
            <Title level={3} style={{ color: 'rgba(255,255,255,0.85)', marginTop: 12, fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}>{altName}</Title>
            <Paragraph style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 900, fontSize: 'clamp(1rem, 2vw, 1.25rem)', marginTop: 24 }}>{summary}</Paragraph>
          </HeroWrapper>

          <SectionContainer>
            <Row gutter={[64, 64]} align="top">
              <Col xs={24} lg={12}>
                <Title level={2}><HistoryOutlined /> Hành Trình Cuộc Đời</Title>
                <Timeline 
                  mode="left" 
                  items={timeline} 
                  style={{ marginTop: 32 }}
                />
              </Col>
              <Col xs={24} lg={12}>
                <Title level={2}><TranslationOutlined /> Triết Lý Dịch Thuật</Title>
                <PhilosophyBox>
                  <Title level={4} style={{ color: '#1890ff' }}>{philosophy.title}</Title>
                  <Paragraph style={{ fontSize: '1.1rem' }}>{philosophy.description}</Paragraph>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {philosophy.items.map(i => (
                      <li key={i.key} style={{ marginBottom: 16 }}>
                        <Text strong style={{ fontSize: '1.1rem', display: 'block' }}>{i.key} ({i.label})</Text>
                        <Text type="secondary">{i.desc}</Text>
                      </li>
                    ))}
                  </ul>
                </PhilosophyBox>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 12 }}>
                  <img 
                    src={images.statue} 
                    alt="Statue" 
                    style={{ width: '100%', display: 'block', transition: 'transform 0.5s ease' }} 
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              </Col>
            </Row>
          </SectionContainer>

          <div style={{ background: '#f0f5ff', padding: '20px 0' }}>
            <SectionContainer>
              <Title level={2} style={{ textAlign: 'center', marginBottom: 64 }}><BookOutlined /> Di Sản Tác Phẩm</Title>
              <Row gutter={[32, 32]}>
                {works.map((work, idx) => (
                  <Col xs={24} sm={12} xl={8} key={work.title}>
                    <LegacyCard {...work} image={idx === 0 ? images.book : null} />
                  </Col>
                ))}
              </Row>
            </SectionContainer>
          </div>

          <SectionContainer>
            <Title level={2} style={{ marginBottom: 48 }}><TeamOutlined /> Gia Đình & Di Tích</Title>
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} md={14}>
                <Paragraph style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                  Nghiêm Phục để lại một dòng họ tri thức rạng rỡ. Những người con, người cháu của ông không chỉ thành danh tại đại lục mà còn đóng vai trò quan trọng trong sự phát triển văn hóa, giáo dục tại Đài Loan và quốc tế.
                </Paragraph>
                <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}>
                  <img src={images.family} alt="Family" style={{ width: '100%', display: 'block' }} />
                  <div style={{ padding: 16, background: '#fff', textAlign: 'center' }}>
                    <Text italic>Nghiêm Phục và kế thất Chu Minh Lệ (1917)</Text>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={10}>
                <Title level={4}>Nhà cũ tại Lang Quan</Title>
                <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 24 }}>
                  <img src={images.house} alt="House" style={{ width: '100%', display: 'block' }} />
                </div>
                <Paragraph type="secondary">
                  Công trình tọa lạc tại khu Cổ Lâu, Phúc Châu, là minh chứng cho sự giao thoa kiến trúc Đông - Tây thời bấy giờ.
                </Paragraph>
              </Col>
            </Row>
          </SectionContainer>
        </Content>

        <Footer style={{ textAlign: 'center', background: '#001529', color: 'rgba(255,255,255,0.45)', padding: '60px 50px' }}>
          <Space direction="vertical" size="large">
            <Title level={3} style={{ color: '#fff', margin: 0 }}>{name}</Title>
            <Text style={{ color: 'rgba(255,255,255,0.65)' }}>Kỷ niệm nhà tư tưởng vĩ đại của Trung Quốc cận đại</Text>
            <Divider style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            <Space size="large">
              <GlobalOutlined style={{ fontSize: 24 }} />
              <Text style={{ color: 'rgba(255,255,255,0.45)' }}>Dữ liệu từ Wikipedia tiếng Việt</Text>
            </Space>
          </Space>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
