import React from 'react'
import styled from 'styled-components'

const FormContact = ({data}) => {
    return(
        <FormContainer data-aos="fade-up"  data-aos-delay="1200" data-aos-duration="800">
                    <h2>{data.sanityContactPage.mailText.es}</h2>
                    <form name='contact' netlify>
                        <div className='input'>
                            <label htmlFor='nombre'>Nombre</label>
                            <input id='nombre' type='text' name='nombre' />
                        </div>
                        <div className='input'>
                            <label htmlFor='email'>Email</label>
                            <input id='email' type='email' name='e-mail' />
                        </div>
                        <div className='input'>
                            <label htmlFor='tel'>Teléfono</label>
                            <input id='tel' type='number' name='phone' />
                        </div>
                        <div className='textArea'>
                            <label htmlFor='mensaje'>Mensaje</label>
                            <textarea id='mensaje' type='text' name='mensaje'></textarea>
                        </div>
                        <div className='send'>
                            <button type='submit'>Enviar</button>
                        </div>
                    </form>
        </FormContainer>
    )
}

const FormContainer = styled.section`
padding: 20px;
    h2 {
        text-align: center;
        margin-bottom: 50px;
        padding-top: 20px;   
        font-weight : normal;
    }
    form {
        max-width: 750px;
        margin: 0 auto;
        .input {
            display: flex;
            margin-bottom: 50px;
            label {
                display: inline-block;
                width: 100px;
                font-weight: bold;
            }
            input {
                width: 100%;
                display: inline-block;
                background: none;
                border-left: none;
                border-top: none;
                border-right: none;
                border-bottom: solid 1px var(--black);
                outline: none;
            }
        }
        .textArea {
            label {
                display: block;
                width: 100px;
                font-weight: bold;
            }
            textarea {
                width: 100%;
                margin-top: 15px;
                background-color: rgba(210, 209, 185, .45);
                height: 200px;
                outline: none;
                border: none;
            }
        }
        .send {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 50px;
            button {
                background-color: #A9A97F;
                padding: 10px 30px;
                font-weight: bold;
            }
        }
    }
` 


export default FormContact