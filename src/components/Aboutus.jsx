import React from "react";
import { Mail, Linkedin } from "lucide-react";
import supervisorImage from "../assets/profile/supervisor.png";
import cosupervisorImage from "../assets/profile/cosupervisor.png";
import miulesiImage from "../assets/profile/miulesi.png";
import imashImage from "../assets/profile/imash.png";
import sandaruImage from "../assets/profile/sandaru.png";
import dinushaImage from "../assets/profile/dinusha.png";

const memberData = [
  {
    name: "Prof. Nuwan Kodagoda",
    profilePic: supervisorImage,
    title: "Supervisor",
    institution: "Sri Lanka Institute of Information Technology",
    department: "Software Engineering",
    email: "nuwan.k@sliit.lk",
    linkedin:
      "https://www.linkedin.com/in/nuwan-kodagoda-a4875a4?trk=hp-identity-name",
  },
  {
    name: "Dr. Dilshan De Silva",
    profilePic: cosupervisorImage,
    title: "Co-Supervisor",
    institution: "Sri Lanka Institute of Information Technology",
    department: "Software Engineering",
    email: "dilshan.i@sliit.lk",
    linkedin: "https://www.linkedin.com/in/dilshan-de-silva-96384573/",
  },
  {
    name: "Kulasekara D.A.M.N",
    profilePic: miulesiImage,
    title: "Group Leader",
    subtitle: "Undergraduate",
    institution: "Sri Lanka Institute of Information Technology",
    department: "Software Engineering",
    email: "miulesikulasekara00@gmail.com",
    linkedin: "https://www.linkedin.com/in/miulesi-kulasekara-4272ab259/",
  },
  {
    name: "Nipun P.G.I",
    profilePic: imashImage,
    title: "Group Member",
    subtitle: "Undergraduate",
    institution: "Sri Lanka Institute of Information Technology",
    department: "Software Engineering",
    email: "imashnipun00@gmail.com",
    linkedin: "https://www.linkedin.com/in/imash-nipun",
  },
  {
    name: "Manilka G. S",
    profilePic: sandaruImage,
    title: "Group Member",
    subtitle: "Undergraduate",
    institution: "Sri Lanka Institute of Information Technology",
    department: "Software Engineering",
    email: "gsandarumanilka@gmail.com",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Dombawela H.M.D.L.B.A",
    profilePic: dinushaImage,
    title: "Group Member",
    subtitle: "Undergraduate",
    institution: "Sri Lanka Institute of Information Technology",
    department: "Information Technology",
    email: "dinushaariyarathna2@gmail.com",
    linkedin: "https://www.linkedin.com/in/dinusha-ariyarathna-a9875b244/",
  },
];

const MemberCircle = ({ member }) => (
  <div className="relative w-64 p-4 bg-white border rounded-lg shadow-lg">
    <div className="flex items-center justify-center w-32 h-32 mx-auto overflow-hidden bg-gray-200 rounded-full">
      <img
        src={member.profilePic}
        alt={member.name}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="mt-4 text-center">
      <p className="text-lg font-semibold">{member.name}</p>
      <p className="text-sm font-bold text-gray-600">{member.title}</p>
      {member.subtitle && (
        <p className="text-sm text-gray-500">{member.subtitle}</p>
      )}
      <p className="text-sm text-gray-500">{member.institution}</p>
      <p className="text-sm text-gray-500">{member.department}</p>
    </div>
    <div className="flex justify-center mt-4 space-x-4">
      <a href={`mailto:${member.email}`} className="p-2 bg-white rounded-full ">
        <Mail size={20} color="#F79733" />
      </a>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white rounded-full"
      >
        <Linkedin size={20} color="#F79733" />
      </a>
    </div>
  </div>
);

const Aboutus = () => {
  return (
    <section id="kidstc-aboutus">
    <div className="min-h-0.5"></div>
      <div style={{ backgroundColor: "#232b2b" }} className="px-20 pt-40 pb-40">
        <div>
          <h1
            className="mb-8 text-3xl font-bold text-left"
            style={{ color: "#F79733" }}
          >
            Our Team
          </h1>
        </div>
        <div className="flex justify-center gap-8 mb-8">
          {memberData.slice(0, 2).map((member, index) => (
            <MemberCircle key={index} member={member} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {memberData.slice(2).map((member, index) => (
            <MemberCircle key={index + 2} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
