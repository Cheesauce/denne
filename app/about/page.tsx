import Link from 'next/link';
import Image from 'next/image';
import { Target, GraduationCap, Download, Briefcase, Award, ExternalLink } from 'lucide-react';
import profilePhoto from '../../public/denne-profile.jpg';

const RESUME_PATH = '/Denne-Joshua-Suelan-Resume.pdf';

const experience = [
  {
    role: 'Network Engineer',
    company: 'REVLV Solutions Inc.',
    location: 'Makati, Philippines',
    period: 'November 2023 - Present',
    highlights: [
      "Contributed to the planning, field implementation, and ongoing maintenance of nationwide connectivity projects for the Department of Information and Communications Technology (DICT) and the Armed Forces of the Philippines (Philippine Navy), spanning satellite, wireless, and terrestrial internet infrastructure.",
      'Supported field deployment of Low Earth Orbit satellite internet (PIALEOS) for underserved agrarian-reform barangays, remote public schools, and rural health facilities, and public-place Wi-Fi rollouts (WITS, PICS-PP/PICS-MUN, PROVINET) across multiple regions including Ilocos, MIMAROPA, and tourist destinations nationwide.',
      "Assisted in enhancing VSAT connectivity for the Philippine Navy's Maritime Situational Awareness System and supported the rollout of centrally managed endpoint security across Navy units.",
      'Continued monitoring the NOC to proactively resolve network issues, troubleshoot connectivity problems, and provide field technical support across deployed sites.',
    ],
  },
  {
    role: 'UI/UX Designer',
    company: 'IT-Americano Inc.',
    location: 'Makati, Philippines',
    period: 'October 2022 - February 2023',
    highlights: [
      'Created wireframes and mockups to visualize user interfaces.',
      'Conducted user research and usability testing to gather feedback.',
      'Collaborated with developers to ensure accurate implementation of designs.',
    ],
  },
];

const certifications = [
  {
    name: 'Black Belt – Small and Medium Business (Technical)',
    issuer: 'Cisco Black Belt Academy',
    date: 'January 2025',
    url: 'https://cf-ap1.mindtickle.com/1860013409316147822/public-content/1741329673127appoutputcertificateFc2poVA1p3.png1a6A.webp',
  },
  {
    name: 'Omada Certified Network Administrator (OCNA) – Wireless',
    issuer: 'TP-Link',
    date: 'Valid through November 2028',
    url: 'https://training.tp-link.com/',
  },
  {
    name: 'Sophos Central Endpoint Protection Certified Engineer v5.0',
    issuer: 'Sophos',
    date: 'April 2025',
    url: 'https://sophos.netexam.com/certs/11017/10A970A8C77240CDBDE04765D1293CA9161655.pdf',
  },
  {
    name: 'Sophos Detection and Response Certified Engineer v5.5',
    issuer: 'Sophos',
    date: 'April 2025',
    url: 'https://sophos.netexam.com/certs/11017/10A970A8C77240CDBDE04765D1293CA9165643.pdf',
  },
  {
    name: 'Software Testing Made Easy for Beginners (Project, JIRA, API)',
    issuer: 'Udemy',
    date: 'September 2023 · 102.5 hours',
    url: 'https://www.udemy.com/certificate/UC-40b6371b-b0fe-464c-828f-6af566de5862/',
  },
];

export const metadata = {
  title: 'About Me | Denne Joshua Suelan',
  description: 'Learn more about Denne Joshua B. Suelan, Quality Assurance Engineer and UI/UX Designer.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 dark:text-white text-black">
            About <span className="text-[#10b981]">Me</span>
          </h1>
          <p className="text-xl dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Here&apos;s a glimpse into who I am and what drives my passion for technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#10b981]/20 to-[#10b981]/5 dark:from-[#10b981]/10 dark:to-transparent p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-2xl">
                  <Image
                    src={profilePhoto}
                    alt="Denne Joshua B. Suelan"
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <div className="text-2xl font-bold dark:text-white text-black">
                  Denne Joshua B. Suelan
                </div>
                <div className="text-[#10b981] mt-2">Network Engineer | QA | UI/UX</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 dark:text-white text-black">
                <Target className="w-6 h-6 text-[#10b981]" strokeWidth={1.75} /> Objective
              </h2>
              <p className="dark:text-gray-300 text-gray-600 leading-relaxed">
                Aspiring to join a progressive IT organization as a Quality Assurance Engineer 
                to contribute my expertise in software testing methodologies and drive product quality.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 dark:text-white text-black">
                <GraduationCap className="w-6 h-6 text-[#10b981]" strokeWidth={1.75} /> Education
              </h2>
              <p className="dark:text-gray-300 text-gray-600">
                Bachelor&apos;s Degree in Computer Engineering<br/>
                <span className="text-[#10b981]"> Technological University of the Philippines<br/></span>

                <span className="text-sm text-[#10b981]">2018 - 2023</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="flex items-center gap-2 text-3xl font-bold mb-8 dark:text-white text-black">
            <Briefcase className="w-7 h-7 text-[#10b981]" strokeWidth={1.75} /> Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job) => (
              <div
                key={job.company}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <h3 className="text-xl font-bold dark:text-white text-black">
                    {job.role} <span className="text-[#10b981]">· {job.company}</span>
                  </h3>
                  <span className="text-sm dark:text-gray-400 text-gray-500 shrink-0">{job.period}</span>
                </div>
                <p className="text-sm text-[#10b981] mb-3">{job.location}</p>
                <ul className="space-y-1.5">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex gap-2 dark:text-gray-300 text-gray-600 text-sm leading-relaxed">
                      <span className="text-[#10b981] mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="flex items-center gap-2 text-3xl font-bold mb-8 dark:text-white text-black">
            <Award className="w-7 h-7 text-[#10b981]" strokeWidth={1.75} /> Certifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#10b981] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#10b981]/10 text-[#10b981] shrink-0">
                    <Award className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#10b981] transition-colors shrink-0 mt-1" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold dark:text-white text-black mb-1 leading-snug">{cert.name}</h3>
                <p className="text-sm text-[#10b981]">{cert.issuer}</p>
                <p className="text-xs dark:text-gray-400 text-gray-500 mt-1">{cert.date}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#10b981] text-white font-semibold rounded-full hover:bg-[#059669] transition-all duration-300">
            Let&apos;s Work Together
          </Link>
          <a
            href={RESUME_PATH}
            download
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          >
            <Download className="w-5 h-5" strokeWidth={1.75} /> Download Resume
          </a>
        </div>
      </div>
    </main>
  );
}