export function AboutMe() {
    return (
        <section id="about" className="mt-16 pt-10 px-5 w-full flex flex-col md:flex-row items-center">

            <div className="w-full md:w-1/5 text-center p-3 flex items-center justify-center">
                <h1 className="text-3xl font-semibold text-pink-400 md:text-5xl">About Me</h1>
            </div>


            <div className="w-px bg-gray-400 h-24 hidden md:block"></div>


            <div className="w-full md:w-4/5 pl-6 md:flex items-center">
                <p className="mt-4 md:mt-0 text-lg leading-relaxed text-gray-400 pr-6" style={{textAlign: "justify"}}>
                    I am a dedicated Software Engineer from Sri Lanka, currently pursuing a BSc (Hons) in IT at the
                    University of Moratuwa and a GDSE diploma at IJSE. Passionate about full-stack development,
                    I specialize in designing and building scalable, efficient, and user-friendly applications.

                    With a strong problem-solving mindset and keen attention to detail, I excel in stress management,
                    allowing me to remain focused and productive in high-pressure environments. Committed to continuous
                    learning and professional growth, I actively seek opportunities to improve my skills and contribute
                    to impactful projects.
                </p>
            </div>
        </section>
    );
}
