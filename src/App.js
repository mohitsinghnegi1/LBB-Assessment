import React, { useEffect, useState } from 'react';
import Gallary from './components/Gallary';
import Button from './components/button/Button';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  //by default i have set lat and lng for taj mahal
  const [lat, setLat] = useState(27.1751);
  const [lng, setLng] = useState(78.0421);

  //input box lat , lng
  const [latInput, setLatInput] = useState();
  const [lngInput, setLngInput] = useState();

  useEffect(() => {
    function initMap() {
      var myLatlng = { lat: lat, lng: lng };

      var map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatlng,
      });

      // Create the initial InfoWindow.
      var infoWindow = new window.google.maps.InfoWindow({
        content: 'Click the map to get Lat/Lng!',
        position: myLatlng,
      });
      infoWindow.open(map);

      // Configure the click listener.
      map.addListener('click', function (mapsMouseEvent) {
        // Close the current InfoWindow.
        infoWindow.close();
        let lat = mapsMouseEvent.latLng.lat();
        let lng = mapsMouseEvent.latLng.lng();
        setLat(lat);
        setLng(lng);

        // Create a new InfoWindow.
        infoWindow = new window.google.maps.InfoWindow({
          position: mapsMouseEvent.latLng,
        });
        infoWindow.setContent(mapsMouseEvent.latLng.toString());
        infoWindow.open(map);
      });
    }
    initMap();
  }, []);

  const searchImages = (e) => {
    e.preventDefault();

    console.log('type', !isNaN(latInput), !isNaN(lngInput), latInput, lngInput);

    if (lngInput && latInput && !isNaN(lngInput) && !isNaN(latInput)) {
      setLng(lngInput);
      setLat(latInput);
      return;
    }

    alert('Please enter valid coordinates');
  };

  return (
    <div className='container mt-4 '>
      <h4 className=' mb-4 text-white text-center '>
        <i class='fa fa-hand-o-right pr-3 text-warning' aria-hidden='true'></i>
        Drop a marker and see public images that have been taken at that
        location{' '}
      </h4>
      <div id='map' className='mb-4'></div>

      {/* Additional Search option */}
      <p className='text-white text-center'>
        or Enter Coordinates Manually and Click Search Button{' '}
      </p>
      <div className='d-md-flex justify-content-between'>
        <input
          type='number'
          placeholder='Enter latitude'
          value={latInput}
          onChange={(e) => setLatInput(e.target.value)}
        />
        <input
          type='number'
          placeholder='Enter Longitude'
          value={lngInput}
          onChange={(e) => setLngInput(e.target.value)}
        />
        <Button text='SEARCH' searchImages={searchImages} />
      </div>

      <Gallary lat={lat} lon={lng} />
      <Footer />
    </div>
  );
};

export default App;
