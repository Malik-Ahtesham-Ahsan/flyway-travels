import type { Metadata } from "next";
import PolicyLayout from "@/components/ui/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Flyway Travels",
  description: "How Flyway Travels Ltd collects, uses and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" updated="31 October 2026">
      <p>
        Flyway Travels Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a UK-based travel consultancy. This policy explains what personal information we collect when you use this website or contact us, why we collect it, and the rights you have over it, in line with the UK GDPR and the Data Protection Act 2018.
      </p>

      <h2>1. Who we are</h2>
      <p>
        Flyway Travels Ltd, United Kingdom. You can contact us about this policy or any privacy question at hello@flywaytravels.co.uk.
      </p>

      <h2>2. Information we collect</h2>
      <p>We collect information you give us directly, such as when you submit our enquiry form, message us on WhatsApp, call, or email us. This may include:</p>
      <ul>
        <li>Your name, email address, phone number and WhatsApp number</li>
        <li>Details of the destination you&rsquo;re enquiring about, and your intended travel dates</li>
        <li>Any documents or messages you choose to send us as part of your booking</li>
        <li>Basic technical information such as the page you came from (source/campaign) so we understand which channels bring us genuine enquiries</li>
      </ul>
      <p>We do not knowingly collect information from children, and this site is not directed at them.</p>

      <h2>3. How we use your information</h2>
      <p>
        We use your information to respond to your enquiry, prepare and support your travel plans, communicate with you by WhatsApp, phone or email about your trip, and keep records we&rsquo;re required to keep for our own compliance and accounting purposes. We do not use your information for any purpose beyond providing and improving the services you&rsquo;ve asked us about.
      </p>

      <h2>4. Cookies and local storage</h2>
      <p>
        This site uses your browser&rsquo;s local storage to remember simple preferences, such as whether you&rsquo;ve chosen light or dark mode. If analytics tracking (such as Google Analytics) is active, it may also set cookies to help us understand how visitors use the site in aggregate &mdash; never to identify you personally for marketing to third parties. Where a cookie consent banner is shown, analytics only loads after you accept it.
      </p>

      <h2>5. Sharing your information</h2>
      <p>
        We do not sell your personal information. We may share the details necessary to process your booking with the relevant airline, hotel, tour operator or other travel provider &mdash; this is unavoidable in providing a travel planning service. We may also share information with trusted service providers who help us operate (for example, booking or messaging platforms), under obligations to keep it secure and use it only for the purpose we&rsquo;ve asked them to.
      </p>

      <h2>6. How long we keep it</h2>
      <p>
        We keep your information only for as long as necessary to provide our services and to meet our legal, tax and regulatory obligations, after which it is securely deleted or anonymised.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Under UK data-protection law you have the right to ask us what personal information we hold about you, to correct it if it&rsquo;s wrong, to ask us to delete it, to restrict or object to certain processing, and to receive a copy in a portable format. To exercise any of these rights, email hello@flywaytravels.co.uk. If you&rsquo;re unhappy with how we&rsquo;ve handled your information, you also have the right to complain to the UK Information Commissioner&rsquo;s Office (ICO) at ico.org.uk.
      </p>

      <h2>8. Keeping your information secure</h2>
      <p>
        We take reasonable technical and organisational steps to protect the personal information you share with us against loss, misuse or unauthorised access.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this policy from time to time as our services or the law change. The &ldquo;Last Updated&rdquo; date at the top of this page shows when it was last revised.
      </p>
    </PolicyLayout>
  );
}
