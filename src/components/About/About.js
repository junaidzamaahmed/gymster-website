import React from 'react';

const About = () => {
    return (
        <div className="py-5" id="about">
            {/* Heading */}
            <h2 className="text-center py-5 fs-1"><span className="border-bottom text-light">About Us</span></h2>
            <div className="container text-light text-center w-50">
                <h4 className="fw-bold my-3">#NO JUDGEMENTS!</h4>
                <p>Some may call it a tagline, but for us, it’s a way of life. It’s our Monday-thru-every-day mantra. An unfiltered philosophy that drives us to create a community and a gym for all. <br />
                    No judgments means room for everyone, regardless of shape, size, age, race, gender or fitness level. No matter your workout of choice, we want you to feel good while reaching your goals. Join the fun.</p>
                <h4 className="fw-bold my-3">#Welcome To The Gymster Family!</h4>
                <p>There are no judgments here – No too much or not enough. No glares of disapproval. Here we keep open minds. We are nurturers. We seek only to encourage, empower and entertain. There is no one type. There is no one reason. There is no one way. <br />
                    What we are is a diverse community; what we have is a culture of fun; what there is, is room for everyone: all kinds of people with all kinds of goals who’ve chosen to come reach them with us.</p>
                <h4 className="fw-bold my-3">#What We Do!</h4>
                <p>While we believe in the power of fitness to improve lives, we also know exercise is hard work and everyone can use a little more motivation. So we’ve fused fitness and entertainment so that we can make serious exercise fun.</p>
            </div>
        </div>
    );
};

export default About;