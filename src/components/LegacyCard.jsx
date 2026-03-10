import React from 'react';
import { Card, Tag, Typography, Avatar } from 'antd';
import { HoverCard } from './StyledUI';

const { Paragraph } = Typography;

const LegacyCard = ({ title, year, color, desc, image }) => (
  <HoverCard>
    <Card title={title} extra={<Tag color={color}>{year}</Tag>} height="100%">
      <Paragraph>{desc}</Paragraph>
      {image && <Avatar shape="square" size={80} src={image} />}
    </Card>
  </HoverCard>
);

export default LegacyCard;
