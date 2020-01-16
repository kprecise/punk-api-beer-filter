import React, { Component } from "react";
import Products from './products';
import SearchFilter from './searchFilter';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            sortBy: 'unordered'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        axios.get('https://api.punkapi.com/v2/beers')
        .then(response => {
            this.setState({productList: response.data});
            return response;
        })
        .catch (response => {
            console.log('error fetching data', response)
        }) 
    }

    handleChange(e) {
        this.setState({sortBy: e.target.value});
    } 

    render() {
        let sortedProducts = '';
        if (this.state.sortBy === "name") {
            sortedProducts = this.state.productList.sort((a, b) => {
                const textA = a.name;
                const textB = b.name;
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        } else if (this.state.sortBy === "keg") {
            sortedProducts = this.state.productList.filter(item => item.image_url !== 'https://images.punkapi.com/v2/keg.png')
        } else {
            sortedProducts = this.state.productList.sort((a, b) => {
                return a.id - b.id
            });
        }

        return (     
            <Container>
                <Row>
                    <Col xs="12">
                        <h1>Punk Beer Filter</h1>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="2">
                        <SearchFilter clickEventHandler={this.handleChange} selectedItem={this.state.sortBy}/>
                    </Col> 
                    <Col className="product-container" xs="12" sm="10">
                        <Row>
                        {sortedProducts.map(x => {
                            return (
                                <Col xs="12" sm="3" key={x.id}>
                                    <Products product={x} />
                                </Col> 
                            );
                        })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Layout;