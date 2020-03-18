import React from 'react'
import PropTypes from 'prop-types'
//import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import App from "../App.js"
//const Page = () => (
//  <Router>
//    <div>
 //     <ul>
 //       <li>
//          <Link to="/">Home</Link>
//        </li>
//        <li>
 //         <Link to="/about">About</Link>
 //       </li>
//        <li>
//          <Link to="/topics">Topics</Link>
 //       </li>
//      </ul>

//      <hr />

 //     <Route exact path="/" component={Home} />
 //     <Route path="/about" component={About} />
 //     <Route path="/topics" component={Topics} />
//    </div>
//  </Router>
//);

//const Home = () => (
//  <App />
//);

//const About = () => (
//  <div>
//    <h2>About</h2>
//  </div>
//);

//const Topics = ({ match }) => (
//  <div>
//    <h2>Topics</h2>
 //   <ul>
//      <li>
//        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//      </li>
//      <li>
//        <Link to={`${match.url}/components`}>Components</Link>
 //     </li>
 //     <li>
//        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//      </li>
//    </ul>
//
 //   <Route path={`${match.url}/:topicId`} component={Topic} />
 //   <Route
//      exact
//      path={match.url}
//      render={() => <h3>Please select a topic.</h3>}
//    />
//  </div>
//);

//const Topic = ({ match }) => (
 // <div>
//    <h3>{match.params.topicId}</h3>
//  </div>
//);

//class Profile extends Component {
//    render() {
 //       return (
 //           <div className="App">
//                <header className="App-header">
 //                   <h1 className="App-title">Мой топ фото</h1>
 //               </header>
 //               <p className="App-intro">Здесь будут мои самые залайканые фото</p>
//            </div>
//        )
//    }
//}

//export {Profile};

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year) // setYear -> getPhotos
  }
  renderTemplate = () => {
    const { photos, isFetching, error } = this.props

    if (error) {
      return <p className="error">Во время загрузки фото произошла ошибка</p>
    }

    if (isFetching) {
      return <p>Загрузка...</p>
    } else {
      return photos.map(entry => (
        <div key={entry.id} className="photo">
          <p>
            <img src={entry.sizes[0].url} alt="" />
          </p>
          <p>{entry.likes.count} ❤</p>
        </div>
      ))
    }
  }

  render() {
    const { year, photos } = this.props
    return (
      <div className="ib page">
        <p>
          <button className="btn" onClick={this.onBtnClick}>
            2020
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2019
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2018
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2017
          </button>{' '}
        </p>
        <h3>
          {year} год [{photos.length}]
        </h3>
        {this.renderTemplate()}
      </div>
    )
  }
}
Page.propTypes = {
year: PropTypes.number.isRequired,
photos: PropTypes.array.isRequired,
getPhotos: PropTypes.func.isRequired,
error: PropTypes.string,
isFetching: PropTypes.bool.isRequired,
}
