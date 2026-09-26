import { describe, expect, it } from "vitest";
import { scoreCandidate } from "./swipe-model";

describe("candidate scoring", () => {
  it("rewards shared interests while considering distance", () => {
    const score = scoreCandidate(
      { id: "p1", age: 25, distanceKm: 10, interests: ["music", "travel"] },
      ["music", "travel", "coding"]
    );

    expect(score).toBeGreaterThan(0.7);
  });
});
