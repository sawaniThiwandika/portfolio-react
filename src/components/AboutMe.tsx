export function AboutMe() {
    return (
        <section id="about" className="mt-16 p-6 w-5/6 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/5 text-center p-4 flex items-center justify-center">
                <h1 className="text-5xl font-medium">About Me</h1>
            </div>
            <div className="w-px bg-gray-400 h-20 hidden md:block"></div>
            <div className="w-full md:w-4/5 pl-4 md:flex items-center">
                <p className="mt-4 md:mt-0">I am a Software Engineer from Sri Lanka, currently studying at IJSE & the University
                    of Moratuwa. Passionate about full-stack development, I specialize in building efficient, scalable,
                    and user-friendly applications. With experience in React, Node.js, and database management, I strive to
                    create innovative solutions that enhance user experiences.</p>
            </div>
        </section>
    );
}