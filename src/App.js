import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../src/pages/Home.jsx'
import aisha from '../src/avatar-aiysha.jpg'
import kady from '../src/avatar-kady.jpg'
import arthur from '../src/avatar-arthur.jpg'
import thing from '../src/thing.png'
import top from '../src/2-layers.png'
import bottom from '../src/3-layers.png'



function App() {
  return (
    <div className="App">







      <section className="main-container">
        <header className="header">
          Delivering real results for top companies. Some of our
          <span> success stories.</span>
        </header>
        <img className="top" src={top}></img>

        <img className="bottom" src={bottom}></img>




        <div className="box-container">


          <div className="box">
            <img className="thing" src={thing}></img>

            “The team perfectly fit the specialized skill set required. They focused
            on the most essential features helping us launch the platform eight months
            faster than planned.”
            <h2>Kady Baker</h2>
            <span>Product Manager at Bookmark</span>
            <img className="img-poeple" src={kady}></img>


          </div>

          <div className="box">
            <img className="thing" src={thing}></img>

            “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”
            <h2>Aiysha Reese</h2>
            <span>Founder of Manage</span>
            <img className="img-poeple" src={aisha}></img>


          </div>
          <div className="box">
            <img className="thing" src={thing}></img>


            “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”

            <h2>Arthur Clarke</h2>
            <span>Co-founder of MyPhysio</span>


            <img className="img-poeple" src={arthur}></img>
          </div>


        </div>





      </section>




    </div>
  );
}

export default App;
