import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getStartingEpisode} from '../actions/episodesAction';
import './Episodes.css';
import Trailers from './Trailers';
import YouTube from 'react-youtube';

export class Episodes extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      extra: false,
      episode_id: '',
      air_date: '',
      title: '',
      characters: [],
      season: '',
    };
  }
  handleExtra = (episode_id, air_date, title, characters, season) => {
    this.setState(prev => {
      return {
        extra: !prev.extra,
        episode_id,
        air_date,
        title,
        characters,
        season,
      };
    });
  };

  componentDidMount() {
    this.props.dispatch(getStartingEpisode());
  }
  handleSearchChange = e => {
    this.setState({search: e.target.value.substr(0, 20)});
  };
  render() {
    const searchedResult = this.props.episodes.filter(ele => {
      return (
        ele.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div className='row_episode'>
        <h1 className='heading_episode'>Episodes</h1>
        <div className='input_add'>
          <label className='label_search'>Search Your Favorite Episode :</label>
          <input
            onChange={this.handleSearchChange}
            value={this.state.search}
            className='Input_attribute'
          />
        </div>
        <div className='row_posters'>
          {searchedResult.map((epi, i) => {
            return (
              <div
                className='post'
                onClick={() =>
                  this.handleExtra(
                    epi.episode_id,
                    epi.air_date,
                    epi.title,
                    epi.characters,
                    epi.season
                  )
                }>
                {i} {epi.title}
                <br />
                <li>Season {epi.season}</li>
              </div>
            );
          })}
        </div>
        {this.state.extra && (
          <div className='extra_info' onClick={() => this.handleExtra()}>
            <div className='only_information'>
              <div className='left_info'>
                <li className='bullets'>
                  <h3>Title: {this.state.title} </h3>
                  <h4>Episode ID: {this.state.episode_id} </h4>
                  <h5>Air Date: {this.state.air_date} </h5>
                  <h4>Season: {this.state.season}</h4>
                </li>
              </div>
              <div className='right_info'>
                <h3>
                  Characters :
                  {this.state.characters.map(char => {
                    return <li> {`'${char}',`} </li>;
                  })}{' '}
                </h3>
              </div>
            </div>
            <div className='YouTube_part'>
              {this.state.season && (
                <div>
                  {this.state.season == 1 ? (
                    <YouTube videoId={Trailers.season1} opts={opts} />
                  ) : this.state.season == 2 ? (
                    <YouTube videoId={Trailers.season2} opts={opts} />
                  ) : this.state.season == 3 ? (
                    <YouTube videoId={Trailers.season3} opts={opts} />
                  ) : this.state.season == 4 ? (
                    <YouTube videoId={Trailers.season4} opts={opts} />
                  ) : this.state.season == 5 ? (
                    <YouTube videoId={Trailers.season5} opts={opts} />
                  ) : (
                    <YouTube videoId={Trailers.all} opts={opts} />
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    episodes: state.episodes,
  };
};

export default connect(mapStateToProps)(Episodes);
