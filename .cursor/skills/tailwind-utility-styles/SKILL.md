---
name: tailwind-utility-styles
description: >-
  Prefer Tailwind CSS utilities for all layout, spacing, typography, color, and
  effects. Maps user-supplied pixel values to the nearest default Tailwind scale
  tokens—no hardcoded px in class strings (e.g. avoid text-[15px], p-[13px]) or
  inline style dimensions when a utility exists. Use when styling UI, editing
  CSS, converting designs to code, or when the user mentions pixels, spacing,
  margins, padding, font size, radius, or Tailwind.
---

# Tailwind utility styles

## Default behavior

1. **Use Tailwind first** — Express styling with utilities (`flex`, `gap-4`, `text-sm`, `rounded-lg`, `text-zinc-600`, etc.). Prefer extending the theme in config over one-off arbitrary values when a pattern repeats.
2. **No hardcoded pixel utilities** — Do not use arbitrary-value classes that embed raw pixels (`w-[240px]`, `mt-[18px]`, `text-[15px]`) when a scale token is within ~2px. Do not use `style={{ padding: '17px' }}` for things Tailwind covers.
3. **User says “N px”** — Convert to the **nearest** token below (round ties toward the token that matches common design intent: e.g. 18px → `gap-4` (16px) or `gap-5` (20px); pick the closer unless the user asked for “slightly tighter/looser”).
4. **1px lines** — Use `border`, `divide-y`, `ring-1`, `w-px`, `h-px`, or spacing key `px` (1px) where appropriate—not `border-[1px]` unless required for specificity.

## Spacing scale (default Tailwind)

Each unit = **4px** unless noted. Class prefix examples: `p-`, `m-`, `gap-`, `w-`, `h-`, `size-`, `top-`, `inset-`, etc.

| Token | px |
|------|-----|
| `0` | 0 |
| `px` | 1 |
| `0.5` | 2 |
| `1` | 4 |
| `1.5` | 6 |
| `2` | 8 |
| `2.5` | 10 |
| `3` | 12 |
| `3.5` | 14 |
| `4` | 16 |
| `5` | 20 |
| `6` | 24 |
| `7` | 28 |
| `8` | 32 |
| `9` | 36 |
| `10` | 40 |
| `11` | 44 |
| `12` | 48 |
| `14` | 56 |
| `16` | 64 |
| `20` | 80 |
| `24` | 96 |
| `28` | 112 |
| `32` | 128 |
| `36` | 144 |
| `40` | 160 |
| `44` | 176 |
| `48` | 192 |
| `52` | 208 |
| `56` | 224 |
| `60` | 240 |
| `64` | 256 |
| `72` | 288 |
| `80` | 320 |
| `96` | 384 |

**Max width / breakpoints**: Prefer named containers (`max-w-md`, `max-w-screen-sm`, `max-w-7xl`) over `max-w-[1234px]`.

## Typography

| Token | px |
|------|-----|
| `text-xs` | 12 |
| `text-sm` | 14 |
| `text-base` | 16 |
| `text-lg` | 18 |
| `text-xl` | 20 |
| `text-2xl` | 24 |
| `text-3xl` | 30 |
| `text-4xl` | 36 |
| `text-5xl` | 48 |
| `text-6xl` | 60 |
| `text-7xl` | 72 |
| `text-8xl` | 96 |
| `text-9xl` | 128 |

Line height: prefer `leading-none`, `leading-tight`, `leading-snug`, `leading-normal`, `leading-relaxed`, `leading-loose` instead of pixel line heights.

## Border radius

| Token | px |
|------|-----|
| `rounded-none` | 0 |
| `rounded-sm` | 2 |
| `rounded` / `rounded-DEFAULT` | 4 |
| `rounded-md` | 6 |
| `rounded-lg` | 8 |
| `rounded-xl` | 12 |
| `rounded-2xl` | 16 |
| `rounded-3xl` | 24 |
| `rounded-full` | full circle |

## When arbitrary values are acceptable

Use arbitrary **non-pixel** or **semantic** values only when:

- The design token is **not** on the default scale and the project has no matching theme extension.
- CSS that Tailwind does not model well in utilities (e.g. complex `clip-path`)—still avoid px for things that have tokens.

If the user insists on an exact pixel match for a one-off, prefer adding a **theme extension** once rather than scattering `[]` px values.

## Quick conversion rule

For spacing/sizing in px: **divide by 4** and snap to the nearest token in the table (`3.5` for 14px, `4` for 16px, etc.). If between two tokens, choose the closer px distance.
