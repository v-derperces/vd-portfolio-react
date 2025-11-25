import React from 'react';

function Contact(){
    return (
        <div className="contact fs-5 text-muted">
            <p>I’m always happy to connect with fellow developers, collaborators, or anyone interested in my projects.</p>
            <p>
                Whether you have a question, a potential opportunity, or just want to say hi, feel free to reach out via email, LinkedIn, or GitHub.</p>
            <div className="contact-links d-flex flex-column flex-md-row mt-5 gap-3 gap-md-5 justify-content-center">
                <a href="mailto:v.derperces-dev@outlook.com"
                   className="contact-item d-flex align-items-center justify-content-center gap-2 text-muted">
                    <img src="/assets/images/email.svg" alt="Email" className="social-icon" />
                    Email
                </a>

                <a href="https://www.linkedin.com/in/viviane-d" target="_blank"
                   className="contact-item d-flex align-items-center justify-content-center gap-2 text-muted">
                    <img src="/assets/images/LI-In-Bug.png" alt="LinkedIn" className="social-icon" />
                    LinkedIn
                </a>

                <a href="https://github.com/v-derperces" target="_blank"
                   className="contact-item d-flex align-items-center justify-content-center gap-2 text-muted">
                    <img src="/assets/images/github-mark.svg" alt="GitHub logo" className="social-icon" />
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default Contact;
