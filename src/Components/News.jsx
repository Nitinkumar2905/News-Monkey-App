import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country : 'in',
    pageSize : 4,
    category : 'general'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  constructor(){
    super()
    this.state={
      articles : [],
      loading : false,
      page : 1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f7fee7c1c75541a7a60f21f14952338f&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false})
}

  handleNextClick=async()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
      // alert('not available')
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f7fee7c1c75541a7a60f21f14952338f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
      let data = await fetch(url)
      let parsedData = await data.json()
      console.log(parsedData)
      this.setState({articles: parsedData.articles})
      this.setState({
        page : this.state.page + 1,
        articles: parsedData.articles,
        loading : false
      })
    }
  }

  handlePrevClick=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f7fee7c1c75541a7a60f21f14952338f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
    this.setState({
      page : this.state.page - 1,
      articles: parsedData.articles,
      loading : false
    })

  }
  render() {
    return (
      <div className='container my-3' style={{border: '0px solid red'}}>
        <h1 className='my-3 text-center'>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
              return <div className='col-md-3' key={element.url}>
                        <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                      </div>
          })}
            
        </div>

        <div className="container d-flex justify-content-between">
          {!this.state.loading && <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous </button>} 
          {!this.state.loading && <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>}
        </div>
      </div>
    )
  }
}

export default News
