/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useState } from 'react';
import styled from 'styled-components';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Contact = () => {
/*   const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    // Validate the form data
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(formData.email) === false) 
    {
      errors.email = 'Invalid Email';
    }
  
    if (!formData.password) {
      errors.password = 'Message is required';
    }

    if (Object.keys(errors).length === 0) {
      // Submit the form data
      console.log(formData);
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
              console.log('Response succeeded!')
              setErrors({});
              setFormData({
                name: '',
                email: '',
                message: ''
              })
          }
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      setErrors(errors);
    }
  };
 */

  return (
    <Layout title="Contact">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Contact.</h1>
          <article>
            <p>
              Get in touch or shoot me an email directly on{' '}
              <b>komalsingh54@gmail.com</b> or <b>+44 7469 516294</b>
            </p>
          </article>
          <br />
         {/*  <form onSubmit={handleSubmit}>
            <div className="fields">
              <div className="field half">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                  aria-required="true"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                {errors.name && <div className="error">{errors.name}</div>}

              </div>
              <div className="field half">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  aria-required="true"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <div className="error">{errors.name}</div>}

              </div>
              <div className="field">
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  className="form-control"
                  placeholder="Message"
                  aria-required="true"
                  value={formData.message}
                  onChange={handleInputChange} required
                />
                {errors.message && <div className="error">{errors.name}</div>}

              </div>
            </div>
            <button
              className="btn btn-default"
              aria-label="Send Message"
              type="submit"
            >
              Send Message
            </button>
          </form> */}
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/" className="mt-3 mb-5">
          Go Back Home
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  input,
  textarea {
    background: transparent;
    color: var(--cw) !important;
    margin-bottom: 2rem;
    box-shadow: none !important;
    resize: none;
    padding: 24px 21px !important;
    border-color: var(--border-color) !important;
    &:focus {
      background-color: var(--bg);
    }
  }
  button {
    font-size: calc(var(--font-sm) + 1.1px);
    background: var(--cw);
    border: none;
    color: var(--bg);
    border-radius: 5px;
    padding: 15px 40px;
    margin-bottom: 3rem;
  }
  form {
    width: 60%;
  }
  @media (max-width: 585px) {
    form {
      width: 100% !important;
    }
  }
  @media (max-width: 989px) {
    form {
      width: 100% !important;
    }
  }
  @media (max-width: 220px) {
    form {
      width: 100% !important;
    }
  }
`;

export default Contact;
