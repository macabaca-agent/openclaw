# calendar-gog wrapper plan

## Goal
Bridge chat-based scheduling to Google Calendar through `gog`, so the user no longer needs to hand-compose raw CLI commands each time.

## Current status
- `gog` is installed and authenticated for `claw90578@gmail.com`
- Google Calendar read/write has been verified manually
- The missing layer is a stable wrapper the assistant can reliably generate/use

## MVP actions
1. add event
2. list upcoming events
3. delete event
4. optionally search events later

## Input contract for add-event
- summary (required)
- from (required, RFC3339 / Asia-Tokyo aware)
- to (required)
- optional: description, location

## Output contract
- success/failure
- event id
- html link
- echoed summary/start/end

## Practical usage rule
- If the user gives a clear date + time + event, it can be treated as calendar-writable.
- If the user gives fuzzy timing, ask follow-up questions before writing.

## Why wrapper first
- Faster than building a full new skill immediately
- Reduces copy/paste burden
- Lets the workflow stabilize before productizing further

## Later upgrade path
- Promote wrapper into a proper skill or script toolkit callable through a tighter integration layer.
