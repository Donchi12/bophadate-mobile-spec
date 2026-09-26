export type SwipeDirection = "left" | "right";

export type SwipeCandidate = {
  id: string;
  distanceKm: number;
  age: number;
  interests: string[];
};

export type SwipeDecision = {
  candidateId: string;
  direction: SwipeDirection;
  score: number;
};

export function scoreCandidate(
  candidate: SwipeCandidate,
  preferredInterests: string[]
) {
  const overlap = candidate.interests.filter(i => preferredInterests.includes(i)).length;
  const interestScore = Math.min(1, overlap / Math.max(1, preferredInterests.length));
  const distanceScore = Math.max(0, 1 - candidate.distanceKm / 100);

  return Number((interestScore * 0.7 + distanceScore * 0.3).toFixed(3));
}
