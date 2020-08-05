import React, { Component } from 'react';
import axios from '../config/axios';
import { connect } from 'react-redux';
import { setAllCharacters } from '../actions/characterActions';
import { getSingleCharacterInfo } from '../actions/characterActions';
import './Character.css';

class Characters extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      visible: false,
      user: {},
      char_id: '',
      name: '',
      portrayed: '',
      occupation: [],
      status: '',
      img: '',
      nickname: '',
      heel: '',
    };
  }
  componentDidMount() {
    this.props.dispatch(setAllCharacters());
  }

  handleSearchChange = (e) => {
    this.setState({ input: e.target.value.substr(0, 20) });
  };
  handleToggle = () => {
    this.setState((prev) => {
      return {
        visible: !prev.visible,
      };
    });
  };
  handleGetCharacterInfo = (
    char_id,
    name,
    portrayed,
    occupation,
    status,
    img,
    nickname
  ) => {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
        char_id: char_id,
        name: name,
        portrayed,
        occupation,
        status,
        img,
        nickname,
      };
    });
    this.props.dispatch(getSingleCharacterInfo(char_id));
  };
  render() {
    let inputSearched = this.props.characters.filter((result) => {
      return (
        result.name.toLowerCase().indexOf(this.state.input.toLowerCase()) !== -1
      );
    });
    return (
      <div className='row'>
        <h1 className='heading'>Characters</h1>
        <div className='input_add'>
          <label className='label_search'>
            Search Your Favorite Characters :
          </label>
          <input
            onChange={this.handleSearchChange}
            value={this.state.input}
            className='Input_attribute'
          />
        </div>
        <div className='row_posters'>
          {inputSearched.map((char) => {
            return (
              <>
                <li key={char.char_id} className='list_poster'>
                  <img
                    onClick={() => {
                      this.handleGetCharacterInfo(
                        char.char_id,
                        char.name,
                        char.portrayed,
                        char.occupation,
                        char.status,
                        char.img,
                        char.nickname
                      );
                    }}
                    className='image_poster'
                    key={char.id}
                    src={char.img}
                    alt='breaking bad cast image'
                  />
                  <span className='poster_name'> {char.name}</span>
                </li>
              </>
            );
          })}
        </div>
        {this.state.visible && (
          <div className='extra_info' onClick={() => this.handleToggle()}>
            <div className='only_info'>
              <h2>Screen Name: {this.state.name}</h2>
              <h3>Actor Name: {this.state.portrayed}</h3>
              <h4>Nickname: {this.state.nickname}</h4>
              <h4>
                Occupation:
                {this.state.occupation.map((occ) => {
                  return <> {`'${occ}',`} </>;
                })}
              </h4>
              <h5>Live or Dead: {this.state.status}</h5>
              <br />
              <small style={{ color: ' pink' }}>
                Click on here to hide Info
              </small>
              <br />
              <br />
            </div>

            <div className='only_image'>
              <label className='only_label'>Actor Image</label>
              <img
                className='char_char_image'
                src={this.state.img}
                alt={this.state.name}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    single: state.single,
  };
};
export default connect(mapStateToProps)(Characters);
