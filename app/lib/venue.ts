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
  /** Coordinates for map link (lat,lng). When set, used instead of address. */
  coordinates?: { lat: number; lng: number };
}

export const EVENT_AREAS: EventArea[] = [
  {
    id: "coffee",
    title: "Coffee Break",
    description: "Grab a drink, network, and recharge between sessions.",
    mapQuery: "Coffee Break Area",
    coordinates: { lat: 5.992653, lng: -0.105193 },
  },
  {
    id: "dining",
    title: "Dining Area",
    description: "Lunch and refreshments are served here.",
    mapQuery: "Dining Area",
    coordinates: { lat: 5.991261, lng: -0.101726 },
  },
  {
    id: "conference",
    title: "Conference Room",
    description: "Main sessions and presentations take place here.",
    mapQuery: "Conference Room",
    coordinates: { lat: 5.992606, lng: -0.105123 },
  },
];

/**
 * Google Maps URL for search/directions. Opens in user's maps app on mobile when possible.
 */
export function getMapUrl(area: EventArea): string {
  if (area.coordinates) {
    return `https://www.google.com/maps/search/?api=1&query=${area.coordinates.lat},${area.coordinates.lng}`;
  }
  const query = `${VENUE_ADDRESS} - ${area.mapQuery}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
