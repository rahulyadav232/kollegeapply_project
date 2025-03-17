import React, { useState } from "react";
import { FaClock } from "react-icons/fa";

const Dashboard = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <div className="bg-white p-3 shadow-md rounded-md w-full md:w-auto bg-[rgba(64,52,125,0.36)]">
          <span className="text-sm font-medium text-black-600">
            Trending Now: CBSE Class 12 Physics Question Paper 2024 Set 3
          </span>
          <button className="text-blue-600 text-sm font-semibold ml-2 md:ml-4">
            Check Now →
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {[
            "All News",
            "Admission Alert",
            "College News",
            "Exam News",
            "Latest News",
          ].map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm font-semibold text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-4 shadow-md rounded-md">
          <img
            src="/chitkara.png"
            alt="Chitkara University"
            className="object-cover h-64 md:h-[420px] w-full rounded-md"
          />
          <h2 className="font-roboto font-bold text-xl md:text-2xl text-[rgba(2,35,77,1)] mt-2">
            Chitkara University MBA Admission Open;
          </h2>
          <p className="font-roboto font-bold text-xl md:text-2xl text-[rgba(2,35,77,1)]">
            Check Direct List...
          </p>
          <p className="text-gray-500 text-sm">23 Sep 2023, 8:00pm</p>

          <div className="text-gray-600 mt-2">
            <p className="text-gray-600 mt-2 text-[rgba(2,35,77,1)]">
              New Delhi: The State Common Entrance Test Cell, Government of
              Maharashtra, has issued the admit cards for the March, MHMCT, BEd,
              MEd, and MPEd Courses on February 27, 2024. To download the
              document...{" "}
            </p>
            {!expanded ? (
              <button
                className="text-blue-500 underline mt-2"
                onClick={() => setExpanded(true)}
              >
                Read More
              </button>
            ) : (
              <p className="mt-2">
                We offer a diverse range of extracurricular activities aimed at
                enhancing personal growth, skill development, and building
                lasting connections. From cultural events to sports,
                competitions, and workshops, students have ample opportunities
                to refine their communication and critical thinking abilities
                while pursuing their passions.
                <br />
                <br />
                As individuals with dual responsibilities towards the institute
                and its students, our primary objective is to cultivate an
                enriching learning environment. We contribute to the institute
                by delivering high-quality education, aligning with
                institutional goals, and promoting a positive academic
                atmosphere. Towards students, we act as facilitators of
                learning, providing support, mentorship, and guidance for their
                intellectual, social, and emotional growth.
                <br />
                <br />
                Graduates from our institute, particularly those in nursing,
                have a wide array of career opportunities. With essential
                clinical skills, specialization options, and global practice
                opportunities, they are well-equipped for rewarding careers
                dedicated to improving health and well-being while making a
                meaningful impact on communities worldwide.
                <br />
                <br />
                The paramount strength of our institute lies in its ability to
                provide a transformative educational experience. With robust
                academic programs, committed faculty, and abundant resources, we
                empower students to cultivate critical thinking, broaden their
                knowledge, and become well-rounded, educated citizens prepared
                to make significant contributions to society.
                <br />
                <br />
                To the youth and aspiring students, I encourage adopting a
                growth mindset, setting clear goals, and mastering effective
                time management. Nurture curiosity, seek mentorship, and
                prioritize well-being while remaining adaptable in a rapidly
                evolving world. Remember, success is a continuous
                journey—embrace the process, seize opportunities, and never stop
                learning.
                <br />
                <br />
                <button
                  className="text-blue-500 underline mt-2"
                  onClick={() => setExpanded(false)}
                >
                  Read Less
                </button>
              </p>
            )}
          </div>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h3 className="text-lg font-semibold mb-3">THE BIG STORIES</h3>
          <ul className="space-y-6">
            {[
              "/college1.png",
              "/college2.png",
              "/news3.png",
              "professor.png",
            ].map((src, index) => (
              <li key={index} className="flex items-center gap-3 border-b pb-2">
                <img
                  src={src}
                  alt={`Story ${index + 1}`}
                  className="w-20 h-24 object-cover rounded-md"
                />
                <div>
                  <p className="text-black font-medium">
                    Latest program updates from institutes...
                  </p>
                  <p className="text-gray-500 text-sm">
                    Lucknow Public College of Professional Studies...
                  </p>
                  <p className="text-gray-500 text-sm flex items-center">
                    <FaClock className="mr-1" /> 27 Dec 2020
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="bg-white p-4 md:p-6 shadow-md mt-6 rounded-md border-t">
        <h3 className="text-lg font-semibold mb-4 text-orange-500">
          FEATURED NEWS
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex flex-col">
              <p className="text-black font-medium">
                Latest program updates from institutes...
              </p>
              <p className="text-gray-500 text-sm">
                Lucknow Public College of Professional Studies
              </p>
              <p className="text-gray-500 text-sm flex items-center">
                <FaClock className="mr-1" /> 27 Dec 2020
              </p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
