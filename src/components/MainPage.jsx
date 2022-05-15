// MainPage.jsx
import React from 'react';

import Header from './Header';
import Form from './Form';
import ReservationsList from './ReservationsList';
import AddReservation from './AddReservation';

function MainPage() {
    return (
        <div id="MainPage">
            <Header />
            <div class="row">
                <ReservationsList />
                <Form />
                <AddReservation />
            </div>
        </div>
    );
}

export default MainPage;