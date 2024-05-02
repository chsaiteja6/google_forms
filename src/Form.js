import React, { useState } from 'react';
import { UploadButton } from "@bytescale/upload-widget-react";
import './style.css'
import { Link } from 'react-router-dom';
export const ContactForm = () => {

    const options = {
        apiKey: "public_kW15c36CbAJgqNPGSJw8XmUWyjPT",
        maxFileCount: 1
    };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        cv: null,
    });

    const [items, setItems] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event) => {
        setFormData({ ...formData, cv: event.target.files[0] });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const existingDataString = localStorage.getItem('formData');
        let existingData = [];

        if (existingDataString) {
            existingData = JSON.parse(existingDataString);
        }

        // Append new form submission data to existing data
        const updatedData = [...existingData, formData];

        // Save updated data back to localStorage
        localStorage.setItem('formData', JSON.stringify(updatedData));
        // Clear form fields after submission
        setFormData({
            name: '',
            email: '',
            message: '',
            cv: '',
            filename: ''
        });
       
        alert('Form submitted successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>



            <div className='container'>
                <div className='header'>
                    <h2>Web-dev intern recriutment task</h2>
                    <hr></hr>

                    <p>The name, email, and photo associated with your Google account will be recorded when you upload files</p>
                </div>
                <div className='name' style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                    <h5>Name</h5>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder='Your answer' />
                </div>
                <div className='name'>
                    <h5>Email:</h5>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder='Your answer' />
                </div>
                <div className='name'>
                    <h5>Phone:</h5>
                    <input type='text' name="message" value={formData.message} onChange={handleChange} required placeholder='Your answer'></input>
                </div>
                <div className='name'>
                    <h5>Resume:</h5>
                    <UploadButton options={options} onComplete={files => {
                        // Extract file URLs and filenames
                        const fileUrls = files.map(x => x.fileUrl);
                        const fileNames = files.map(x => {
                            const urlParts = x.fileUrl.split('/');
                            return urlParts[urlParts.length - 1];
                        });

                        // Update form data state
                        setFormData({ ...formData, cv: fileUrls, filename: fileNames });
                    }}>
                        {({ onClick }) => (
                            <button onClick={onClick}>
                                Upload a file...
                            </button>
                        )}
                    </UploadButton>



                </div>

                <button className='btn' type="submit" >Submit</button>
                <Link to="/forms">See all the forms You have submitted</Link>
            </div>


        </form>
    );
};

export default ContactForm;
