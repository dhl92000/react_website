import Calltoaction from "../components/Calltoaction";

const ResourcesBuyers = () => {
  return (
    <div className="subpage">
      <section className="subpage-intro">
        <h1>Frequently Asked Questions For Buyers</h1>
      </section>

      <h4>What kind of housing and ownership options are there?</h4>
      <ul>
        <li>
          Condominium: Where owners have ownership of the unit and a part of the
          common elements. In Toronto, most commonly these are condominium
          apartments and condominium townhouses.
        </li>
        <li>
          Stacked townhouse: For those who don’t like elevators, this style of
          townhouse has just 2 or 3 units which are “stacked” on top of each
          other.
        </li>
        <li>
          Semi-detached house: A single family house that shares one common wall
          with the other house.
        </li>
        <li>
          Link house: Single family house that is “linked”/connected commonly in
          the basement or foundation.
        </li>
        <li>Detached house: A stand alone house or “single-family” home.</li>
      </ul>

      <h4>How long does the homebuying process take?</h4>
      <p>
        The timeline can vary, but from offer acceptance to closing it often
        takes 30–60 days. However, the full process—from preparing finances to finding
        the right home—can take several months for some buyers.
      </p>

      <h4>What's the difference between a deposit and a down payment?</h4>
      <p>
        When an offer is accepted, the buyer provides a deposit — a sum of money
        (typically around 5% of the purchase price) transferred to the seller as
        a show of good faith, alongside the signing of legal agreement
        documents. The down payment, paid at closing, is typically around 20% of
        the purchase price and includes the deposit already paid.
      </p>

      <h4>What about closing costs?</h4>
      <p>
        In addition to the purchase price, closing costs include various fees
        associated with finalizing the home purchase, such as legal fees, title
        insurance, appraisal fees, and land transfer taxes. These costs are
        typically paid at the time of closing, and the Land Transfer Tax is
        typically the largest closing cost. Others include:
      </p>

      <ul>
        <li>Lawyer fees</li>
        <li>
          Inspection fees ($400-$800 depending on duration/complexity of
          inspection)
        </li>
        <li>Title Insurance </li>
        <li>Mortgage fees </li>
      </ul>
      <Calltoaction />
    </div>
  );
};

export default ResourcesBuyers;
