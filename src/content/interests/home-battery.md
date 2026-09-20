---
title: 70 kWh home battery
summary: A home energy storage system I built from scratch, designed for 70 kWh and running at 20 kWh so far.
order: 1
gallery: battery-overview
detailsHref: /interests/home-battery/specifics/
detailsLabel: See the build in detail
---

I started this project while studying Computer Science. Circuit design was the one subject that never quite clicked for me in lectures, so I took on the battery build as a personal challenge. In my experience, the only way to truly understand a system is to build it yourself.

My parents already had solar panels installed, which gave me the idea to add a battery to store what the panels produce. I wrote them a document with the budget and how many years it would take to pay itself back, and since they trust me a lot, it didn't take much to convince them. The house is quite big and has a pool that consumes quite a bit, so there is always plenty of energy to put to use, which makes the investment easier to recover. I built everything myself, doing hole by hole, soldering cell by cell with one exception: a cousin of mine welded the metal structure that holds it, as I didn't know how to weld back then.

It took me a year to build, and it has been running since 2022, with a single downtime of four months in 2025.

## What it does

The system operates in parallel with the grid. Whenever solar production exceeds household demand, the surplus charges the battery. When demand outpaces solar (at night) the inverter draws stored energy to minimize grid consumption, dynamically supplying only what the house needs up to a 5 kW continuous limit.

## Built to grow

The core of what I designed is a modular mechanical frame built specifically for easy expansion. Individual cells can be inspected, swapped, or added without disturbing the rest of the pack. As-is, the structure has physical capacity for around 70 kWh simply by populating empty slots.

The current pack is configured as 15S (15 series, each holding modules of 4 cells in parallel), which optimizes spatial density. The existing frame can scale even further: by simply swapping out the 3D-printed cell holders, each row could accept 8P modules, doubling the structural capacity to roughly 140 kWh.

For a deeper look into the design rationale, trade-offs, and safety architecture, check out the Specifics page.