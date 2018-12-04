import React, { Component } from 'react';
import QuoteCard from './components/QuoteCard'
import Nav from './components/Nav'
import { Container, Row } from 'reactstrap'

class App extends Component {
  state = {
    chuckNorrisJokes: [],
    chuckNorrisQuotesError: false,
    loading: true,
    numberOfJokes: 3
  }
  componentDidMount() {
    this._getJokes(this.state.numberOfJokes)
  }
  _getJokes = (numJokes) => {
    fetch(`http://api.icndb.com/jokes/random/${numJokes}`)
      .then(res => res.json())
      .then(({ value: jokes }) => {
        this.setState({
          chuckNorrisJokes: jokes,
          chuckNorrisQuotesError: false,
          loading: false
        })
      })
      .catch(e => {
        this.setState({
          chuckNorrisQuotesError: true,
          loading: false
        })
      })
  }
  _updateNumJokes = (type) => {
    this.setState(state => {
      this._getJokes(type ? state.numberOfJokes + 1 : state.numberOfJokes - 1)
      return {
        numberOfJokes: type ? state.numberOfJokes + 1 : state.numberOfJokes - 1
      }
    })
  }
  render() {
    const { chuckNorrisJokes, chuckNorrisQuotesError, loading, numberOfJokes } = this.state
    return (
      <Container fluid>
        <Nav 
          numberOfJokes={numberOfJokes} 
          _updateNumJokes={this._updateNumJokes} 
        />
        <h1>Hey! Listen Up. It's Chuck Motherfucking Norris.</h1>
        <Row>
          {loading && <div>Loading Chuck Norris Jokes...</div>}
        </Row>
        {chuckNorrisQuotesError && <div>There was an error fetching Chuck Norris jokes.</div>}
        <Row>
          {chuckNorrisJokes.length > 0 && !chuckNorrisQuotesError && chuckNorrisJokes.map(({ id: key, joke }) => <QuoteCard key={key} joke={joke} />)}
        </Row>
      </Container>
    );
  }
}

export default App;
