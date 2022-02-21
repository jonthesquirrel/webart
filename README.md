## Bouncing

This piece uses `requestAnimationFrame()` to move the squares every frame. The position is animated using CSS transform, which should improve performance over using position, which may cause DOM updates.

## Zooming

This piece uses only CSS Animation by changing the size of an inset `border-box`. No JavaScript needed!
