import Calltoaction from "../components/Calltoaction";

const ResourcesRenting = () => {
  return (
    <div className="subpage">
      <section className="subpage-intro">
        <h1>Leasing 101: An Introduction To Leasing For Tenants</h1>
        <h4>Whether it's your first time moving out, or wanting a change in your rental property, there's a lot to consider with leasing. Here are some things to know for first-time renters.</h4>
      </section>

      <h4>What is it like to work with me?</h4>
      <p>
        Working with a real estate agent can simplify the rental process for
        you. My services include everything from finding properties for my
        clients, helping them understand the lease process, negotiating, and
        preparing any paperwork. Just show up for your viewings and I will
        handle the rest.
      </p>

      <h4>What should you prepare when renting?</h4>
      <ul>
        <li>Full credit report with score (Equifax preferred)</li>
        <li>Employment letter</li>
        <li>
          Pay stubs, T4, NOA, bank statements (landlords will sometimes ask for
          some of these documents)
        </li>
        <li>Cheques</li>

        <li>References</li>
      </ul>

      <h4>What extra costs should you consider when budgeting?</h4>
      <ul>
        <li>Tenant Insurance</li>
        <li>Utilities</li>
        <li>Internet</li>
        <li>Moving costs (Moving service, Elevator fees and deposits)</li>
        <li>Key deposit (Fully refundable, usually around $200-$300)</li>
      </ul>

      <h4>How much is a rent deposit and when do you need to provide it?</h4>
      <p>
        Once an offer is accepted, the rent deposit is given to the brokerage in
        the form of a bank draft or certified cheque within 24 hours or the next
        business day. The rent deposit amount is usually 2 months rent.
      </p>

      <h4>What is the duration of a lease agreement?</h4>
      <p>
        A typical lease is for 1 year. Once a lease ends, the lease agreement
        can be renewed for another term or it automatically becomes a
        ‘month-to-month’ lease.
      </p>

      <h4>When does a tenant need a guarantor?</h4>
      <p>
        A guarantor is an individual who co-signs the lease and agrees to share
        the responsibilities of a lease with the tenant. A guarantor may be
        needed if a tenant’s income or credit report is not satisfactory to the
        landlord, or if the tenant is unemployed (ie. Students).
      </p>

      <p>
        Just like the tenant, a guarantor should also prepare these documents:
        <ul>
          <li>Guarantor’s credit report</li>
          <li>Employment letter</li>
          <li>Pay stubs</li>
          <li>References</li>
        </ul>
      </p>

      <h4>Can you try applying for multiple properties at once? </h4>

      <p>
        When we submit an offer for a property, the offer has a date and time up
        to which the offer cannot be revoked. Because of this we send an offer
        for 1 property at a time.
      </p>

      <h4>When should a tenant give notice to move out?</h4>

      <p>
        You must give notice to your landlord 60 days before the date you move
        out for a month-to-month lease. If your lease agreement is for a year,
        you should still give notice 60 days prior to your lease end date. The
        termination date cannot be before the last day of the fixed 1 year term.
      </p>

      <Calltoaction />
    </div>
  );
};

export default ResourcesRenting;
