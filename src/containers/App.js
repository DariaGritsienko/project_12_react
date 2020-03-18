import React, {Component} from "react"
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions'
import './App.css'
// import { Add } from './components/Add'
// import { News } from './components/News'
// class App extends React.Component {
//     state = {
//         news: null,
//         isLoading: false,
//     }
//     static getDerivedStateFromProps(props, state) {
//         let nextFilteredNews
//         if (Array.isArray(state.news)) {
//             nextFilteredNews = [...state.news]
//             nextFilteredNews.forEach((item) => {
//                 if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
//                     item.bigText = 'СПАМ'
//                 }
//             })
//             return {
//                 filteredNews: nextFilteredNews
//             }
//         }
//         return null
//     }
//
//     componentDidMount() {
//         this.setState({ isLoading: true })
//         fetch('http://localhost:3000/data/newsData.json')
//             .then(response => {
//                 return response.json()
//             })
//             .then(data => {
//                 this.setState({ isLoading: false, news: data })
//             })
//     }
//     handleAddNews = data => {
//         const nextNews = [data, ...this.state.news]
//         this.setState({ news: nextNews })
//     }
//     render() {
//         const { news, isLoading } = this.state
//         return (
//             <React.Fragment>
//                 <Add onAddNews={this.handleAddNews} />
//                 <h3>Новости</h3>
//                 {isLoading && <p>Загружаю...</p>}
//                 {Array.isArray(news) && <News data={news} />}
//             </React.Fragment>
//         )
//     }
// }
class App extends Component {
  render() {
    const { user, page, getPhotosAction, handleLoginAction } = this.props
    return (
      <div className="app">
        <Page
          photos={page.photos}
          year={page.year}
          isFetching={page.isFetching}
          error={page.error}
          getPhotos={getPhotosAction}
        />
        <User
          name={user.name}
          error={user.error}
          isFetching={user.isFetching}
          handleLogin={handleLoginAction}
        />
      </div>
    )
  }
}
const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    handleLoginAction: () => dispatch(handleLogin()),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)



