---
title: Electric Vespa restoration
summary: Rebuilding an old Vespa and converting it to electric.
order: 2
gallery: vespa-overview
---

This is my dad's Vespa, about fifty years old and sitting unused for a long time. Going electric wasn't the original plan, I just wanted to get it running again. But once I opened it up, the motor turned out to be too damaged to fix without heavily modifying it:

<p align="center">
  <img src="/vespa/old-piston-state.jpg" alt="The old piston, decades of storage were not kind to it." style="max-width: 20rem; width: 100%;" />
</p>

*The old piston, decades of storage were not kind to it.*

And modifying it that much would have meant losing its classic vehicle status, which requires original parts. Without that status, low-emission zone rules would have limited it to only certain hours of the day. So I decided to convert it to electric instead: a new hub motor, a home-built battery pack (to test, not to make it street legal!), and a chassis repaint to make it feel like new.

My first goal is simply to make it work. Whether it can ever be made street legal is a separate question I'll figure out later, the laws around modified and electric-converted vehicles here in Spain are notoriously strict. But at the end of the day this is a project to learn and have fun with, so it doesn't really matter if it never gets there, as long as I learn something along the way.

The electric side is built around a hub motor kit that replaces the original engine, with a custom bracket welded to mount it in the front fork. The battery follows the same hand-built approach as my [home battery](/interests/home-battery/), individual lithium cells checked one by one and grouped into packs, but it's actually a very different design: a vehicle needs to push out much more power than a house does, from far fewer cells, so this pack uses cells rated for 48 A of continuous discharge each, wired as a 20S10p (20 groups in series, 10 cells in parallel per group) battery. I also split it into 5 smaller packs instead of one big block, specifically so they could be tucked into the existing empty spaces in the body without cutting or reshaping the Vespa's original structure to make room for it.

It's still very much a work in progress: the body needs paint, the wiring still needs to be finished for good, and between everything else going on I don't have much free time to spend on it, so it'll be slow going. But here's the motor spinning for the first time!

<video controls muted playsinline preload="metadata" poster="/vespa/testing-electric-motor-poster.jpg" style="max-width: 28rem; width: 100%; border-radius: 0.5rem;">
  <source src="/vespa/testing-electric-motor.mp4" type="video/mp4" />
</video>
