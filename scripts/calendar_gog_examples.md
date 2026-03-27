# calendar_gog.js examples

## Add event
```bash
node scripts/calendar_gog.js add '{"summary":"去跳跳家赏花","from":"2026-03-28T13:00:00+09:00","to":"2026-03-28T23:00:00+09:00"}'
```

## List events
```bash
node scripts/calendar_gog.js list '{"calendarId":"primary","max":10}'
```

## Delete event
```bash
node scripts/calendar_gog.js delete '{"calendarId":"primary","eventId":"EVENT_ID_HERE"}'
```

## Notes
- This is a thin wrapper around `gog`.
- It is an MVP bridge, not a full skill yet.
- It exists to reduce manual raw CLI composition and make later chat-to-calendar automation easier.
