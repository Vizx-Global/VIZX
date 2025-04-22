import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurImpact: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stories = [
    {
      title: 'Empowering Youth Through Education',
      sdg: 'SDG 4: Quality Education',
      description:
        'We partner with local schools in Kenya and underserved communities to host tech workshops, career mentorship, and digital literacy programs. These initiatives equip youth with in-demand skills, bridging the opportunity gap and preparing them for a tech-driven future.',
      quote:
        '"Before Vizx’s training, I had never touched a computer. Today, I’m coding basic websites and applying for internships!" — Brenda, student from Nairobi'
    },
    {
      title: 'Job Creation & Economic Inclusion',
      sdg: 'SDG 8: Decent Work and Economic Growth',
      description:
        'By expanding our BPO operations in Kenya, we’ve created hundreds of stable, well-paying jobs—particularly for young adults and women. Through fair hiring practices and upskilling, we ensure that our team thrives in a global workforce.',
      quote:
        '"Vizx gave me my first formal job. I’ve since moved into a team lead position, and I’m saving to open a business." — George, Data Analyst'
    },
    {
      title: 'Sustainability in Action',
      sdg: 'SDG 13: Climate Action',
      description:
        'We’re actively reducing our carbon footprint by running paperless offices, using solar-powered hubs, and supporting eco-conscious partners. Our internal Green Office Program rewards staff-led sustainability initiatives that reduce waste and promote environmental awareness.',
      quote:
        '"My team replaced single-use packaging with reusable containers—we now save over 5,000 plastic pieces a year." — Faith, Office Admin'
    },
    {
      title: 'Inclusive Growth for Entrepreneurs',
      sdg: 'SDG 9: Industry, Innovation, and Infrastructure',
      description:
        'We mentor and support local SMEs through accelerator workshops and business process optimization. From tech startups to artisan cooperatives, our teams provide pro-bono consulting to help ventures scale sustainably.',
      quote:
        '"Through Vizx’s mentorship, I improved my pricing model and landed my first international client." — Patrick, Founder of SmartKiosk'
    },
    {
      title: 'Community Wellness & Healthcare Access',
      sdg: 'SDG 3: Good Health and Well-being',
      description:
        'In partnership with our healthcare staffing units, we’ve helped run free community wellness days, offering services like basic screenings and mental health awareness workshops.',
      quote:
        '"We screened over 200 people in a single weekend, some of whom had never seen a healthcare provider." — Nurse Michelle, CSR Volunteer'
    },
    {
      title: 'Employee-Led Giving & Volunteering',
      sdg: 'SDG 17: Partnerships for the Goals',
      description:
        'Vizx empowers its team members to lead social impact projects—whether its organizing donation drives, volunteering in orphanages, or developing tools for NGOs. We match hours served with donations to amplify the good.',
      quote:
        '"I started a weekend reading club for kids in Kibera with help from Vizx’s CSR grant." — Daniel, Developer'
    }
  ];

  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      <main className="flex flex-col space-y-32 px-8">
        <section className="pt-24" data-aos="fade-up">
          <h1 className="text-7xl font-bold text-orange-500 leading-tight mb-4">
            Our Impact Stories
          </h1>
          <p className="text-2xl text-gray-200 mt-4 max-w-4xl">
            From classrooms to clinics, businesses to the environment, Vizx Global is making a tangible difference. Aligned with the UN Sustainable Development Goals, these stories highlight our purpose in action.
          </p>
        </section>

        {stories.map((story, index) => (
          <section key={index} data-aos="fade-up">
            <div className="max-w-5xl">
              <h2 className="text-5xl font-bold text-orange-500 mb-3">{story.title}</h2>
              <h3 className="text-xl text-orange-300 mb-4">{story.sdg}</h3>
              <p className="text-xl text-gray-200 leading-relaxed mb-4">{story.description}</p>
              <blockquote className="italic text-gray-400 border-l-4 border-orange-500 pl-4">{story.quote}</blockquote>
            </div>
          </section>
        ))}

        <section className="pb-24" data-aos="fade-up">
          <div className="max-w-5xl">
            <h3 className="text-5xl font-bold text-orange-500 mb-6 leading-tight">
              Want to Get Involved?
            </h3>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              You don’t have to be part of VIZX to make an impact. We’re always looking to partner with aligned organizations and changemakers.
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-black px-8 py-6 border-t border-gray-800">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} VizX Global Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default OurImpact;
