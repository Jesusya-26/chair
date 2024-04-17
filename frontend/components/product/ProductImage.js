import styled from 'styled-components/native';


export default function ProductImage( {product_uri} ) {

    return (
        <MainImage 
        source={{
            uri: product_uri
        }}/>
    );
    }


const MainImage = styled.Image`
    width: 100%;
    height: 432px;
    border-radius: 25px;
`;
