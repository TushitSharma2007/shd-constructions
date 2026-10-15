// Firm details shared across the site (footer, contact page, map)

export const ADDRESS_LINES = [
  "Plot No. 186, Zone-1, Maharana Pratap Nagar",
  "In front of Smart Parking",
  "Bhopal, Madhya Pradesh 462011",
];

export const ADDRESS = ADDRESS_LINES.join(", ");

export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  "Plot No. 186, Zone-1, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011"
)}&output=embed`;

export const DIRECTORS = [
  { name: "Dinesh Vishwakarma", role: "Director" },
  { name: "Harshal Sharma", role: "Director" },
];
