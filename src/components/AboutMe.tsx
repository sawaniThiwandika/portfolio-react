export function AboutMe() {
    return (
        <section id="about" className="mt-16 pt-10 px-5 w-full flex flex-col md:flex-row items-center">

            <div className="w-full md:w-1/5 text-center p-3 flex items-center justify-center">
                <h1 className="text-5xl font-semibold text-pink-700 md:text-3xl">About Me</h1>
            </div>


            <div className="w-px bg-gray-400 h-24 hidden md:block"></div>


            <div className="w-full md:w-4/5 pl-6 md:flex items-center">
                <p className="mt-4 md:mt-0 text-lg leading-relaxed text-gray-600 pr-6" style={{ textAlign: "justify" }}>
                    I am a Software Engineer from Sri Lanka, currently studying at <strong>IJSE</strong> & the <strong>University of Moratuwa</strong>.
                    Passionate about full-stack development, I specialize in building efficient, scalable, and user-friendly applications.
                    With experience in <strong>React</strong>, <strong>Node.js</strong>, and <strong>database management</strong>,
                    I strive to create innovative solutions that enhance user experiences.
                </p>
            </div>
        </section>
    );
}
