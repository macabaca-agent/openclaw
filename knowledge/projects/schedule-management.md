# Schedule Management

## Rule
A schedule item can be written to calendar when the user provides:
- clear date
- clear time
- clear activity/event title

If any of those are fuzzy, ask follow-up questions first.

## Current calendar backend
- Google Calendar via `gog`
- Account: `claw90578@gmail.com`
- Primary calendar is readable and writable

## Current working modes
### 1. Manual CLI mode
The user runs raw `gog` commands in terminal.

### 2. Wrapper mode
Use `scripts/calendar_gog.js` to reduce manual raw command composition.

### 3. Future bridge mode
Goal: chat message -> assistant structuring -> direct bridge execution -> calendar write.

## Expected assistant behavior
- Clarify fuzzy times before writing
- Suggest a reasonable end time if missing, but get confirmation
- Keep event titles clean and readable
- Avoid writing speculative plans into calendar

## Examples of calendar-writable input
- 明天下午 3 点面试
- 周一 10 点去学校参加说明会
- 4 月 2 日晚上 7 点看展
- 明天下午一点去跳跳家赏花

## Examples that need clarification
- 下周找时间见老师
- 改天约一下
- 大概下午去
- 有空的话去一趟

## Next step
- Reduce friction from wrapper mode toward real bridge mode
