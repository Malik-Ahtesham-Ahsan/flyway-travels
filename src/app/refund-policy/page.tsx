import type { Metadata } from "next";
import PolicyLayout from "@/components/ui/PolicyLayout";

export const metadata: Metadata = {
  title: "Refund Policy | Flyway Travels",
  description: "Refund and cancellation policy for Flyway Travels Ltd services.",
};

export default function RefundPolicyPage() {
  return (
    <PolicyLayout title="Refund Policy" updated="31 October 2026">
      <p>
        At Flyway Travels Ltd, we aim to provide professional and transparent travel planning and consultancy services. Please read our refund policy carefully before purchasing any of our services.
      </p>

      <h2>1. Service fees</h2>
      <p>
        Once services have started, fees may be non-refundable where work has already been carried out. This includes consultation, itinerary planning, booking assistance, or other agreed services.
      </p>

      <h2>2. Third-party fees</h2>
      <p>
        Flight bookings, accommodation costs, travel insurance, tour operator fees, transfer charges, and other third-party costs are generally non-refundable once confirmed. They are subject to the relevant provider&rsquo;s terms and conditions.
      </p>

      <h2>3. Booking changes and cancellations by the traveller</h2>
      <p>
        If you need to cancel or amend your trip, please contact us as soon as possible. Any refund will be assessed based on the work already completed, costs already incurred, and the cancellation policies of the relevant airlines, hotels, and other providers involved.
      </p>

      <h2>4. Cancellations by providers</h2>
      <p>
        In the event that an airline, hotel, or other third-party provider cancels a service, we will assist you in seeking a refund or rebooking where possible, but the final decision and timeline rests with the provider.
      </p>

      <h2>5. Refund processing</h2>
      <p>
        An approved refund will normally be processed using the original payment method within a reasonable period.
      </p>

      <h2>6. No guarantee</h2>
      <p>
        Paying for our planning services does not guarantee specific availability, pricing, or travel conditions. Travel arrangements are subject to external factors beyond our control.
      </p>
    </PolicyLayout>
  );
}
