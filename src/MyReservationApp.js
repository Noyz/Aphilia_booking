import React from 'react';
import './App.css';
import './bootstrap.min.css';
import BookingConfirmation from "./BookingConfirmation.js";
import BookingPicker from "./BookingPicker.js"
import "react-datepicker/dist/react-datepicker.css";


class MyReservationApp extends React.Component{
    constructor(props){
        super(props)
        this.handlerTableset = this.handlerTableset.bind(this)
		this.state = {
            tabletSet:"1",
            startDate: new Date()
        }
    }

    handlerTableset = (changeEvent) =>{
        this.setState({
            tabletSet: changeEvent
        });
    }
    handlerDate = date => {
        this.setState({
            startDate: date,
            date:date
        });
        this.handlerTime(date)
    }
    handlerTime = time =>{
        const newArrayTime = [];
        const obj = {
            table:this.state.tabletSet,
            date:this.state.startDate,
            time:time
        }
        newArrayTime.push(obj);
        this.setState({
            reservationTime: time,
            globalReservation:newArrayTime 
        });
    }

    handlerCivility = (changeEvent) =>{
        this.setState({
          civility: changeEvent.target.value
        });
    }
    handlerFirstname = (changeEvent) =>{
        this.setState({
          firstname: changeEvent.target.value
        });
    }
    handlerName = (changeEvent) =>{
        this.setState({
          name: changeEvent.target.value
        });
    }
    handlerPhone = (changeEvent) =>{
        this.setState({
          phone: changeEvent.target.value
        });
    }
    handlerSubmit = (formSubmitEvent) => {
        const newArrayInfo = [];
        const obj = {
            table:this.state.tabletSet,
            date:this.state.startDate.toString().substr(0, 15),
            time:this.state.reservationTime,
            civility:this.state.civility,
            firstname:this.state.firstname,
            name:this.state.name,
            phone:this.state.phone
        }
        var GivenDate = obj.date;
        var CurrentDate = new Date();
        GivenDate = new Date(GivenDate);
        newArrayInfo.push(obj)
        if(GivenDate < CurrentDate){
            alert('Given date is not greater than the current date.');
            return false;
        }else{
            this.setState({
                reservation: "ok",
                globalInformation:newArrayInfo
              });
        }
    }
    handlerReset = (changeEvent) =>{
        this.setState({
          reservation: "nok",
          reservationTime:null
        });
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h1 className="mylogo">My reservationapp</h1>
                </nav>
                {(() => {
                    switch(this.state.reservation === "ok"){
                        case true : return <BookingConfirmation 
                            reservation={this.state.reservation} 
                            startDate={this.state.startDate} 
                            handlerReset={this.handlerReset} 
                            globalInformation={this.state.globalInformation}/>
                        
                        default: return <BookingPicker 
                            userName={this.state.name} 
                            userFirstname={this.state.firstname} 
                            userPhone={this.state.phone} 
                            handlerSubmit={this.handlerSubmit} 
                            handlerDate={this.handlerDate}
                            handlerPhone={this.handlerPhone} 
                            handlerFirstname={this.handlerFirstname}
                            handlerTime={this.handlerTime} 
                            handlerName={this.handlerName} 
                            handlerCivility={this.handlerCivility}
                            handlerTableset={this.handlerTableset}
                            reservationTime={this.state.reservationTime} 
                            startDate={this.state.startDate} 
                            globalReservation={this.state.globalReservation}
                            selectedOption={this.state.selectedOption}/>
                    }
                })()}
         </div>
        )
    }

}

export default MyReservationApp;