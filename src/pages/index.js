import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import '../assets/scss/layout/global.scss'
import 'normalize.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import '../assets/scss/layout/architectsStepper.scss'
import bg2 from '../images/bg2-min.jpg'
import img2 from '../images/Roofing_Edited_10-min.jpg'
import { Link } from 'gatsby'
import bgimg from '../images/ASU-min.jpg'
import pic1 from '../images/QS106_Edited_3-min.jpg'
import * as Icon from 'react-feather'
import '../assets/scss/layout/_main.scss'
import uofa from '../images/uofahonors-min.png'



import greenguard from '../images/greenguard logo (1).png'
import abaa from '../images/abaa.svg'
import icon2 from '../images/icon2.png'
import greenbuilding from '../images/greenbuilding.png'
import masterSpec from '../images/images.png'


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
      <div className='ArchStepperPage'>
                <img alt='background image' className='stepperimg' src={uofa}></img>
            <Header/>
        <div className='archStepper'>
            <div className='stepperPage' >
            <div className='img-containerHome'>
                <span>Architects/Specifiers</span>
            </div>
            <CardDeck id='cardDeck'>
                <a href='/architectsInsulation/'className='cardLink'>
                    <Card className='stepperCard'>
                        <Card.Img className='cardImg' variant="top" src={pic1} />
                        <Card.Body id='cardBody'>
                            <Card.Title id='cardTitle'>Spray Foam Insulation
                            <Icon.ExternalLink className='insulLink'/>
                            </Card.Title>
                                <Card.Text id='cardText'>
                                QUIK-SHIELD® Spray Foam Insulation is the most effective way to insulate the building envelope.
                                Available in 1/2lb open cell or 2lb closed cell insulation. 
                                <ul className='cardTextList'>
                                <div className='cardTextListTitle'>Benefits Include:</div>
                                    <li>Air-sealing and eliminating thermal shorts</li>
                                    <li>Superior energy performance</li>
                                    <li>Seamless air barrier</li>
                                </ul>
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a className='cardLink' href='/architectsRoofing/'>
                    <Card className='stepperCard'>
                        <Card.Img className='cardImg'  variant="top" src={img2} />
                        <Card.Body id='cardBody'>
                            <Card.Title id='cardTitle'>
                                Spray Foam Roofing Systems
                            <Icon.ExternalLink className='insulLink'/>
                            </Card.Title>
                            <Card.Text id='cardText'>
                            QUIK-SHIELD® Spray Foam Roofing provides a seamless system from roof edge to roof edge.
                                <ul className='cardTextList'>
                                <div className='cardTextListTitle'>Benefits Include:</div>
                                    <li className='cardTextList'>Air Barrier</li>
                                    <li className='cardTextList'>Self- flashing around penetrations</li>
                                    <li className='cardTextList'>Thermal resistance</li>
                                    <li className='cardTextList'>No mechanical fasteners</li>
                                    <li className='cardTextList'>Cool Roof- reduces expansion and contraction</li>
                                </ul>
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </CardDeck>
        </div>
        <div className='isoBand'>
            <img alt='arch stepper' className='ISO1' src={abaa}></img>
            <img alt='arch stepper' className='ISO12' src={greenguard}></img>
            <img alt='arch stepper' className='ISO' src={icon2}></img>
            <img alt='arch stepper' className='ISO11' src={masterSpec}></img>
            <img alt='arch stepper' className='ISO1' src={greenbuilding}></img>

        </div>
        </div>
        </div>
    )
  }
}

export default IndexPage

