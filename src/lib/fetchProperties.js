import { GOOGLE_SHEET_URL } from "./constants";
import { parseCSV } from "./parseCSV";

/**
 * Fetches and parses properties from the Google Sheet.
 * Can be used both server-side (in page.jsx) and client-side (in hooks).
 * Uses next.revalidate for ISR when called server-side.
 */
export async function fetchProperties() {
  try {
    const response = await fetch(GOOGLE_SHEET_URL, {
      next: { revalidate: 300 }, // ISR: revalidate every 5 minutes
    });
    const text = await response.text();
    return parseCSV(text);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}
