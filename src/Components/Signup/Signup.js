import React, { Component } from 'react';

export default class Signup extends Component {
    render() {
        return (
            <div className="panels">
                <div className="panel basic-info-section">
                    <div className="form-control">
                        <label for="patientName">Patient Name</label>
                        <input id="patientName" className="input" placeholder="Enter your name" />
                    </div>
                    <div className="form-control">
                        <label for="patientGender">Gender</label>
                        <select id="patientGender">
                            <option value="notselected">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                </div>
                <div className="panel additional-info-section"></div>
                <div className="panel relationship-info-section"></div>
                <div className="panel death-info-section"></div>
            </div>
        );
    }
}