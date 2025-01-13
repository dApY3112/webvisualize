import React, { forwardRef } from 'react';
import image from "../assets/images/about.png"; // Your image
import Eyebrow from './eyebrow';
const About = forwardRef((props, ref) => {
    return (
        <section ref={ref}>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 lg:py-32 py-12 items-center">
                    <div className="lg:col-span-6 flex flex-col gap-6">
                        <Eyebrow label="ABOUT US" />
                        <h2 className="font-display md:text-display-xl text-display-md font-normal pb-4">
                            Your trusted partner for building the <span className="italic">perfect home</span>
                        </h2>
                        <p className="md:text-body-lg text-body-md font-light text-neutral-700">
                            Your dream home deserves the best, and we’re here to make it happen. With expert craftsmanship, innovative designs, and unwavering dedication, we bring your vision to life.
                        </p>
                        <p className="md:text-body-lg text-body-md font-light text-neutral-700">
                            From concept to completion, trust us to deliver quality, comfort, and style, creating spaces you’ll love for a lifetime. Your perfect home begins here.
                        </p>
                    </div>
                    <div className="lg:col-span-6 flex flex-col gap-8 relative">
                        <img
                            src={image}
                            alt="About Creative"
                            style={{ width: "592px", objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default About;
