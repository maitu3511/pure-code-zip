# Home page motion and image updates

## Changes
- Replace the single image in “Your Strategic Growth Partner in the Digital Space” with an automatic, responsive carousel using relevant existing project imagery, with accessible previous/next controls and stable dimensions.
- Slow the continuously scrolling home services row so each service remains readable; keep pause-on-hover/touch behavior.
- Reserve enough fixed responsive height/width for the hero typewriter line based on the longest phrase, so typing and deleting text never moves content below it.
- Preserve all other content and styling.

## Validation
- Check the home page at desktop and mobile widths.
- Confirm carousel movement and controls, slower service scrolling, and no typewriter layout shift.

## Technical details
- Keep carousel state and timing client-side while rendering a stable first image.
- Respect reduced-motion preferences for automatic animation.
