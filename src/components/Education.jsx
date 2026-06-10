const education = [
  {
    year: "2019 — 2021",
    degree: "Master of Science in IT (MSc IT)",
    school: "Hemwati Nandan Bahuguna Garhwal University (HNBGU)",
    grade: "7.83 CGPA",
  },
];

function Education() {
  return (
    <section id="education" className="py-20 px-[6%]">
      {/* Section Label */}
      <p className="text-xs font-mono text-[#667eea] tracking-widest uppercase mb-2">
        Education
      </p>

      {/* Section Title */}
      <h2 className="text-3xl font-bold text-white mb-10">
        My Academic Journey
      </h2>

      {/* Timeline */}
      <div className="max-w-2xl border-l-2 border-[#667eea]/30 pl-8">
        <div className="relative">
          {/* Dot */}
          <div
            className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2 border-[#667eea]"
            style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}
          />

          {/* Year */}
          <p className="text-xs font-mono text-[#667eea] mb-1">2019 — 2021</p>

          {/* Card */}
          <div className="bg-[#13102e] border border-[#2a2450] rounded-xl p-4 flex justify-between items-center hover:border-[#667eea] transition-colors">
            <div>
              <p className="text-white font-semibold">
                Master of Science in IT (MSc IT)
              </p>
              <p className="text-[#a89bc2] text-sm mt-1">
                Hemwati Nandan Bahuguna Garhwal University (HNBGU)
              </p>
            </div>
            <p className="text-green-400 font-bold text-sm whitespace-nowrap ml-4">
              7.83 CGPA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
