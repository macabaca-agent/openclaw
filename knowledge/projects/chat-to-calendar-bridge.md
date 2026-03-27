# Chat-to-Calendar Bridge

## Goal
Create a practical bridge so chat messages about clear schedule items can be turned into Google Calendar events with minimal or no manual terminal work.

## Why this exists
Current state is half-automatic:
- Google Calendar is connected through `gog`
- Manual read/write works
- A wrapper exists
- But chat messages do not yet directly trigger the wrapper through a stable assistant-execution path

## Current status
- `gog` is authenticated for calendar on `claw90578@gmail.com`
- Read/write was validated successfully
- `scripts/calendar_gog.js` exists as an MVP wrapper around `gog`
- The missing piece is a reliable execution bridge from chat context to local script invocation

## Phase 1 scope
- add event
- list events
- delete event
- rely on existing gog auth

## Input rule
A schedule item is calendar-writable when it includes:
- clear date
- clear time (start, and ideally end)
- clear event/activity name

If timing is fuzzy, ask follow-up questions first.

## Near-term options
1. Use wrapper scripts with human-in-the-loop terminal paste
2. Promote wrapper into a local skill/tool the assistant can call more directly
3. Build a narrower command bridge specifically for calendar actions

## Preferred direction
- Start from the existing wrapper (`scripts/calendar_gog.js`)
- Reduce manual command composition first
- Then evolve toward a proper callable bridge/skill

## Risks / constraints
- The assistant currently does not have a native direct terminal-control tool for the user's local shell session
- Bridging chat to local execution safely requires a deliberate interface, not hidden magic
- Avoid over-scoping before the core add/list/delete workflow is stable

## Success criteria
- User can state a clear event in chat
- Assistant can structure it correctly
- Execution path is short, consistent, and low-friction
- Event appears in Google Calendar reliably
