/**
 * Event venue and area configuration.
 * Update VENUE_ADDRESS with the real location for map links.
 */

export const VENUE_ADDRESS = "Your Venue, Street Address, City";

export type AreaId = "coffee" | "dining" | "conference";

export interface EventArea {
  id: AreaId;
  title: string;
  description: string;
  /** Short label for the map link (e.g. "Coffee Break Area at Venue Name") */
  mapQuery: string;
}

export const EVENT_AREAS: EventArea[] = [
  {
    id: "coffee",
    title: "Coffee Break",
    description: "Grab a drink, network, and recharge between sessions.",
    mapQuery: "Coffee Break Area",
  },
  {
    id: "dining",
    title: "Dining Area",
    description: "Lunch and refreshments are served here.",
    mapQuery: "Dining Area",
  },
  {
    id: "conference",
    title: "Conference Room",
    description: "Main sessions and presentations take place here.",
    mapQuery: "Conference Room",
  },
];

/**
 * Google Maps URL for search/directions. Opens in user's maps app on mobile when possible.
 */
export function getMapUrl(area: EventArea): string {
  const query = `${VENUE_ADDRESS} - ${area.mapQuery}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
