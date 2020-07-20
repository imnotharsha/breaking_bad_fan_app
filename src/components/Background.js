import React, {Component} from 'react';
import axios from '../config/axios';
import {connect} from 'react-redux';
import './Background.css';
//import {getRandomCharacter} from '../actions/characterActions';

export class Background extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    axios
      .get('/character/random')
      .then(response => {
        const random = response.data;
        this.setState({data: random});

        console.log(random, 'background', 'hellobklhjb,');
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(typeof this.state.data, 'state');
    return (
      <header
        className='banner'
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage:
            'url(https://static0.srcdn.com/wordpress/wp-content/uploads/2019/01/Breaking-Bad-Movie-Characters.jpg?q=50&fit=crop&w=767&h=450&dpr=1.5)',
        }}>
        <div className='banner_contents'>
          <h1 className='banner_title'></h1>
        </div>
        <div className='banner_fadeButtom'></div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    image: state.image,
  };
};

export default connect(mapStateToProps)(Background);
