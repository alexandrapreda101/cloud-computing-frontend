import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function AddReservation() {
    const handleAddReservation = async (e) => {
        const reservationName = document.getElementById('reservationName').value;
        const reservationDate = document.getElementById('reservationDate').value;
        const reservationRoom = document.getElementById('reservationRoom').value;

        try {
            let response = await axios.post(
                `${process.env.REACT_APP_API_URL}/reservations`,
                {
                    reservationName,
                    reservationDate,
                    reservationRoom,
                });
            if (response.status === 200) {
                alert("The reservation was added.");
                window.location.reload();
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
            <div class='h4  mx-3 my-2'>Make a reservation</div>
            <br></br>
            <form>
                <div class="mb-3">
                    <label for="reservationName" class="form-label">Reservation Name</label>
                    <input type="reservationName" class="form-control" id="reservationName" aria-describedby="reservationName"></input>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label for="reservationDate" class="form-label">Reservation Date</label>
                    <input type="reservationDate" class="form-control" id="reservationDate"></input>
                </div>
                <div class="form-group mb-3">
                    <label for="reservationRoom" class="form-label">Reservation Room</label>
                    <select class="form-control" id="reservationRoom">
                        <option>The Secret Lab</option>
                        <option>The Puzzle Box</option>
                        <option>Solve and Wander</option>
                        <option>Escape Frontier</option>
                    </select>
                </div>
                <button type="button" class="btn btn-primary" onClick={handleAddReservation} >Create</button>
            </form >
        </div >
    )
}

export default AddReservation;