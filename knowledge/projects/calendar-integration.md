# Calendar Integration

## Current status
- Google Calendar integration has been successfully connected via `gog`.
- OAuth credentials were created in Google Cloud and stored.
- Manual auth flow was needed because the default loopback callback timed out.
- Calendar read and write were both verified.
- A test event was created and then deleted successfully.
- A real event was added: 去跳跳家赏花 on 2026-03-28 13:00–23:00 JST.

## Key tools
- `gog auth credentials set <client_secret.json>`
- `gog auth add <email> --services calendar --manual --timeout=10m`
- `gog auth list`
- `gog calendar calendars --max 5 --json`
- `gog calendar events primary --max 10 --json`
- `gog calendar create primary --summary ... --from ... --to ...`
- `gog calendar delete primary <eventId>`

## Important setup notes
- OAuth consent screen and test-user setup in Google Cloud were necessary.
- Manual auth flow was more reliable than local loopback callback.
- Current calendar account: claw90578@gmail.com
- Primary calendar is writable.

## Workflow rule
- Clear schedule items can be written to calendar.
- Fuzzy plans need clarification first.

## Next step
- Create a lightweight wrapper around `gog` for chat-to-calendar actions so the user does not need to run raw CLI commands manually each time.
