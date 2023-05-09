import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props
    return (
      <>
        <div className="card my-2" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://data1.ibtimes.co.in/en/full/784804/sony-shut-pixelopus-developer-video-game-concrete-genie.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{description}....</p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem
