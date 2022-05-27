import React from 'react';
import Countdown from 'react-countdown';

import simpsons from '../assets/images/simpsons.png';

export default function Main() {
  return (
    <main className="main">
      <section className="container_main">
        <img src={simpsons} alt="simpsons" className="simpsons_img" />
        <p className="text_data">
          Launches on <span className="text_number">2nd</span> of June
        </p>
        <div className="timer_block">
          <Countdown
            date={Date.parse('02 Jun 2022 00:00:00 GMT')}
            className="timer"
          />
        </div>
        <div className="data_names">
          <p>Days</p>
          <p>Hours</p>
          <p>Min</p>
          <p>Sec</p>
        </div>
      </section>
    </main>
  );
}
