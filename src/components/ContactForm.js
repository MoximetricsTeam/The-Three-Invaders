import React from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  return (
    <FormWrapper>
      <form name='contact' method='POST' data-netlify='true'>
        <p className='paragraph'>
          If you'd like to get in touch with Professor Abdulrauf please fill out
          the form below along with the purpose of your inquiry and we will
          reach out to you as soon as possible.
        </p>
        <p>
          <label>
            <input placeholder='Name' type='text' name='name' />
          </label>
        </p>
        <p>
          <label>
            <input placeholder='Email' type='email' name='email' />
          </label>
        </p>

        <p>
          <label>
            <textarea placeholder='Message' name='message'></textarea>
          </label>
        </p>
        <p>
          <button className='form-submit' type='submit'>
            Send
          </button>
        </p>
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  text-align: center;
  font-family: 'lato', sans-serif;
  color: var(--textColorLight);
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-content: center;

  .paragraph {
    max-width: 45rem;
  }

  .form-submit {
    background-color: var(--White);
    padding: 0.2rem 2rem;
    cursor: pointer;
    border: none;
    border-radius: 2px;
  }

  form {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  textarea,
  input {
    padding-left: 0.5rem;
  }
`;

export default ContactForm;
