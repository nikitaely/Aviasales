import React from "react"
import './Flight.scss'

export default function Flight ({origin, destination, date, duration, stops}) {
    
    const hoursDuration =  Math.floor(duration / 60)
    const minutesDuration = duration % 60

    const departureDate = new Date(date)
    const arrivalDate = new Date(departureDate.getTime());
    arrivalDate.setMinutes(arrivalDate.getMinutes() + duration)

    function timeCor(time) {
        if (time < 10) {
            return '0' + time
        }
        return time
    }

    function countTransfers(count) {
        switch (count) {
            case 0: return 'ПЕРЕСАДОК'
            case 1:  return 'ПЕРЕСАДКА'
            default: return 'ПЕРЕСАДКИ'
        }
    }

    

    return (
        <div className="flight">
            <div className="flight-container">
                <span className="grey-text">{origin} - {destination}</span>
                <span>{timeCor(departureDate.getHours())}:{timeCor(departureDate.getMinutes())} - {timeCor(arrivalDate.getHours())}:{timeCor(arrivalDate.getMinutes())}</span>
            </div>
            <div className="flight-container">
                <span className="grey-text">В ПУТИ</span>
                <span>{timeCor(hoursDuration)}ч {timeCor(minutesDuration)}м</span>
            </div>
            <div className="flight-container">
                <span className="grey-text">{stops.length} {countTransfers(stops.length)}</span>
                <span>{stops.join(',')}</span>
            </div>
        </div>
    )
}