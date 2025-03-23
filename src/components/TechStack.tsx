import { SiReact, SiReactrouter, SiTailwindcss, SiBootstrap, SiHtml5, SiCss3, SiJavascript,
    SiTypescript, SiSpringboot, SiPython, SiNodedotjs, SiFirebase, SiMysql, SiMongodb,
    SiFigma, SiPostman, SiC, SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
interface TechStackProps {
    darkMode: boolean;

}
export function TechStack({ darkMode}:TechStackProps ) {
    return (
        <section id="tech" className="mt-20 py-16 px-6">
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} text-center mb-12`}>
                TechStack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

                <div className={` p-6 rounded-2xl shadow-lg border ${darkMode ? 'border-gray-600' : 'border-gray-300'} hover:scale-105 transition-transform duration-300`}>
                    <h3  className={` text-2xl font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-700'} flex items-center space-x-2`}>
                        <span>Languages</span>
                    </h3>
                    <ul className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-700'} font-medium space-y-3`}>
                        <li className="flex items-center space-x-2"><FaJava size={20} /><span>Java</span></li>
                        <li className="flex items-center space-x-2"><SiPython size={20} /><span>Python</span></li>
                        <li className="flex items-center space-x-2"><SiC size={20} /><span>C</span></li>
                        <li className="flex items-center space-x-2"><SiJavascript size={20} /><span>JavaScript</span></li>
                        <li className="flex items-center space-x-2"><SiTypescript size={20} /><span>TypeScript</span></li>
                    </ul>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg border ${darkMode ? 'border-gray-600' : 'border-gray-300'} hover:scale-105 transition-transform duration-300`}>
                    <h3 className={`text-2xl font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-700'} flex items-center space-x-2`}>
                        <span>Frontend</span>
                    </h3>
                    <ul className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-700'} font-medium space-y-3`}>
                        <li className="flex items-center space-x-2"><SiReact size={20} /><span>React</span></li>
                        <li className="flex items-center space-x-2"><SiReactrouter size={20} /><span>React Native</span></li>
                        <li className="flex items-center space-x-2"><SiTailwindcss size={20} /><span>Tailwind CSS</span></li>
                        <li className="flex items-center space-x-2"><SiBootstrap size={20} /><span>Bootstrap</span></li>
                        <li className="flex items-center space-x-2"><SiHtml5 size={20} /><span>HTML</span></li>
                        <li className="flex items-center space-x-2"><SiCss3 size={20} /><span>CSS</span></li>
                    </ul>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg border ${darkMode ? 'border-gray-600' : 'border-gray-300'} hover:scale-105 transition-transform duration-300`}>
                    <h3 className={`text-2xl font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-700'} flex items-center space-x-2`}>
                        <span>Backend</span>
                    </h3>
                    <ul className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-700'} font-medium space-y-3`}>
                        <li className="flex items-center space-x-2"><SiSpringboot size={20} /><span>Java (Spring Boot)</span></li>
                        <li className="flex items-center space-x-2"><SiPython size={20} /><span>Python</span></li>
                        <li className="flex items-center space-x-2"><SiNodedotjs size={20} /><span>Node.js</span></li>
                        <li className="flex items-center space-x-2"><SiExpress size={20} /><span>Express.js</span></li>
                        <li className="flex items-center space-x-2"><SiFirebase size={20} /><span>Firebase</span></li>
                    </ul>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg border ${darkMode ? 'border-gray-600' : 'border-gray-300'} hover:scale-105 transition-transform duration-300`}>
                    <h3 className={`text-2xl font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-700'} flex items-center space-x-2`}>
                        <span>Database</span>
                    </h3>
                    <ul className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-700'} font-medium space-y-3`}>
                        <li className="flex items-center space-x-2"><SiMysql size={20} /><span>MySQL</span></li>
                        <li className="flex items-center space-x-2"><SiMongodb size={20} /><span>MongoDB</span></li>
                    </ul>
                </div>

                <div className={`p-6 rounded-2xl shadow-lg border ${darkMode ? 'border-gray-600' : 'border-gray-300'} hover:scale-105 transition-transform duration-300`}>
                    <h3 className={`text-2xl font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-700'} flex items-center space-x-2`}>
                        <span>Other</span>
                    </h3>
                    <ul className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-700'} font-medium space-y-3`}>
                        <li className="flex items-center space-x-2"><SiFigma size={20} /><span>Figma</span></li>
                        <li className="flex items-center space-x-2"><SiPostman size={20} /><span>Postman</span></li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
