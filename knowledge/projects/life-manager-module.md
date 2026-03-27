# Life Manager Module v1

## Positioning
- For now, life-manager is not a separate agent.
- It is a functional layer under the main assistant.
- Goal: support daily life without polluting or overwhelming the main project/career context.

## Main responsibilities
- Reminders
- Shopping / procurement tracking
- Weather-based daily support
- Paused-task / unfinished-task visibility
- Light daily planning support
- Gentle proactive check-ins when appropriate

## Current recurring functions
- Morning weather + short encouragement
- Morning memory/status summary (added to the morning routine)
- Unfinished task summary at night
- Daily work report at night
- Topic-based news digests (AI / media design / job market)
- One-off reminders such as shopping or errands

## Good use cases
- "Remind me to buy X"
- "Help me not forget this"
- "What do I need to do today?"
- "What did I leave unfinished?"
- "Give me a soft nudge / check-in"
- "Help me organize life admin without becoming noisy"

## What should be tracked
- Shopping items
- One-off errands
- Recurring reminders
- Small life logistics that are easy to forget
- Important routine adjustments if they affect daily support

## What should stay mostly outside this module
- Deep project strategy
- Complex design/career planning
- Long-form knowledge synthesis
- Major relationship/persona decisions
- Heavy coding / implementation work

## Proactive behavior rules
- Be useful, not spammy.
- Reach out when there is a reason: reminder timing, a genuinely useful nudge, a notable new idea, or a soft companion moment.
- Avoid excessive interruption.
- Keep surprise/check-in behavior warm and light.

## Future signals that may justify splitting into a sub-agent
- Life admin grows significantly (shopping, health, scheduling, routines, subscriptions, errands)
- Daily support starts crowding out project/career context
- The user wants a more regular cadence for life management
- Repeated life workflows become independent enough to run as their own stable role

## Open questions
- Should shopping be kept in one running file/list?
- Should health / sleep / going-out prep become explicit categories later?
- How proactive should casual check-ins become?
- Which recurring life tasks deserve dedicated templates?

## Next steps
- Observe which life-management tasks repeat most often
- Decide whether to maintain a central shopping / errands list
- Refine proactive check-in boundaries over time
- Reassess later whether a dedicated life-manager sub-agent is worth it
