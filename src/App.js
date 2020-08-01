import React, { useEffect, useState } from 'react';
import Gallary from './components/Gallary';

import './App.css';

const App = () => {
  //by default i have set lat and lng for taj mahal
  const [lat, setLat] = useState(27.1751);
  const [lng, setLng] = useState(78.0421);

  useEffect(() => {
    function initMap() {
      var myLatlng = { lat: lat, lng: lng };
      console.log('window', window);
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
        console.log('lat', lat, 'lng', lng);
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

  console.log('window object', window);
  return (
    <div className='container mt-4 '>
      <h4 className=' mb-4 title '>
        <i class='fa fa-hand-o-right pr-3 text-warning' aria-hidden='true'></i>
        Drop a Marker and see (public) images that have been taken at that
        location{' '}
      </h4>
      <div id='map' className='mb-4'></div>
      <Gallary lat={lat} lon={lng} />
      <footer className='text-warning text-center mb-3'>
        Made by Mohit Singh Negi with{' '}
        <i class='fa fa-heart text-danger' aria-hidden='true'></i>
      </footer>
    </div>
  );
};

export default App;
