function WorkshopDetails() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <div className="space-y-10">
        {/* Main Card */}
        <div className="grid md:grid-cols-2 gap-8 bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-shadow duration-300">
          {/* Left Section */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Workshop Details
            </h2>

            <div className="space-y-3 text-gray-700">
              <p className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-600">Age Group</span>
                <span className="font-semibold text-gray-900">8–14 Years</span>
              </p>

              <p className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-600">Duration</span>
                <span className="font-semibold text-gray-900">4 Weeks</span>
              </p>

              <p className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-600">Mode</span>
                <span className="font-semibold text-gray-900">Online</span>
              </p>

              <p className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-600">Fee</span>
                <span className="font-semibold text-green-600">₹2,999</span>
              </p>

              <p className="flex justify-between">
                <span className="font-medium text-gray-600">Start Date</span>
                <span className="font-semibold text-gray-900">
                  15 July 2026
                </span>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">
              Why Join This Workshop?
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✔</span>
                Hands-on introduction to AI & Robotics
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-600">✔</span>
                Build mini real-world projects
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-600">✔</span>
                Understand coding logic in a fun way
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-600">✔</span>
                Improve problem-solving skills
              </li>

              <li className="flex items-start gap-2">
                <span className="text-blue-600">✔</span>
                Certificate of completion
              </li>
            </ul>

            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-colors duration-300 shadow-md">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkshopDetails;
