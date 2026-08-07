import { Layout, GradientHeadingText } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema } from './shared/schemas';

export default function PrivacyPage() {
  return (
    <Layout>
      <SEOHead
        title="Privacy Policy | Ustaad"
        description="Privacy policy for Ustaad — how we handle your data when you use our private tutoring service in the UAE."
        canonical="/privacy"
        schema={[breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy' }])]}
      />

      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight leading-tight">
            <GradientHeadingText text="Privacy Policy" />
          </h1>
          <p className="text-gray-400 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">1. Who We Are</h2>
              <p>Ustaad is a private tutoring service based in the UAE. We connect students with qualified tutors for 1-to-1 online sessions. This policy explains how we handle personal information you share with us.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">2. Information We Collect</h2>
              <p className="mb-3">We collect information you provide directly when you contact us:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Name and contact details (email address, phone number)</li>
                <li>Your child's year group, school, and subjects</li>
                <li>Messages and enquiry details sent through our contact form or WhatsApp</li>
              </ul>
              <p className="mt-3">We do not collect payment card information through this website — payment arrangements are handled directly.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information you provide solely to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Respond to your tutoring enquiry</li>
                <li>Match your child with a suitable tutor</li>
                <li>Communicate session schedules and progress updates</li>
              </ul>
              <p className="mt-3">We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">4. Third-Party Services</h2>
              <p className="mb-3">This website uses the following third-party services that may place cookies on your device:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Google Translate</strong> — provides optional Arabic language translation of page content. Google's privacy policy applies.</li>
                <li><strong>Google Analytics</strong> — helps us understand which pages are visited and how users interact with the site. Data is anonymised and aggregated.</li>
                <li><strong>WhatsApp</strong> — clicking our WhatsApp button opens the WhatsApp application. WhatsApp's privacy policy applies.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">5. Cookies</h2>
              <p>This site uses minimal cookies. Google Translate sets a <code className="bg-gray-100 px-1 rounded text-sm font-mono">googtrans</code> cookie to remember your language preference. Google Analytics uses anonymised session cookies. No advertising cookies are used.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">6. UAE Personal Data Protection Law Compliance</h2>
              <p>Ustaad operates in full alignment with UAE Federal Decree Law No. 45 of 2021 on the Protection of Personal Data (PDPL). We process personal information lawfully, fairly, and transparently. Parents and legal guardians retain full control over student data provided during registration, assessment, and lesson scheduling.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">7. Child Protection & Online Classroom Safeguarding</h2>
              <p className="mb-3">Protecting minors during online 1-to-1 tutoring is fundamental to how Ustaad operates. Our safeguarding protocols include:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Verified Tutors:</strong> All tutors undergo thorough background verification, degree validation, and identity screening before matching with students.</li>
                <li><strong>Parent Portal & Session Visibility:</strong> Parents are welcome to join online trial sessions or review lesson summaries at any time.</li>
                <li><strong>Secure Virtual Classrooms:</strong> Interactive whiteboard sessions use encrypted, password-protected virtual rooms. Unauthorised participants cannot access active lessons.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">8. Data Retention & Erasure Requests</h2>
              <p>We retain your contact information only for as long as necessary to manage your tutoring enquiry, deliver active tuition, or meet legal record-keeping requirements. Under UAE PDPL guidelines, parents may request immediate data erasure by emailing support@ustaad.ae. All requested records will be securely deleted within 30 business days.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">9. Your Legal Rights</h2>
              <p>You have the right to request access to, correction of, or complete deletion of your personal data. To exercise any of these rights, contact our privacy compliance team at <a href="mailto:support@ustaad.ae" className="text-[#0f4a9b] hover:underline font-semibold">support@ustaad.ae</a> or message us directly on WhatsApp.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">10. Policy Updates & Contact</h2>
              <p>We periodically update this policy to reflect changes in UAE regulatory frameworks or website functionality. For any privacy or data protection inquiries, reach our team at <a href="mailto:support@ustaad.ae" className="text-[#0f4a9b] hover:underline font-semibold">support@ustaad.ae</a> or through our <a href="/contact" className="text-[#0f4a9b] hover:underline font-semibold">contact page</a>.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">11. International Data Security Standards</h2>
              <p>In addition to UAE Federal Decree Law No. 45 of 2021 (PDPL) compliance, Ustaad maintains strict electronic security controls to prevent unauthorized access, data alteration, or disclosure. All website interactions and contact submissions use SSL encryption (HTTPS). Student educational notes, diagnostic assessment scores, and lesson attendance records are stored in secure cloud systems accessible only by authorized Ustaad academic coordinators and assigned tutors.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#0a1f3d] mb-2">12. Parental Consent & Minor Data Protection</h2>
              <p>Because our private tutoring services involve school-aged minors, Ustaad requires explicit parental or legal guardian consent prior to commencing tuition. We do not collect or request personal details directly from children without guardian approval. Parents maintain full oversight over session communications, tutor feedback reports, and payment details at all times.</p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
