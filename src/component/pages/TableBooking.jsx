import React from 'react'
import '../../style/style.css'

function TableBooking() {
  
  return (
<div className='reservation-section'>
  <div className="reservation-header text-center mb-5">
    <h4 className="section-subtitle">Reservation</h4>
    <h2 className="section-title">Need Reservation? Book Your Table Now</h2>
  </div>

  <form className="reservation-form">
    <div className="form-grid">
      {/* Phone Number */}
      <div className="form-group">
        <label htmlFor="number" className="form-label">Phone Number</label>
        <input 
          type="tel" 
          id="number" 
          className="form-input"
          placeholder="+1 (___) ___-____"
          // {...register("number", { required: "*Number is required" })}
        />
        {/* {errors.number && <span className="error-message">{errors.number.message}</span>} */}
      </div>

      {/* Number of Persons */}
      <div className="form-group">
        <label htmlFor="person" className="form-label">Number of Persons</label>
        <select 
          id="person" 
          className="form-input"
          // {...register("person", { required: "*Please select number of persons" })}
        >
          <option value="">Select persons</option>
          <option value="1">1 Person</option>
          <option value="2">2 Persons</option>
          <option value="3-4">3-4 Persons</option>
          <option value="5-6">5-6 Persons</option>
          <option value="7+">7+ Persons</option>
        </select>
        {/* {errors.person && <span className="error-message">{errors.person.message}</span>} */}
      </div>

      {/* Date */}
      <div className="form-group">
        <label htmlFor="date" className="form-label">Date</label>
        <input 
          type="date" 
          id="date" 
          className="form-input"
          // {...register("date", { required: "*Date is required" })}
        />
        {/* {errors.date && <span className="error-message">{errors.date.message}</span>} */}
      </div>

      {/* Time */}
      <div className="form-group">
        <label htmlFor="time" className="form-label">Time</label>
        <input 
          type="time" 
          id="time" 
          className="form-input"
          // {...register("time", { required: "*Time is required" })}
        />
        {/* {errors.time && <span className="error-message">{errors.time.message}</span>} */}
      </div>
    </div>

    <button type="submit" className="submit-btn">
      BOOK NOW
    </button>
  </form>
</div>
  )
}

export default TableBooking