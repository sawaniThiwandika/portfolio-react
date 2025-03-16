
import cover from "../assets/cover/cropCoverImage.png";


import '../styles/IntroCss.css';

export function Intro() {


    return (
        <section className="text-center mt-10 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0 md:w-3/5 order-last md:order-first justify-items-center">
                <p className="text-3xl sm:text-3xl md:text-5xl font-medium">I'm Sawani Thiwandika</p>
                <p className="mt-2 text-lg">From Sri Lanka | Passionate about coding & innovation</p>
                <p className="text-3xl sm:text-2xl md:text-3xl font-madium text-purple-400">Full-Stack developer</p>
                <div className=" justify-items-center">
                    {/* Apply the shine effect class here */}
                    <p  className="mt-3 shine-animation sm:text-2xl md:text-3xl font-medium">
                        Connecting the dots of Invisible tipsy of Brilliance
                    </p>
                    <a
                        href="#contact"
                        className="mt-10 inline-block px-6 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded-full transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            <div className="md:w-2/5 overflow-hidden justify-items-center order-first md:order-last">
                <img
                    src={cover}
                    alt="Sawani Thiwandika"
                    className="w-1/2 object-cover filter contrast-125 brightness-40 saturate-10"
                />
            </div>
        </section>
    );
}

