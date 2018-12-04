import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
     } from 'reactstrap'

class NorrisNav extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
    _counterAction = (plusOrMinus) => {
        if (!plusOrMinus && this.props.numberOfJokes < 2) return false
        this.props._updateNumJokes(plusOrMinus)
    }
    render() {
        return (
        <div>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">bro, do u even chuck norris?</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink>
                        {this.props.numberOfJokes} jokes
                    </NavLink>
                </NavItem>
                <NavItem>
                    <Button
                        onClick={() => { this._counterAction(0) }} 
                        style={{ marginRight: '5px' }}
                    >
                        -
                    </Button>
                    <Button
                        onClick={() => { this._counterAction(1) }}
                    >
                        +
                    </Button>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}

export default NorrisNav