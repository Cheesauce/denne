import Link from 'next/link';
import Image from 'next/image';
import { Target, GraduationCap, Download, Briefcase, Award, ExternalLink, Brain, Eye, Layers, UserCircle } from 'lucide-react';
import profilePhoto from '../../public/denne-profile.jpg';
import Reveal from '../components/Reveal';
import Magnetic from '../components/Magnetic';
import TiltCard from '../components/TiltCard';

const RESUME_PATH = '/Denne-Joshua-Suelan-Resume.pdf';

const designPrinciples = [
  {
    icon: Eye,
    title: 'Attention Span',
    description: 'Human attention is short — good UI/UX prioritizes what matters, uses visual cues, and earns focus rather than assuming it.',
  },
  {
    icon: Brain,
    title: 'Cognitive Load',
    description: 'People have limited mental bandwidth, so designs should present information clearly, in an organized, easily digestible way.',
  },
  {
    icon: Layers,
    title: 'Visual Hierarchy',
    description: "Users focus on what stands out. A clear hierarchy guides attention to key elements, like calls to action, instead of leaving it to chance.",
  },
  {
    icon: UserCircle,
    title: 'User Personas',
    description: 'Detailed personas built from demographic and behavioral data help tailor a design to how real users actually decide.',
  },
];

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
        <Reveal className="text-center mb-16">
          <p className="eyebrow text-[#10b981] justify-center mb-4">Who I Am</p>
          <h1 className="text-display mb-6 dark:text-white text-black" style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)' }}>
            About <span className="text-[#10b981]">Me</span>
          </h1>
          <p className="text-xl dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Here&apos;s a glimpse into who I am and what drives my passion for technology.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="aspect-square border-2 border-black dark:border-white bg-gradient-to-br from-[#10b981]/20 to-[#10b981]/5 dark:from-[#10b981]/10 dark:to-transparent p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4 overflow-hidden border-2 border-black dark:border-white">
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
                <div className="text-[#10b981] mt-2 font-mono text-sm uppercase tracking-widest">Network Engineer | QA | UI/UX</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <TiltCard className="p-6 border-2 border-black dark:border-white bg-white dark:bg-gray-800 brutal-shadow">
              <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 dark:text-white text-black">
                <Target className="w-6 h-6 text-[#10b981]" strokeWidth={1.75} /> Objective
              </h2>
              <p className="dark:text-gray-300 text-gray-600 leading-relaxed">
                Aspiring to join a progressive IT organization as a Quality Assurance Engineer
                to contribute my expertise in software testing methodologies and drive product quality.
              </p>
            </TiltCard>

            <TiltCard className="p-6 border-2 border-black dark:border-white bg-white dark:bg-gray-800 brutal-shadow">
              <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 dark:text-white text-black">
                <GraduationCap className="w-6 h-6 text-[#10b981]" strokeWidth={1.75} /> Education
              </h2>
              <p className="dark:text-gray-300 text-gray-600">
                Bachelor&apos;s Degree in Computer Engineering<br/>
                <span className="text-[#10b981]"> Technological University of the Philippines<br/></span>

                <span className="text-sm text-[#10b981]">2018 - 2023</span>
              </p>
            </TiltCard>
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="eyebrow text-[#10b981] mb-4">Career</p>
            <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 dark:text-white text-black">
              <Briefcase className="w-7 h-7 text-[#10b981]" strokeWidth={1.75} /> Experience
            </h2>
          </Reveal>
          <div className="divide-y dark:divide-gray-800 divide-gray-200 border-t border-b dark:border-gray-800 border-gray-200">
            {experience.map((job, index) => (
              <Reveal key={job.company} delay={index * 0.08}>
                <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-8">
                  <span className="index-number md:col-span-1">{String(index + 1).padStart(2, '0')}</span>
                  <div className="md:col-span-11">
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
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="eyebrow text-[#10b981] mb-4">Credentials</p>
            <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 dark:text-white text-black">
              <Award className="w-7 h-7 text-[#10b981]" strokeWidth={1.75} /> Certifications
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Reveal key={cert.name} delay={index * 0.06}>
                <TiltCard className="group block h-full">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="Verify"
                    className="brutal-shadow block h-full p-6 border-2 border-black dark:border-white bg-white dark:bg-gray-800 hover:border-[#10b981] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 border-2 border-black dark:border-white bg-[#10b981]/10 text-[#10b981] shrink-0">
                        <Award className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#10b981] transition-colors shrink-0 mt-1" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-bold dark:text-white text-black mb-1 leading-snug">{cert.name}</h3>
                    <p className="text-sm text-[#10b981]">{cert.issuer}</p>
                    <p className="text-xs dark:text-gray-400 text-gray-500 mt-1">{cert.date}</p>
                  </a>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="eyebrow text-[#10b981] mb-4">Philosophy</p>
            <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 dark:text-white text-black">
              <Brain className="w-7 h-7 text-[#10b981]" strokeWidth={1.75} /> Understanding Human Decision-Making
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.08}>
                <TiltCard className="h-full p-6 border-2 border-black dark:border-white bg-white dark:bg-gray-800 brutal-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border-2 border-black dark:border-white bg-[#10b981]/10 text-[#10b981]">
                    <principle.icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold mb-2 dark:text-white text-black">{principle.title}</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">{principle.description}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Magnetic>
            <Link href="/contact" className="brutal-shadow inline-flex items-center gap-2 px-8 py-4 border-2 border-black dark:border-white bg-[#10b981] text-white font-semibold">
              Let&apos;s Work Together
            </Link>
          </Magnetic>
          <Magnetic>
            <a
              href={RESUME_PATH}
              download
              data-cursor="Download"
              className="brutal-shadow inline-flex items-center gap-2 px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              <Download className="w-5 h-5" strokeWidth={1.75} /> Download Resume
            </a>
          </Magnetic>
        </div>
      </div>
    </main>
  );
}