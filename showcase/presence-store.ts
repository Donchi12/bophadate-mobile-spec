export type Presence = {
  userId: string;
  state: "online" | "offline";
  lastSeenAt: number;
};

export class PresenceStore {
  private records = new Map<string, Presence>();

  setOnline(userId: string, now = Date.now()) {
    this.records.set(userId, { userId, state: "online", lastSeenAt: now });
  }

  setOffline(userId: string, now = Date.now()) {
    this.records.set(userId, { userId, state: "offline", lastSeenAt: now });
  }

  isRecentlyActive(userId: string, ttlMs = 90_000, now = Date.now()) {
    const record = this.records.get(userId);
    return !!record && record.state === "online" && now - record.lastSeenAt <= ttlMs;
  }
}
