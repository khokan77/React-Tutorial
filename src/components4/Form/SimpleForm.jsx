import React from 'react';

const SimpleForm = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Enter your name" name="name" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;