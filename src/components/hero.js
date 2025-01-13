import image from "../assets/images/home1-min.png";

const Hero = () => {
    return(
        <div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:px-32 items-center text-center gap-6 py-20">
          <h1 className="font-display md:text-display-2xl text-display-lg">
            Every building starts with <span className="block italic">Your Dream</span>
          </h1>
          <p className="col-span-8 md:text-body-xl text-body-lg font-light text-neutral-700 max-w-[800px]">
          We transform bare spaces into extraordinary homes, optimizing every inch with smart designs and functional layouts. Bringing your unique vision to life with personalized solutions!{" "}
          </p>
        </div>
      </div>
      <div className="container-sp relative">
        <img src={image} alt="hero image" className="container"
        style={{ width: "1800px", objectFit: "cover" }} ></img>
      </div>
    </div>
    )
}

export default Hero