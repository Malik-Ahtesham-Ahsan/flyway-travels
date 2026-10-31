import type { Metadata } from "next";
import PolicyLayout from "@/components/ui/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | Flyway Travels",
  description: "Terms and conditions for using Flyway Travels Ltd services and website.",
};

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms &amp; Conditions" updated="31 October 2026">
      <p>
        By using the Flyway Travels Ltd website or purchasing our services, you agree to the following Terms &amp; Conditions.
      </p>

      <h2>1. Our services</h2>
      <p>
        Flyway Travels Ltd provides travel consultancy and planning services, including tailor-made holiday itineraries, flight and accommodation booking assistance, group travel coordination, and related travel guidance.
      </p>

      <h2>2. No travel guarantee</h2>
      <p>
        While we work to secure the best options for your trip, we do not guarantee specific availability, pricing, visa approval, or travel conditions. All bookings are subject to the terms of the relevant airline, hotel, tour operator, or other provider.
      </p>

      <h2>3. Client responsibilities</h2>
      <p>
        Clients must provide accurate, complete, and genuine information. Clients are responsible for ensuring they hold valid travel documents (passports, visas, health certificates) and for meeting the entry requirements of their destination.
      </p>

      <h2>4. Fees and payments</h2>
      <p>
        All service fees will be communicated before the service is provided. Airline fares, hotel rates, and third-party charges may be separate unless specifically included in your package.
      </p>

      <h2>5. Refunds and cancellations</h2>
      <p>
        Refunds and cancellations are subject to the service purchased, work already completed, third-party costs, and applicable UK consumer law. See our <a href="/refund-policy" className="font-semibold text-brand underline hover:text-brand-dark">Refund Policy</a> for full details.
      </p>

      <h2>6. Third-party services</h2>
      <p>
        We may assist with flights, accommodation, insurance, and other third-party services. These services are subject to the terms and conditions of the relevant provider.
      </p>

      <h2>7. Travel conditions</h2>
      <p>
        Travel arrangements may be affected by events beyond our control, including weather, strikes, government restrictions, or health advisories. We are not responsible for delays or disruptions caused by such events.
      </p>

      <h2>8. Privacy</h2>
      <p>
        Your personal information is handled in accordance with our <a href="/privacy-policy" className="font-semibold text-brand underline hover:text-brand-dark">Privacy Policy</a> and applicable data-protection laws.
      </p>

      <p className="mt-8 font-semibold text-foreground">
        By using our services, you acknowledge that you have read and agreed to these Terms &amp; Conditions.
      </p>
    </PolicyLayout>
  );
}
