# BophaDate

### React Native / Expo Dating & Social Discovery — Architecture Case Study

BophaDate is a cross-platform mobile application for dating and social discovery. The application includes authentication, profile discovery, matching interactions, messaging and presence-oriented features.

The production source is private. This repository documents the mobile architecture and engineering approach.

## Core Stack

**Mobile:** React Native, Expo  
**Language:** TypeScript, JavaScript  
**Navigation:** Expo Router  
**Backend services:** Firebase / Supabase components  
**Local data:** SQLite  
**State:** Zustand / focused client state  
**Testing:** Jest  
**UI:** NativeWind / Tailwind-based styling

## Engineering Focus

### Mobile-first state management

Profile discovery, likes, matches, messages and presence create frequent state changes. Server-backed state is separated from local UI state so interactions remain focused and predictable.

### Realtime interaction

Messaging and presence require timely synchronization. Realtime data channels are used where appropriate while keeping UI state transitions lightweight.

### Local persistence

SQLite can provide local persistence and caching for selected client-side data, helping maintain responsive interactions under variable network conditions.

### Testing approach

Core application logic is kept separate from network and device-specific dependencies where practical, allowing deterministic tests for important behavior.

## Simplified Data Flow

```text
Mobile UI
   ↓
Application State
   ↓
Query / Mutation Layer
   ↓
Backend Services
   ↓
Database / Realtime
   ↓
State Synchronization
   ↓
Mobile UI
```

## Private Production Code

The production source is private. This repository is an engineering case study rather than a source-code mirror.

