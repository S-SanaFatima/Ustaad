import { Layout, GradientHeadingText } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema } from './shared/schemas';

export default function TermsPage() {
  return (
    <Layout>
      <SEOHead
        title="Terms of Use | Ustaad"
        description="Terms of use for Ustaad private tutoring services in the UAE."
        canonical="/terms"
        schema={[breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Terms of Use', url: '/terms' }])]}
      />

      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight leading-tight">
            <GradientHeadingText text="Terms of Use" />
          </h1>
          <p className="text-gray-400 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">1. About This Website</h2>
              <p>This website (ustaad.ae) is operated by Ustaad, a private tutoring service based in the UAE. By using this website or contacting us, you agree to these terms.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">2. Our Services</h2>
              <p>Ustaad provides private 1-to-1 online tutoring for students in the UAE across a range of subjects and curricula including IGCSE, GCSE, A-Level, IB, and American curriculum. Session arrangements, scheduling, and fees are agreed directly between Ustaad and the client.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">3. Website Use</h2>
              <p>You agree to use this website only for lawful purposes. You must not attempt to gain unauthorised access to any part of this website, interfere with its operation, or use it to distribute harmful content.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">4. Intellectual Property</h2>
              <p>All content on this website — including text, images, logos, and design — is owned by or licensed to Ustaad. You may not reproduce, distribute, or use any content from this website without our written permission.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">5. Free Trial Session Terms</h2>
              <p>Ustaad offers one 30-minute free trial session per family for newly enquired subjects. The trial session allows parents and students to evaluate tutor fit and virtual classroom technology. Trial sessions carry no financial obligation. If a family chooses not to continue after the trial, no charges will be incurred.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">6. Lesson Rescheduling & Cancellation Policy</h2>
              <p className="mb-3">To maintain consistent tutor schedules and respect educator time, Ustaad enforces the following rescheduling guidelines:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>24-Hour Notice:</strong> Lessons rescheduled with more than 24 hours' notice can be moved to a mutually convenient time slot at no extra fee.</li>
                <li><strong>Late Cancellations:</strong> Cancellations made within 24 hours of a scheduled lesson may be counted as delivered, except in emergency cases supported by parental notice.</li>
                <li><strong>Tutor Absence:</strong> If a tutor is unable to conduct a scheduled session due to illness, Ustaad will provide a makeup session or arrange a qualified substitute mentor.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">7. Online Classroom Code of Conduct</h2>
              <p>Both tutors and students are expected to maintain professional, respectful conduct during all online sessions. Lessons take place in secure virtual rooms. Disruptive behavior, inappropriate language, or unauthorised recording of lessons is strictly prohibited.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">8. Limitation of Liability</h2>
              <p>Ustaad makes no explicit warranties regarding official examination grades. While our tutors provide curriculum-aligned instruction, mark scheme analysis, and exam strategy, final grade outcomes depend on individual student effort, attendance, and exam-day performance. To the fullest extent permitted under UAE law, Ustaad is not liable for indirect or consequential losses.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">9. Governing Law & Dispute Resolution</h2>
              <p>These terms are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising in connection with our website or services shall be subject to the exclusive jurisdiction of the competent courts of the UAE.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">10. Contact Information</h2>
              <p>If you have any questions regarding these Terms of Use or wish to discuss tutoring arrangements, please contact us at <a href="mailto:support@ustaad.ae" className="text-[#0f4a9b] hover:underline font-semibold">support@ustaad.ae</a> or through our <a href="/contact" className="text-[#0f4a9b] hover:underline font-semibold">contact page</a>.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">11. Intellectual Property & Study Material Use</h2>
              <p>All proprietary worksheets, diagnostic tests, exam board topic guides, and digital whiteboard notes provided by Ustaad tutors during 1-to-1 sessions are licensed exclusively for the enrolled student's personal educational use. Reproduction, commercial redistribution, or public hosting of Ustaad learning materials without written permission is strictly prohibited under UAE copyright laws.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">12. Transparent Pricing & Tutor Replacement Guarantee</h2>
              <p className="mb-3">At Ustaad, pricing is communicated upfront with zero hidden booking or administrative fees. We stand by the quality of our academic mentorship:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>No Registration Fees:</strong> Enquiring, diagnostic assessments, and initial advisor consultations are free of charge.</li>
                <li><strong>Free Replacement:</strong> If a student or parent feels that a tutor's teaching pace or style is not an optimal match, Ustaad will re-assign a new qualified curriculum specialist at no additional cost.</li>
                <li><strong>Flexible Billing:</strong> Lesson packages can be paused or adjusted during school holidays and UAE official exam breaks with prior notice.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
