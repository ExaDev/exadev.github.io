---
title: 
aliases: []
tags:
  - agile
  - auftragstaktik
  - business_objectives
  - c_suite
  - delegated_autonomy
  - implementation_details
  - military_strategy
  - mission_tactics
  - project_management
  - software_development
  - software_engineering
  - strategic_planning
  - tactical_initiatives
  - team_collaboration
  - waterfall
created: 2024-06-26T16:00:25
modified: 2024-06-28T13:22:15
---

I was introduced to the term Auftragstaktik by Andrew Parker (<https://www.anthropologist.dev/>) and I've been taken by it ever since. What is it? And what does it have to do with delivering software?

## History

Auftragstaktik translates as "Mission Tactics". It's a method of military command and delegation adopted by the Prussian army in the mid-19th century. During the Austro-Prussian (1866) and Franco-Prussian (1870-1871) wars, the Prussian army observed that the increased lethality of weapons and the greater dispersion of forces meant that commanders of military units were often unable to directly observe and control their forces.$^1$

The traditional method of command and control was Befehlstaktik - "Order Tactics". This meant issuing rigid, detailed orders and expecting them to be carried out to the letter. The Prussians recognised that this could lead to poor decisions that did not take into account the context of what was unfolding on the ground.

The innovation was to understand that by issuing less specific, more intent-driven orders, commanders were able to delegate tactical decisions to commanders who were closer to the action. As long as they understood the higher level intent of the order, they could use their initiative to achieve the objective - taking into account the reality of the situation on the ground.

This delegated autonomy requires a high level of trust, and the Prussians cultivated a pervasive culture throughout their army such that superiors could reasonably expect their subordinates to approach a problem in the same way as they would. They did this through another innovation - the General Staff. A permanent, full time professional body that studied war even in times of peace, and had a structured rigorous training programme through which all staff officers had to pass.

## Agile

Enough history. How does this relate to delivering software? You can draw an immediate parallel between Befehlstaktik and Waterfall. In waterfall, requirements are exhaustively analysed up front, and a detailed specification for the software is built.

We can therefore draw a parallel between Auftragstaktik and Agile as similar philosophies. We accept that we cannot have knowledge of all details and requirements up front, and we anticipate that we are going to have to learn, and use our initiative to solve problems as they occur. We generally wish to delegate the autonomy of how to solve a problem to those closest to the problem.

## Applying These Principles

One of our clients, like many software companies, holds a quarterly planning session. We had the sense that we were packing too much into a quarter, and these planning sessions could last hours as we debated minutiae of implementation details of various tickets.

Whilst this was a high trust, agile environment, the level of detail in these planning sessions left us with a subconscious sense that we had all agreed to some kind of detailed specification of what would be delivered that quarter, even if in such an environment there are no consequences. That in turn created a level of dread in the buildup to the end of a quarter. Phrases such as "we're behind schedule", "we haven't achieved half of what we intended this quarter" started slipping into conversations.

This time, we identified the problem - over specification. We were drilling down into a level of detail that was not relevant to most of the C-Suite, and ultimately made us lose sight of strategic business objectives during those conversations. Taking the principles of Auftragstaktik, this is what we did.

We identified three levels of abstraction, tailored to different audiences.

- Strategic Intents (e.g. Improve reliability of service)
- Tactical Initiatives (e.g. Migrate away from legacy environment into new environment)
- Implementation Details (e.g. Create S3 buckets in new AWS environment)

We adjusted our quarterly planning process thusly:

- C-Suite presents strategic intents and focus areas for the quarter
- We have a "focus budget" of a maximum of three strategic intents per quarter. If one intent is particularly important, it might be the only focus.
- The development team go away and present back high level tactical initiatives that "move the dial" on those focus areas. These can be debated at this level of abstraction.
- We agree the tactical initiatives for the quarter.
- Tactical initiatives should be high level epics that map fairly easily on to strategic intents.
- Strategic Intents usually (but not always) have a natural numerical metric that they relate to.
- Tactical initiatives and strategic intents are not bound to any given quarter, they are just assigned focus until they are deemed complete, or no longer worthy of focus.

The purpose of this is to delegate the initiative to the development team. The C-Suite presents the development team with problems, and the development team is free to propose solutions to those problems.

By avoiding debate at the implementation level, we keep our planning sessions short, focused and at the appropriate level of abstraction for the people in the room. By retaining debate at the tactical initiative level, we allow the C-Suite visibility of plans and the capability to inform clients and stakeholders.

By decoupling intents and initiatives from a timescale and instead focussing on "moving the dial", we remove the anxiety previously associated with quarterly reviews, and encourage open, honest and frank communication without fear of reprisal, fostering greater trust.

The best bit? Our quarterly plan now fits on one page, and takes seconds for a human to parse. It used to be a hodgepodge of implementation tickets spanning pages and pages.

References

1. _Nelsen II, John T. ""Auftragstaktik": A Case for Decentralized Battle." The US Army War College Quarterly: Parameters 17.1 (1987): 22._
