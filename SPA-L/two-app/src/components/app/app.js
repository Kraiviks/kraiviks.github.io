import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component{
    state = {
        blockStatus: true,
        selectedChar: 130
    }

    changeStatus = () => {
        if(this.state.blockStatus){
            this.setState({
                blockStatus:false
            });
        } else {
            this.setState({
                blockStatus:true
            });
        }
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        const {blockStatus} = this.state;

        const content = blockStatus ? <RandomChar/> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {content}
                            <Button 
                                color="primary"
                                size="lg"
                                className='mb-5'
                                onClick={this.changeStatus}
                            >Delete / Show (new)</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};