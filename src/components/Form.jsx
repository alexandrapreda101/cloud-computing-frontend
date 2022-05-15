import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { DEFAULT_MAIL, DEFAULT_SENDER_NAME } from '../utils/constants';


function Form() {
    const handleMessageSend = async (e) => {
        const reservationName = document.getElementById('reservationID').value;
        const receiverMail = document.getElementById('email').value;
        const messageContent = document.getElementById('message').value;

        try {
            let response = await axios.post(
                `${process.env.REACT_APP_API_URL}/reminders/send`,
                {
                    senderName: DEFAULT_SENDER_NAME,
                    senderMail: DEFAULT_MAIL,
                    receiverMail,
                    messageContent,
                    reservationName
                });
            if (response.status === 200) {
                alert("Your message was sent.");
            }
            else console.log(response.status)
        }
        catch (error) {
            alert('Something went wrong');
            console.log(error);
        }
    }

    return (
        <div class="col-3 mx-4 my-4 px-1 py-1">
            <div class='h4  mx-3 my-2'>Send reminders</div>
            <br></br>
            <form>
                <div class="mb-3">
                    <label for="reservationID" class="form-label">Reservation Number</label>
                    <input type="reservationID" class="form-control" id="reservationID" aria-describedby="reservationID"></input>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Receiver Email</label>
                    <input type="email" class="form-control" id="email"></input>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Email Content</label>
                    <div class="input-group">
                        <span class="input-group-text">Title</span>
                        <textarea class="form-control" aria-label="textarea message" id="message"></textarea>
                    </div>
                </div>
                <button type="button" class="btn btn-primary" onClick={handleMessageSend} >Send</button>
            </form>
        </div>
    )
}

export default Form;