// ReservationsList.jsx
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function ReservationsList() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `${process.env.REACT_APP_API_URL}/reservations`,
            );
            console.log(result.data)

            if (result.data) {
                let reservationsArray = result.data.data;
                setReservations(result.data.data);
            }
            else console.log("No result")
        };

        fetchData();
    }, []);
    return (
        <div id="ReservationsList " class="col-4 mx-3 my-4 px-1 py-1">
            <div class='h4 text-start mx-3 my-2'>Latest reservations</div>
            <ul class="list-group  text-start">
                {reservations.length ? reservations.map((reservation, reservationIds) => (
                    <li key={reservation.reservationID} class="list-group-item">
                        {reservationIds !== reservations.length - 1 ? (
                            <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                        ) : null}
                        <span class="font-medium">
                            <div>
                                {`Reservation Code:${reservation.reservationID}`}
                            </div>
                            {`${reservation.reservationName} booked the ${reservation.reservationRoom} room on: ${reservation.reservationDate}.`}
                        </span>
                    </li>
                )) :
                    <span>No reservations yet</span>
                }
            </ul>
        </div>
    );
}

export default ReservationsList;