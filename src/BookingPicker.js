import React from 'react';
import DatePicker from "react-datepicker";
import Schedule from "./Schedule.js";
import BookingForm from "./BookingForm.js";



class BookingPicker extends React.Component{
    render(){
        return(
            <div>
                <div id="booking_picker" className="container">
                    <div className="col-12">
                            <div className="row">
                                <div className="table_set_picker col-6" >
                                    <label htmlFor="tablet_set">Tablet_set: </label>
                                    <select onChange={(e) => {this.props.handlerTableset(e.target.value)}}>
                                        <option value="1">1 table_set</option>
                                        <option value="2">2 table_sets</option>
                                        <option value="3">3 table_sets</option>
                                        <option value="4">4 table_sets</option>
                                        <option value="5">5 table_sets</option>
                                        <option value="6">6 table_sets</option>
                                        <option value="7">7 table_sets</option>
                                        <option value="8">8 table_sets</option>
                                        <option value="9">9 table_sets</option>
                                        <option value="10">10 table_sets</option>
                                        <option value="11">11 table_sets</option>
                                        <option value="12">12 table_sets</option>
                                    </select>
                                </div>
                                <div className="reservation_date_picker col-6">
                                    <label>Start date:</label>
                                    <div>
                                        <DatePicker 
                                        selected={this.props.startDate} 
                                        onChange={this.props.handlerDate}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="reservation_hour_picker">
                                        <label>Choose an hour:</label>
                                        <div>
                                            <Schedule 
                                            date={this.props.startDate} 
                                            handlerTime={this.props.handlerTime}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div>
                    <BookingForm 
                        userName={this.props.name} 
                        userFirstname={this.props.firstname} 
                        userPhone={this.props.phone} 
                        handlerSubmit={this.props.handlerSubmit} 
                        handlerPhone={this.props.handlerPhone} 
                        handlerFirstname={this.props.handlerFirstname} 
                        handlerName={this.props.handlerName} 
                        handlerCivility={this.props.handlerCivility} 
                        reservationTime={this.props.reservationTime} 
                        startDate={this.props.startDate} 
                        globalReservation={this.props.globalReservation} 
                        selectedOption={this.props.selectedOption}/>
                </div>
            </div>
        )
    }
}

export default BookingPicker;