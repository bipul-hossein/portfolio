import React from 'react';
import { Bounce } from 'react-reveal';
import Section from '../section/Section';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div id="contact" style={{ background: '#2c323f' }}>
            <div className="contact-form-wrapper text-center pb-24">
                <Section title="Contact">
                    <Bounce cascade>
                        <ContactForm></ContactForm>
                    </Bounce>
                </Section>
            </div>
        </div>
    );
};

export default Contact;