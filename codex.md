# BagnBros Codex Implementation Guide

## Product Intent

- Build a premium mountain-travel landing page that feels cinematic, human, and conversion-ready.
- Convert visitors into WhatsApp inquiries through emotionally strong storytelling and clear CTA rhythm.
- Keep the page swap-ready for future founder memory photos without structural rewrites.

## Audience

- Primary: 20-35 urban travelers in India who want offbeat, story-led trips.
- Secondary: friend groups and couples seeking curated mountain experiences.

## Success Criteria

- Hero communicates brand value in under 6 seconds.
- Reels/timelapse section feels memorable and scroll-stable on mobile and desktop.
- "Node/select" language is fully removed from user-facing copy.
- Touristy image quality feels aspirational and consistent across sections.
- Core conversion paths (anchors + WhatsApp CTAs + form) remain functional.

## Visual Direction

- Mood: mountain documentary + editorial travel magazine.
- Palette: misty neutrals, warm amber accents, restrained contrast boosts.
- Typography:
  - Display: Fraunces
  - Body: DM Sans
  - Metadata: JetBrains Mono
- Imagery:
  - Use Unsplash + Pexels scenic and human travel photography.
  - Prioritize: sunrise ridges, mountain roads, hikers, village culture, campfire nights, viewpoints.
- Transparency style:
  - Layered translucent surfaces over full-bleed photography.
  - No muddy blending tricks on logo marks.

## No-AI-Slop Guardrails

- Avoid generic cards repeated with identical spacing and proportions.
- Use varied section rhythms and asymmetry where meaningful.
- Keep copy specific and place-based, not vague luxury buzzwords.
- Prefer subtle motion pacing over constant micro-animation.
- Keep UI density intentional: less dead space, clearer section hierarchy.

## Section Behavior Spec

1. Nav

- Keep fixed header with clean logo rendering.
- Remove blend modes that introduce logo artifacting.

2. Hero

- Remove dropdown planner entirely.
- Replace with concise CTA strip and promise points.
- Maintain atmospheric collage with larger, transparent photo treatment.

3. Dossier + Chapters

- Preserve narrative chapter flow.
- Increase scenic image prominence and reduce overly dark overlays.

4. Reels/Timelapse

- Keep as centerpiece.
- Use staged reveal: slit open -> statement -> CTA -> progress feedback.
- Label as memory-led narrative for upcoming founder photos.

5. Packages + Booking

- Remove all "node" terminology.
- Keep booking form functional with plain travel language.
- Keep package cards visually rich and conversion-oriented.

6. Footer

- Use custom monoline hiking backpack avatar motif.
- Keep trust and contact details scannable.

## Image Source Contract

- Current phase uses curated Unsplash + Pexels URLs.
- Store all remote image URLs in a single source map for easy replacement.
- Add a clear swap path: replace URL constants only, no layout changes needed.

## Motion Rules

- Animate transform + opacity only.
- Use easing: cubic-bezier(0.16, 1, 0.3, 1).
- Ensure reduced-motion fallback remains honored.

## UX and Content Rules

- Remove "node", "select node", "book your node", and similar phrasing.
- Keep CTAs action-specific: "View Itineraries", "Talk to Trip Captain", "Plan My Trip".
- Maintain minimum 44px interactive target sizes.

## QA Checklist

- Functional:
  - Anchor links jump correctly.
  - All WhatsApp links open expected prefilled message.
  - Booking form submits and success state appears.
- Visual:
  - Logo appears clean on light and dark sections.
  - Touristy imagery appears high-quality and consistent.
  - Reels section remains in page flow and reads clearly.
- Responsive:
  - Hero, reels, and package cards remain legible at mobile widths.
  - No clipped CTA buttons or overflow text.
- Accessibility/performance:
  - Contrast remains readable for key text.
  - Reduced motion behavior still disables major animations.
  - No animation jank from layout-triggering properties.

## Rollout Order

1. Establish image source map and codex alignment.
2. Refactor hero and nav/logo treatment.
3. Upgrade reels/timelapse readability and pacing.
4. Clean node language in booking and packages.
5. Apply footer avatar and final spacing polish.
6. Run build and visual QA pass.
