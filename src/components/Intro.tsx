import cover from "../assets/cover/cropCoverImage.png";
import '../styles/IntroCss.css';

interface IntroProps {
    darkMode: boolean;
}
export function Intro({ darkMode }: IntroProps) {

    return (
        <section className={`text-center sm: mt-16 md:mt-24 lg:mt-24 flex flex-col md:flex-row items-center justify-between`}>
            <div className="text-center md:text-left mb-6 md:mb-0 md:w-3/5 order-last md:order-first justify-items-center">
                <p className="justify-center text-3xl md:text-4xl lg:text-5xl font-medium">I'm Sawani Thiwandika</p>
                <p className="mt-2 text-lg">From Sri Lanka | Coding & Innovation</p>
                <p className={`text-3xl p-3 sm:text-2xl md:text-3xl font-madium   ${darkMode? "text-purple-400":"text-purple-700"}`}>Full-Stack Developer</p>
                <div className="justify-items-center">

                    <p  className="text-center mt-3 shine-animation sm:text-2xl md:text-3xl font-medium">
                        Connecting the dots in the invisible tapestry of brilliance;
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
                    className="mt-20 w-1/2 md:w-full lg:w-1/2 object-cover filter contrast-125 brightness-40 saturate-10"
                />
            </div>
        </section>
    );
}
