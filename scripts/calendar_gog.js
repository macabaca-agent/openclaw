#!/usr/bin/env node
const { execFileSync } = require('child_process');

function usage() {
  console.error(`Usage:
  node scripts/calendar_gog.js add '{"summary":"...","from":"...","to":"...","calendarId":"primary","description":"","location":""}'
  node scripts/calendar_gog.js list '{"calendarId":"primary","max":10}'
  node scripts/calendar_gog.js delete '{"calendarId":"primary","eventId":"..."}'`);
  process.exit(2);
}

function runGog(args) {
  try {
    const out = execFileSync('gog', args, { encoding: 'utf8' });
    return { ok: true, output: out };
  } catch (err) {
    return {
      ok: false,
      error: err.stderr?.toString() || err.message,
      output: err.stdout?.toString() || ''
    };
  }
}

const action = process.argv[2];
const raw = process.argv[3];
if (!action || !raw) usage();

let data;
try {
  data = JSON.parse(raw);
} catch {
  console.error('Invalid JSON payload');
  process.exit(2);
}

if (action === 'add') {
  const summary = data.summary;
  const from = data.from;
  const to = data.to;
  const calendarId = data.calendarId || 'primary';
  if (!summary || !from || !to) {
    console.error('Missing required fields: summary, from, to');
    process.exit(2);
  }
  const args = ['calendar', 'create', calendarId, '--summary', summary, '--from', from, '--to', to];
  if (data.description) args.push('--description', data.description);
  if (data.location) args.push('--location', data.location);
  const result = runGog(args);
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.ok ? 0 : 1);
}

if (action === 'list') {
  const calendarId = data.calendarId || 'primary';
  const max = String(data.max || 10);
  const result = runGog(['calendar', 'events', calendarId, '--max', max, '--json']);
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.ok ? 0 : 1);
}

if (action === 'delete') {
  const calendarId = data.calendarId || 'primary';
  const eventId = data.eventId;
  if (!eventId) {
    console.error('Missing required field: eventId');
    process.exit(2);
  }
  const result = runGog(['calendar', 'delete', calendarId, eventId, '--force']);
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.ok ? 0 : 1);
}

usage();
