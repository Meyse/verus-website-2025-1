# AGENTS.md

## Homepage/page section treatment

Use these rules when applying the current Verus homepage design language to other pages.

### Structure

- Prefer one connected bordered shell for related homepage/page sections instead of separated floating cards.
- Remove gaps between adjacent sections that should feel connected.
- Use 1px dividers only: `border-gray-200 dark:border-gray-800`.
- Avoid doubled borders at section boundaries. If the previous section already has a bottom border, do not add another top border on the next section.
- For two-column grids, use the grid/container border plus `md:border-l` on the right column and mobile `border-t` where needed.
- Do not put cards inside cards. Sections should read as connected bands/cells.

### Visual Style

- Default to a neutral look: headings in `text-gray-800 dark:text-white`, body copy in `text-gray-600 dark:text-gray-300`.
- Avoid blue headings except for intentional stat numbers, primary buttons, or brand panels.
- Smooth light backgrounds are fine, usually `bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-950`.
- Do not add decorative radial gradients, polka dots, floating circles, glow blobs, or blur blobs.
- The Discord panel is allowed to keep its bold brand-color background.

### Typography

- Use sentence case for headings.
- Headings and button/link labels should not end with periods.
- Body copy should use normal sentence punctuation.
- Use normal letter spacing for subtitles/body copy: `tracking-normal`.
- Narrative section headings use the protocol/compare treatment:
  - `text-[28px] md:text-[44px]`
  - `font-medium leading-[1.2] tracking-tight`
  - `mb-4 md:mb-8`
  - content wrapper around `max-w-[760px]`
- Compact card headings use the `Build more, code less` treatment:
  - `mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]`
- Subtitles/body copy in these sections should match:
  - `text-[15px] md:text-[17px]`
  - `leading-relaxed tracking-normal`
  - `text-gray-600 dark:text-gray-300`

### Buttons

- Primary CTAs use Verus blue:
  - `border-verus-blue bg-verus-blue text-white`
  - hover: `hover:bg-verus-blue/90`
- Secondary CTAs use neutral outlined styling:
  - `border-gray-300 bg-white/90 text-gray-800`
  - hover: `hover:border-gray-400 hover:bg-white`
- Keep buttons at `h-[40px] md:h-[50px]`, `rounded-lg`, and `font-medium`.
- Internal CTA buttons can use the arrow icon.
- External CTA buttons must use the open-in-new-tab icon, not an arrow.

### Text Links

- Inline text links should match the top-menu documentation link style:
  - `group ... inline-flex items-start rounded-lg p-2 transition-colors [&>div>div]:hover:underline`
  - text wrapper: `text-[15px] font-[450] text-gray-800 dark:text-white`
- Keep relevant leading icons, such as the Medium icon.
- External text links should include the open-in-new-tab icon with low opacity that increases on hover.

### Copy Conventions

- Prefer concise, direct copy.
- Use sentence case consistently: `Latest articles`, not `Latest Articles`.
- Avoid label/heading punctuation: `Choose a wallet`, not `Choose a wallet.`
- If a number is part of the content, keep it specific and visible, e.g. `See all 207 API calls`.
- When reusing this treatment elsewhere, preserve user-requested wording exactly unless asked to improve copy.

### Verification

- Run `yarn lint` after component edits.
- Check mobile and desktop layouts when section heights, headings, or button rows change.
