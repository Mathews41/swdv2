import React, {useState, useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import '../assets/scss/layout/contact.scss'


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/send', {name, email, message}).then((response)=>{
            if (response.data.msg === 'hell yes'){
                swal({
                    icon: "success",
                    title: "Message Sent", 
                    text: "Thank you for your interest! We will be in touch with you soon."
                  })
                resetForm()
            }else if(response.data.msg === 'fail'){
                swal({
                    icon: "error",
                    title: "Message Error", 
                    text: "Please make sure that you are entering correct information."
                  })
            }
        })
    };

   const resetForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    };
    return (
        <div>
            <h3></h3>
            <form onSubmit={handleSubmit}  id="contact-form" method="POST" action="/send-email">
    <div className="form-group">
        <label className='formLabel' for="name">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" />
    </div>
    <div className="form-group">
        <label className='formLabel' for="exampleInputEmail1">Email address</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label className='formLabel' for="message">Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}  className="form-control" rows="3" id="message"></textarea>
    </div>
    <button type="submit" value='Submit' className="contactButton ">Submit</button>
</form>
        </div>
    )
}
