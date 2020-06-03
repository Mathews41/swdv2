import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { graphql } from 'gatsby'
import { Carousel } from 'react-bootstrap'

//images
import bg1 from '../images/bg1-min.jpg'
import bg4 from '../images/bg4-min.jpg'
import labshot from '../../src/images/labShot-min.jpg'
import icon2 from '../images/icon2.png'
import ASU from '../images/ASU-min.jpg'
import uofahonors from '../../src/images/uofahonors-min.png'


import PropTypes from 'prop-types'


const propTypes = {
  pause: PropTypes.oneOf(['hover', false])
}


class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      width: 0,
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);

    this.handleWindowSizeChange() // Set width
    window.addEventListener('resize', this.handleWindowSizeChange)
  }
  
  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);

    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  render(props) {
    const { width } = this.state;
    const isMobile = width <= 600;
    console.log(width, ' px')
    const {data} = this.props;
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <div className='carContainer'>
            <Carousel data-pause='false' className='carousel'>
              <Carousel.Item className='item'>
                <img className='car-img' src={bg1} alt= 'this is the first slide'/>
                <Carousel.Caption className='caption'>
                  <h3>St. Joseph Hospital</h3>
                  <h5 className='carTag'>Denver, Colorado</h5>
                  <button href='/projects/' id='button'><h3>Learn More</h3></button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='item'>
                <img className='car-img' src={uofahonors} alt= 'this is the first slide'/>
                <Carousel.Caption className='caption'>
                  <h3> University of Arizona Honors Student Housing
                  </h3>
            <h5 className='carTag'>Tuscon, Arizona</h5>
                  <button href='/projects/' id='button'><h3>Learn More</h3></button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='item'>
                <img className='car-img' src={ASU} alt= 'this is the first slide'/>
                <Carousel.Caption className='caption'>
                  <h3>Arizona State University Greek Leadership Student Housing </h3>
                  <h5 className='carTag'>Tempe, Arizona</h5>
                  <button href='/projects/' id='button'><h3>Learn More</h3></button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='item'>
              <img className='car-img' src={bg4} alt= 'this is the second slide'/>
              <Carousel.Caption className='caption'>
              <h3>The Church of Jesus Christ of Latter-day Saints Temple</h3>
              <h5 className='carTag'>Gilbert, Arizona</h5>
                  <button href='/projects/'id='button'><h3>Learn More</h3></button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div className='lpImgContainer'>
            <img alt='swd chemical lab shot'className='secondaryimg' src={labshot}/>
            <img className='lplogo' src={icon2}/>
            </div>
            </div>
            <div className='lp2'>
              <h3> Learn From The Polyurethane Experts On Our YouTube Channel! </h3>
              <div className='videoCont'>
            <iframe width="424" height="238" src="https://www.youtube.com/embed/PzoNv7RF-Kc?allowfullscreen=true" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="1280" height="720" src="https://www.youtube.com/embed/pMJPh2sd-uc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="270" height="152" src="https://www.youtube.com/embed/zbXsn2G9VEE" frameborder="0" allowfullscreen='1' allow='autoplay'></iframe>
            </div>
            </div>
            <Header/>
            <Main/>
            <Footer/>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

