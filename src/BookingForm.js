import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


class BookingForm extends React.Component{
    constructor(props){
        super(props)
		this.state = {
            phone:""
        }
    }
    render(){
        return(
            <div className="col-12">
                <div className="row">
                    {(() => {if (typeof this.props.reservationTime === "string" && (this.props.startDate.getDay() === 2 || this.props.startDate.getDay() === 6)) {
                                return ([
                                    <div id="booking_information" key="1"  className="container">
                                        {this.props.globalReservation.map(function(item, i){
                                            return(<div className="item" key={1}>You have chosen <span className="reservation_info">{item.table}</span> table sets for the <span className="reservation_info">{item.date.toString().substr(0, 15)}</span> at <span className="reservation_info">{item.time}</span></div>)
                                            })}
                                        <div style={{marginBottom:"20px"}}>Please enter your personnal information:</div>
                                        <form className="booking_form" onSubmit={(e) => {e.preventDefault();this.props.handlerSubmit()}}>
                                            <div className="informations">
                                                <div className="col-12 formInput">
                                                    <div id="civility">
                                                        <label htmlFor="civility">Civility:</label>
                                                        <div style={{marginRight:"2px"}}>
                                                            <label htmlFor="mr">Mr</label>
                                                            <input className="civility_radio" required name="civility" type="radio" value="Mr"  onChange={event => {this.props.handlerCivility(event)}}/>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="mrs">Mrs</label>
                                                            <input className="civility_radio" name="civility" type="radio" value="Mrs" onChange={event => {this.props.handlerCivility(event)}}/>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-12 formInput">
                                                    <div className="row">
                                                        <div className="col-6" style={{textAlign:"right"}}><label htmlFor="firstname">Firstname:</label></div>
                                                        <div className="col-6" style={{textAlign:"left"}}><input  className="styleInput" type="text" id="firstname" onChange={event => {this.props.handlerFirstname(event)}}  required/></div>
                                                    </div>
                                                </div>
                                                <div className="col-12 formInput">
                                                    <div className="row">
                                                        <div className="col-6" style={{textAlign:"right"}}><label htmlFor="Name">Name:</label></div>
                                                        <div className="col-6" style={{textAlign:"left"}}><input  className="styleInput" type="text" id="name" value={this.props.name} onChange={event => {this.props.handlerName(event)}} required/></div>
                                                    </div>
                                                </div>
                                                <div className="col-12 formInput">
                                                    <div className="row">
                                                    <div className="col-6" style={{textAlign:"right"}}><label htmlFor="phone">Phone :</label></div>
                                                    <div className="col-6" style={{textAlign:"left"}}>
                                                        <div id="phoneInput">
                                                            <PhoneInput
                                                                country={'fr'}
                                                                value={this.state.phone}
                                                                onChange={phone => {this.setState({ phone });this.props.handlerPhone(phone)}}
                                                                required/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" style={{marginTop: "30px"}}>Submit</button>
                                        </form>
                                    </div>
                                ]);    
                            }else{
                                return <div></div>;
                            }
                    })()}
                </div>
            </div>
        )
    }
}

export default BookingForm;