import React from "react";
import Aditya from "../assets/images/aditya.jpg";
import Deep from "../assets/images/deep.jpg";
import Ayush from "../assets/images/ayush.jpg";
import Nishit from "../assets/images/nishit.jpg";
const About = () => {
  const teamMembers = [
    {
      name: "Deep Kasodariya",
      role: "Web Developer and Designer",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/deep-kasodariya/",
        github: "https://github.com/kasodeep",
      },
      image: Deep,
    },
    {
      name: "Ayush Gulhane",
      role: "Web Developer and Designer",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/ayush-gulhane-b97219274/",
        github: "https://github.com/AyuGul",
      },
      image: Ayush,
    },
    {
      name: "Nishit Kekane",
      role: "Machine Learning Engineer",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/nishit-kekane-b02b7324b/",
        github: "https://github.com/nishitkekane",
      },
      image: Nishit,
    },
    {
      name: "Aditya Yedurkar",
      role: "Machine Learning Engineer",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/aditya-yedurkar-curious/",
        github: "https://github.com/aditya-y9",
      },
      image: Aditya,
    },
  ];

  return (
    <section className="xl:padding-l wide:padding-r padding-b py-14">
      <div className="container mx-auto mt-8 text-black font-montserrat leading-normal text-lg px-2 rounded-sm h-full">
        <h1 className="text-3xl font-bold mb-4">About Our Website</h1>

        <p className="mb-4 text-lg leading-relaxed">
          Welcome to our website! As students ourselves, we understand the
          challenges of sifting through countless YouTube videos for study
          material. That's why we created this platform — to simplify your study
          process by transforming YouTube videos into concise and informative
          PDF summaries.
        </p>

        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>

        <p className="mb-4 text-lg leading-relaxed">
          Our mission is to empower students and learners by providing them with
          an efficient tool to extract key information from YouTube videos. We
          believe in making learning more accessible and time-efficient,
          allowing you to focus on what truly matters - understanding the
          content.
        </p>

        <h2 className="text-2xl font-bold mb-2">Meet the Team</h2>

        <div className="grid grid-cols-2 gap-4 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center bg-gray-800 shadow-2xl shadow-black rounded-2xl w-56 h-56 py-4                                                                                             mx-auto"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 object-cover rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl text-white font-semibold mb-2">
                {member.name}
              </h3>
              <p className="text-sm mb-2 text-white">{member.role}</p>
              <div className="flex justify-center">
                <a
                  href={member.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <i className="fab fa-linkedin-in text-2xl text-white"></i>
                </a>
                <a
                  href={member.socialMedia.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <i className="fab fa-github text-2xl text-white"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-2">Our Technology Stack</h2>

        <p className="text-lg leading-relaxed">
          Our website is built using the MERN stack (MongoDB, Express.js, React,
          Node.js) for seamless integration of front-end and back-end
          components. The user interface is designed with Tailwind CSS to
          provide a clean and modern look, ensuring a user-friendly experience
          while summarizing YouTube videos.
        </p>
      </div>
    </section>
  );
};

export default About;
