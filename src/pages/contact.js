import React from 'react'
import Form from 'react-bootstrap/Form'
import Header from '../components/Header'
import '../assets/scss/layout/contact.scss'
import * as Icon from 'react-feather'

export default function contact() {
    return (
        <div className='page'>
            <Header></Header>
            <div className='form-container'>
            <Form id='form'>
                <Form.Group className="exampleForm">
                    <h1>Contact Us</h1>
                    <Form.Control id='formControl'type="name" placeholder="Name" />
                    <Form.Control id='formControl'type="email" placeholder="Name@example.com" />
                </Form.Group>
                <Form.Group className="exampleForm">
                    <Form.Control id='formControl' as="textarea" rows="6" placeholder='Start typing here...'/>
                <button className='contactButton'>Submit</button>
                </Form.Group>
                </Form>
                <div className='contactloc'>
                    <div className='location'>
                        <Icon.MapPin className='contactIcon'/>
                        <h3>SWD Urethane</h3>
                        <sub>Mesa, AZ</sub>
                    </div>
                    <div className='number'>
                        <Icon.MapPin className='contactIcon'/>
                        <h3>800-828-1394</h3>
                    </div>
                    <div className='email'>
                        <Icon.MapPin className='contactIcon'/>
                        <h3>email for swd</h3>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
