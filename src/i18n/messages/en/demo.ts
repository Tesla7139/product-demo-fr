// Locale-specific demo data: the sample shopper, their address variants, the
// sample store's catalog and the globe's "orders saved" events. Each language
// uses a believable local persona and address in its main market.
export const demo = {
  persona: {
    first: "Tucker",
    last: "Briggs",
    email: "tucker.briggs01@gmail.com",
    phone: "+1 760-637-2644",
    line1: "4563 Coronado Dr",
    city: "Oceanside",
    /** Must match a region name in src/lib/regions.ts for `country`. */
    state: "California",
    zip: "92057",
    /** ISO code of a country in src/lib/regions.ts. */
    country: "US",
  },
  /**
   * How the city line of an address prints in this market.
   * Placeholders: {city} {state} {zip}.
   */
  cityLine: "{city}, {state} {zip}",
  /** Address-validation mode in the order editor: flagged → verified. */
  validation: {
    flaggedLine1: "4563 Coronado Dr",
    verifiedLine1: "4563 Coronado Drive",
    verifiedZip: "92057-3812",
  },
  /** Google-style address check mock: what the shopper typed → the fix. */
  addressCheck: {
    first: "Mohit",
    last: "Jain",
    enteredLine1: "123, Main Street",
    enteredZip: "10044",
    correctedLine1: "123 Main St",
    correctedZip: "10044-1601",
    city: "New York",
    state: "New York",
    country: "US",
  },
  /** New address the guided tour types in when it demos "edit shipping address". */
  tourAddress: { line1: "1820 Seacrest Blvd", city: "Carlsbad", zip: "92008" },
  /** Sample store used when a store's catalog can't be read. Prices live in site.ts. */
  store: {
    brandName: "Northwind Goods",
    /** Domain shown in mock browser bars. */
    domain: "yourstore.com",
    products: [
      { title: "Everyday Glow Makeup Set", variant: "Full kit" },
      { title: "Flowy Evening Gown", variant: "Red · M" },
      { title: "Vitamin C Face Serum", variant: "30 ml" },
      { title: "Structured Leather Handbag", variant: "Coral" },
      { title: "Nourishing Body Lotion", variant: "200 ml" },
      { title: "Round Metal Sunglasses", variant: "Gold" },
    ],
  },
  /** Globe arc events ("orders saved" narrative). */
  globeEvents: [
    { label: "Address corrected", city: "Austin, TX" },
    { label: "Order edited", city: "Lisbon" },
    { label: "Upsell accepted", city: "Berlin" },
    { label: "Cancellation avoided", city: "Mumbai" },
    { label: "Variant swapped", city: "Toronto" },
    { label: "Address corrected", city: "Sydney" },
  ],
};
