# Agent Harness

## Project Commands

- Assume the project is already running via `npm run dev`.
- Do not start duplicate development servers unless explicitly asked.
- Never run `npm run build`; it breaks the dev server's version in this project.
- Use `npm run lint` for verification when needed.

## Working Notes

- Keep changes scoped to the user's request.
- Do not edit generated or unrelated files unless the task requires it.
- Preserve existing user changes in the working tree.
- Header/title vertical alignment can be misleading because the Josefin Sans glyphs sit high in their line box. If mobile header spacing looks too large below `TIM DOBRANSKI`, check font metrics/line-height and consider a small negative margin or transform on the title before adding more container padding changes.
