# Preferred Tech Stack & Implementation Rules

When generating code or UI components for this brand, you **MUST** strictly adhere to the following technology choices.

## Core Stack
* **Framework:** React (TypeScript preferred)
* **Styling Engine:** Tailwind CSS (Mandatory)
* **Component Library:** shadcn/ui
* **Icons:** Lucide React

## Implementation Guidelines

### 1. Tailwind Usage
* Use utility classes directly in JSX.
* **Colors:** Use Tailwind variables corresponding to the brand (e.g., `indigo-600` for primary, `slate-900` for secondary, `emerald-500` for accent).
* **Dark Mode:** Support dark mode context using `dark:` variants, typically shifting `bg-slate-50` to `dark:bg-slate-950` for app backgrounds, and `bg-white` to `dark:bg-slate-900` for cards.
* **Motion:** All motion must use `ease-[cubic-bezier(0.4,0,0.2,1)]`.
  - Micro-interactions (hover, toggles): 150ms duration (`duration-150`).
  - Complex transitions (modals, routes): 250-300ms duration (`duration-300`).

### 2. Component Patterns
* **Buttons:** Primary actions must use the solid Primary color (`bg-indigo-600 text-white`) with Medium radius (`rounded-md` or 8px) and `px-4 py-2` (approx 10px 18px padding).
* **Forms:** Labels must be placed *above* input fields. Base text size for inputs is `text-base` (16px) to prevent iOS zoom. Use `gap-4` between form items. Medium radius.
* **Cards:** Base is `bg-white dark:bg-slate-900` with Large radius (`rounded-2xl` or 16px) and `p-6` (24px).
* **Layout:** Base on a 4px grid. Grid margins: Desktop 32px/24px, Tablet 24px/16px, Mobile 16px.

### 3. UX Principles
1. **Never Block the Flow:** Use non-modal side sheets or inline expansion instead of full-screen modals.
2. **Instant System Feedback:** Optimistically update UI instantly for actions (e.g., bulk-updates).
3. **Visual Confirmation:** Every interaction requires a responsive state (hover, active, focus).
4. **Progressive Disclosure:** Hide complex settings behind "Advanced Options". Keep default view essential.
5. **The 80/20 Rule:** Prominently surface actions that make up 80% of use.

### 4. Forbidden Patterns
* Do NOT use jQuery or Bootstrap.
* Do NOT use rigid, linear easing (`ease-linear`). Always use the custom bezier.
* Do NOT use full-screen blocking modals for standard edits.
