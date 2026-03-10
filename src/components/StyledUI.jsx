import styled from 'styled-components';

export const HeroWrapper = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #434343 100%);
  padding: clamp(40px, 10vw, 100px) 5%;
  color: white;
  text-align: center;
  min-height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const SectionContainer = styled.section`
  padding: clamp(30px, 5vw, 80px) 5%;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background: ${props => props.bg || 'transparent'};
`;

export const PhilosophyBox = styled.div`
  background: #f8f9fa;
  padding: clamp(20px, 4vw, 40px);
  border-radius: 12px;
  border-left: 6px solid #1890ff;
  margin: 20px 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

export const HoverCard = styled.div`
  height: 100%;
  .ant-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    .ant-card-body {
      flex: 1;
    }
  }
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.1);
  }
`;
