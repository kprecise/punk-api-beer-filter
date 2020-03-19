import React, { useState, useEffect } from "react";
import Products from './products';
import SearchFilter from './searchFilter';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

const App = () => {

    const [ dataReady, setDataReady] = useState(false);
    const [ dataList, setDataList ] = useState([]);
    const [ productList, setProductList] = useState([]);
    const [ sortProductBy, setSortProductBy] = useState('unordered');

    const handleChange = () => {
        setSortProductBy(event.target.value);
        let sortedProductList = '';

        if (event.target.value === "name") {
            sortedProductList = dataList.sort((a, b) => {
                const textA = a.name;
                const textB = b.name;
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            setProductList(sortedProductList)
        } else if (event.target.value === "keg") {
            sortedProductList = dataList.filter(item => item.image_url !== 'https://images.punkapi.com/v2/keg.png');
            setProductList(sortedProductList);
        } else {
            sortedProductList = dataList.sort((a, b) => {
                return a.id - b.id;
            });
            setProductList(sortedProductList);
        }
    }

    useEffect(() => {
        axios.get('https://api.punkapi.com/v2/beers')
        .then(response => {
            setDataList(response.data);
            setProductList(response.data);
            setDataReady(true);
        })
        .catch (response => {
            console.log('error fetching data', response);
        })         
    }, []);

    return (
        <Container>
            <Row>
                <Col xs="12">
                    <h1>Punk Beer</h1>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="2">
                    <SearchFilter 
                        onChange={event => handleChange()} 
                        selectedItem={sortProductBy}
                    />
                 </Col> 
                <Col className="product-container" xs="12" sm="10">
                    <Row>
                    { dataReady ? 
                        productList.map(item => {
                            return (
                                <Col xs="12" sm="3" key={item.id}>
                                    <Products product={item} />
                                </Col> 
                            );
                        })
                    : "Loading....."
                    }
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default App;