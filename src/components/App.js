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
            sortBy: 'name'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({sortBy: e.target.value});
    } 

    componentDidMount() {
        axios.get('https://lcboapi.com/products?access_key=MDpmYTg5MmJiOC04MTQ1LTExZTgtODQ5My1jM2E3MzhjZTJmM2I6Rk56N1NJOTBjQXgwTUIyeTNuVXYzMGNuOWV5dnVZSm5JcVdZ')
        .then(response => {
            this.setState({productList: response.data.result});
            return response;
        })
        .catch (response => {

        }) 
    }

    render() {
        const sortedProducts = this.state.productList.sort((a, b) => {
            if (this.state.sortBy === "name") {
                const textA = a.name.toUpperCase();
                const textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            } else {
                return b.price_in_cents - a.price_in_cents;
            }
        });
        return (     
            <Container>
                <Row>
                    <Col xs="12"><h1>LCBO Beer Filter</h1></Col>
                </Row>
                <Row>
                    <Col xs="12" sm="2">
                        <SearchFilter clickEventHandler={this.handleChange} selectedItem={this.state.sortBy}/>
                    </Col> 
                    <Col className="product-container" xs="12" sm="10">
                        <Row>
                        {sortedProducts.map(x => {
                            return (
                                <Col xs="12" sm="4" key={x.id}>
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