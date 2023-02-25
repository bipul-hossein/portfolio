import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section from '../section/Section';
import { Bounce } from 'react-reveal';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_cgcafpu', 'template_9ewx5u4', form.current, 'MaBkrTfntxqhH9D89')
            .then((result) => {
                console.log(result.text);
                toast.success('Message send Successfully.')
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div style={{ background: '#2c323f' }}>
            <div className="contact-form-wrapper text-center w-1/2 mx-auto pb-24">

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="input input-bordered w-full" placeholder="Type your Name" />
                    <input type="email" name="user_email" className="input input-bordered w-full my-3" placeholder="Type your Email" />
                    <textarea name="message" className="w-full textarea textarea-bordered h-24" placeholder="Your Message" />
                    <input type="submit" value="Send" className='btn w-full mt-3 btn-info' />
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ContactForm;