import heroImage from "./assets/robo_ai.png";

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-4">
              🚀 Summer 2026 Workshop
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              AI & Robotics
              <span className="block text-blue-600">Summer Workshop</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Empower your child with the skills of the future. Through hands-on
              projects, coding challenges, and interactive robotics activities,
              students will explore Artificial Intelligence, innovation, and
              creative problem-solving in a fun and engaging environment.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition duration-300">
                Enroll Now
              </button>

              <button className="bg-blue-500 hover:bg-blue-700 border border-gray-300 hover:border-blue-500 px-8 py-4 rounded-xl font-semibold transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="AI & Robotics Workshop"
              className="w-full max-w-[600px] rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
