import { motion } from "framer-motion";

export default function LearningOutcomes() {
  const outcomes = [
    {
      title: "AI Fundamentals",
      desc: "Understand how Artificial Intelligence works and its real-world applications.",
      icon: "🧠",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Robotics Basics",
      desc: "Learn how robots sense, think, and act using simple logic systems.",
      icon: "🤖",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      title: "Problem Solving",
      desc: "Improve logical thinking through structured coding challenges.",
      icon: "🧩",
      gradient: "from-orange-500 to-yellow-400",
    },
    {
      title: "Hands-on Projects",
      desc: "Build real AI + robotics mini-projects step by step.",
      icon: "⚙️",
      gradient: "from-emerald-500 to-teal-400",
    },
    {
      title: "Creative Thinking",
      desc: "Develop innovation skills by designing your own solutions.",
      icon: "💡",
      gradient: "from-yellow-500 to-amber-400",
    },
    {
      title: "Real-World Exposure",
      desc: "Understand how AI & robotics are used in industries like healthcare, space, and automation.",
      icon: "🌍",
      gradient: "from-indigo-500 to-violet-400",
    },
  ];

  return (
    <div className="relative max-w-6xl mx-auto px-6 py-16">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 blur-3xl opacity-30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 blur-3xl opacity-30 rounded-full" />
      </div>

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Learning Outcomes 🎯
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Skills you’ll unlock after completing this workshop
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {outcomes.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.07,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.08,
              y: -10,
            }}
            className="group relative"
          >
            {/* Card */}
            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200/60 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Gradient glow strip */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient}`}
              />

              {/* Icon bubble */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl mb-4 bg-gradient-to-br ${item.gradient} shadow-md`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-black transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-gradient-to-br from-white/0 via-white/10 to-white/0" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
