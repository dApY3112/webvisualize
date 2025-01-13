import React, { forwardRef } from "react";
import facebookIcon from "../assets/images/socialIcon/facebook.svg";
import InstagramIcon from "../assets/images/socialIcon/instagram.svg";
import TwitterIcon from "../assets/images/socialIcon/twitter.svg";
import YoutubeIcon from "../assets/images/socialIcon/youtube.svg";

// Social media icon data
const icons = {
  facebook: {
    href: "https://facebook.com",
    key: "facebookIcon",
    target: "_blank",
    rel: "noreferrer",
    className: "h-10 w-10",
    src: facebookIcon, 
    alt: "Facebook",
  },
  instagram: {
    href: "https://instagram.com",
    key: "instagramIcon",
    target: "_blank",
    rel: "noreferrer",
    className: "h-10 w-10",
    src: InstagramIcon, 
    alt: "Instagram",
  },
  twitter: {
    href: "https://twitter.com",
    key: "twitterIcon",
    target: "_blank",
    rel: "noreferrer",
    className: "h-10 w-10",
    src: TwitterIcon,
    alt: "Twitter",
  },
  youtube: {
    href: "https://youtube.com",
    key: "youtubeIcon",
    target: "_blank",
    rel: "noreferrer",
    className: "h-10 w-10",
    src: YoutubeIcon, 
    alt: "YouTube",
  },
};

// Footer component using forwardRef
const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref}>
      <div className="container mx-auto">
        <div className="mt-2 md:mb-20 mb-10">
          <hr className="text-neutral-300" />
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12">
          <div className="lg:col-span-6 md:pr-24">
            <h3 className="font-display md:text-display-lg text-display-sm font-normal pb-4">
              Start building the home of your dreams today
            </h3>
            <a
              href="/"
              className="font-display md:text-display-lg text-display-sm italic text-primary-600 underline"
            >
              Send us a hi
            </a>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 xl:pl-80 lg:pl-48">
            <div className="flex flex-col gap-2">
              <p className="text-display-xs font-display font-normal">jyväskylä, Finland</p>
              <p className="text-body-sm font-light text-neutral-900">
                705 taitoniekantie 9E 40740 jyväskylä
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body-sm font-light text-neutral-900">Email us at</p>
              <a
                className="text-display-xs font-display font-normal text-primary-600"
                href="mailto:ad1426@student.jamk.fi"
              >
                ad1426@student.jamk.fi
              </a>
              <a
                className="text-display-xs font-display font-normal text-primary-600"
                href="mailto:ae8503@student.jamk.fi"
              >
                ae8503@student.jamk.fi
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body-sm font-light text-neutral-900">Our number:</p>
              <a className="text-display-xs font-display font-normal text-primary-600" href="/">
                +(358) 8386 8386
              </a>
            </div>
          </div>
        </div>
        <div className="md:my-20 my-10">
          <hr className="text-neutral-300" />
        </div>
        <div className="flex lg:flex-row flex-col lg:items-center md:gap-6 gap-4 justify-end">
          <div className="pb-20">
            <div className="flex flex-row items-center opacity-70 mx">
              <p className="text-body-sm font-semibold tracking-widest text-neutral-700 pr-4">
                CONNECT
              </p>
              <hr className="w-16 text-neutral-700" />
            </div>
            <div className="flex flex-row items-center gap-6">
              {Object.values(icons).map((icon) => (
                <a
                  href={icon.href}
                  key={icon.key}
                  target={icon.target}
                  rel={icon.rel}
                >
                  <img
                    className={icon.className}
                    src={icon.src}
                    alt={icon.alt}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
