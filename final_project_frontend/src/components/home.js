import React from 'react';

const home = () => {
    return (
        <div className="page-content">
            <p className="page-content homepage">
            <br/><br/><br/>
                Welcome to my Portfolio project<br/>
                Here's a generic store website<br/>
                This is a work in progress but feel free to look around. More things will be added soon such as:<br/>
                <ul>
                    <li>Creating an account using social media or an email. With the use of the OmniAuth gem.</li>
                    <li>Being able to use the Contact form.</li>
                    <li>Seeing recipes with a search bar to find a recipe with a specific product.</li>
                </ul>
            </p>
        </div>
    );
};

export default home;