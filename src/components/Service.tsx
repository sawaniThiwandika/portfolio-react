import { FaCode, FaMobileAlt, FaDatabase } from "react-icons/fa";

interface ServicesProps {
    darkMode: boolean;
}

export function Service({ darkMode }: ServicesProps) {
    return (
        <section id="services" className="mt-16 pt-10 px-5 w-full">
            <div className="w-full text-center mb-8">
                <h1
                    className={`text-3xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}
                >
                    My Services
                </h1>
                <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
                    Here are the services I offer as a full-stack developer.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Web Development Service */}
                <div
                    className={`transform hover:scale-105 transition-all p-8 rounded-xl shadow-2xl text-center ${
                        darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-900'
                    }`}
                >
                    <FaCode className="text-5xl text-purple-500 mb-4" />
                    <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
                    <p className="text-base leading-relaxed">
                        I specialize in building responsive, scalable, and performance-driven websites
                        using the latest web technologies like React, Node.js, and more.
                    </p>
                </div>

                {/* Mobile Development Service */}
                <div
                    className={`transform hover:scale-105 transition-all p-8 rounded-xl shadow-2xl text-center ${
                        darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-900'
                    }`}
                >
                    <FaMobileAlt className="text-5xl text-purple-500 mb-4" />
                    <h3 className="text-2xl font-semibold mb-4">Mobile Development</h3>
                    <p className="text-base leading-relaxed">
                        I develop mobile applications using React Native and other mobile frameworks,
                        ensuring seamless experiences across platforms.
                    </p>
                </div>

                {/* Database & Backend Service */}
                <div
                    className={`transform hover:scale-105 transition-all p-8 rounded-xl shadow-2xl text-center ${
                        darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-900'
                    }`}
                >
                    <FaDatabase className="text-5xl text-purple-500 mb-4" />
                    <h3 className="text-2xl font-semibold mb-4">Database & Backend</h3>
                    <p className="text-base leading-relaxed">
                        I offer backend development services using technologies like Node.js and Express,
                        as well as database management with MySQL, MongoDB, and PostgreSQL.
                    </p>
                </div>
            </div>
        </section>
    );
}
