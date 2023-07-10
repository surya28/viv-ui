import { Card, Typography, Rate } from 'antd';
const { Paragraph, Title, Text } = Typography

const ProductCard = ({ product }) => {
    return (
        <Card
            className='mb-8 drop-shadow-md'
            bordered
            hoverable
            style={{
                width: 342,
            }}
            cover={<img alt={product?.title} src={product?.thumbnail} style={{ height: '17rem' }} />}
        >
            <Paragraph ellipsis={{ rows: 1 }}>
                <Title level={5}>{product?.title}</Title>
            </Paragraph>
            <Paragraph ellipsis={{ rows: 2 }}>
                <Text type='secondary'>
                    {product?.description}
                </Text>
            </Paragraph>
            <Title level={3}>${product?.price}</Title>
            <Rate disabled defaultValue={product?.rating} />
        </Card>
    )
}
export default ProductCard;