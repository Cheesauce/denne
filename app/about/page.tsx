import Link from 'next/link';

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
                <div className="text-8xl mb-4"><img src="denne-profile.jpg" alt="denne's picture" /></div>
                <div className="text-2xl font-bold dark:text-white text-black">
                  Denne Joshua B. Suelan
                </div>
                <div className="text-[#10b981] mt-2">Network Engineer | QA | UI/UX</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-4 dark:text-white text-black">🎯 Objective</h2>
              <p className="dark:text-gray-300 text-gray-600 leading-relaxed">
                Aspiring to join a progressive IT organization as a Quality Assurance Engineer 
                to contribute my expertise in software testing methodologies and drive product quality.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-4 dark:text-white text-black">🎓 Education</h2>
              <p className="dark:text-gray-300 text-gray-600">
                Bachelor&apos;s Degree in Computer Engineering<br/>
                <span className="text-[#10b981]"> Technological University of the Philippines<br/></span>

                <span className="text-sm text-[#10b981]">2018 - 2023</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#10b981] text-white font-semibold rounded-full hover:bg-[#059669] transition-all duration-300">
            Let&apos;s Work Together
          </Link>
        </div>
      </div>
    </main>
  );
}