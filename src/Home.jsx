import React, {useState} from "react";
import { BsCheck } from "react-icons/bs";
import deal from './assets/deal.jpg'
import { FaStar } from "react-icons/fa";



export default function Home() {
      const [buttonColor, setButtonColor] = useState(false)
      const [bookingInfo, setBookingInfo] = useState({
        name: '',
        email: '',
        checkIn: '',
        checkOut: '',
        guests: 1,
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingInfo(prevInfo => ({
          ...prevInfo,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your booking submission logic here
        console.log('Booking Info:', bookingInfo);
      };

      let inspData = [
        {'photo' : 'https://halalholidaycheck.com//assets/public/img/types/conservative-villa.jpg',
          'text' : 'Private Villas'},
        {'photo' : 'https://halalholidaycheck.com//assets/public/img/types/islamic-resorts.jpg',
          'text' : 'Islamic Resorts'},
        {'photo' : 'https://halalholidaycheck.com//assets/public/img/types/thermal-hotels.jpg',
          'text': 'Thermal Spa Hotels'},
        {'photo' : 'https://halalholidaycheck.com//assets/public/img/types/islamic-ski-hotels.jpg',
          'text': 'Islamic Ski Hotels'}
      ]

      let earlyResData = [
        {
          'photo' : 'https://halalholidaycheck.com/images/properties/algora-halal-hotel-alanya-main.webp?w=270&h=160',
          'hotelName' : 'Algora Halal Hotel',
          'loc' : 'Alanya, Turkey',
          'rating' : '7.2'
        },
        {
          'photo' : 'https://halalholidaycheck.com/images/properties/the-oba-hotel-bodrum-main.webp?w=270&h=160',
          'hotelName' : 'The Oba Hotel Bodrum ',
          'loc' : 'Bodrum, Turkey',
          'rating' : '8.9'
        },
        {
          'photo' : 'https://halalholidaycheck.com/images/properties/modern-saraylar-hotel-alanya.webp?w=270&h=160',
          'hotelName' : 'Modern Saraylar Hotel ',
          'loc' : 'Alanya, Turkey',
          'rating' : '7.5'
        },
        {
          'photo' : 'https://halalholidaycheck.com/images/properties/adenya-resort-spa-hotel-alanya-main.webp?w=270&h=160',
          'hotelName' : 'Adenya Resort Hotel',
          'loc' : 'Alanya, Turkey',
          'rating' : '8.9'
        }
      ]

      let topCityData = [
        {
          'photo' : 'https://halalholidaycheck.com/assets/public/img/cities/istanbul.jpg',
          'city' : 'Istanbul',
          'country' : 'Turkey'
        },
        {
          'photo' : 'https://halalholidaycheck.com/assets/public/img/cities/nevsehir.jpg',
          'city' : 'Nevsehir',
          'country' : 'Turkey'
        },
        {
          'photo' : 'https://halalholidaycheck.com/assets/public/img/cities/alanya.jpg',
          'city' : 'Alanya',
          'country' : 'Turkey'
        }
      ]
  return (
    <>
    <div>
      <div className="home-container">
        <h2>Halal Holidays for Muslim Travellers</h2>
        <h3>Experts in Booking Muslim-friendly Travel and Tour Packages</h3>
        <button className="exploreBtn">Explore Vacation Plans</button>
        <div className="booking-container">
          <div className="booking-container-1">
            <button style={{backgroundColor: buttonColor ? '#1b4747' : 'white' , color:buttonColor ? 'white' : '#1b4747', fontWeight: '600'}} onClick={()=> {setButtonColor(false)}}>HOTELS</button>
            <button style={{backgroundColor: buttonColor ? 'white' : '#1b4747' , color:buttonColor ? '#1b4747' : 'white',  fontWeight: '600'}} onClick={()=> {setButtonColor(true)}}>TOURS</button>
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" placeholder={`Where to?`} name="name" value={bookingInfo.name} onChange={handleChange} required />
                </label>
                <label>
                  <input type="date"  name="checkIn" value={bookingInfo.checkIn} onChange={handleChange} required />
                </label>
                <label>
                  <input type="date" name="checkOut" value={bookingInfo.checkOut} onChange={handleChange} required />
                </label>
                <label>
                  <input type="number" name="guests" value={bookingInfo.guests} onChange={handleChange} min="1" required />
                </label>
                <div className="searchBtn">
                  <button type="submit">Search Now</button>
                  <div className="check"><BsCheck /></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="dealOfWeek">
        <h3>Deal of the Week</h3>
        <div className="image-frame">
          <img src={deal} alt="" />
        </div>
        <p>Halal Holiday</p>
      </div>
      <div className="inspiration">
        <h3>Halal Travel Inspiration</h3>
        <p>Inspiring properties for amazing halal experiences</p>
        <div className="inspiration-flex">
          {inspData.map(item => {
            return(
              <div className="insp-inner">
                <div>
                  <img src={item.photo}/>
                </div>
                <p>{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="early-res">
        <h3>2024 Early Reservations</h3>
        <p>Unmissable bookings for un forgettable holidays</p>
        <div className="early-rez-flex">
          {earlyResData.map(item => {
            return(
              <>
                <div className="res-container">
                  <div className="eff">
                    <div>
                      <p style={{fontSize: '11px'}}>from</p>
                      <p style={{fontSize: '15px'}}>₺7776</p>
                      <p style={{fontSize: '11px'}}>per night</p>
                    </div>
                    <img src={item.photo} alt="" />
                  </div>
                  <div className="hotel-name">
                    <div>
                      <p className="name">{item.hotelName}</p>
                      <p className="loca">{item.loc}</p>
                    </div>
                    <div className="rating">
                      <p>{item.rating}</p>
                    </div>
                  </div>
                  <div className="star">
                    <FaStar style={{color: 'rgb(228, 207, 18)'}}/>
                    <p> . 5/5</p>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div className="tour">
        <h3>Top Cities</h3>
        <p>Your next halal travel destination</p>
        <div className="tour-inner">
          {
            topCityData.map(item => {
              return(
                <div className="city-container">
                  <div className="shadow">
                    <p>{item.city}, {item.country}</p>
                  </div>
                  <img src={item.photo} alt="" />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}