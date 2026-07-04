---
name: portfolio-toni-skills
description: Rules for Portfolio Toni Project.
disable-model-invocation: false
---

## General
– HTML/CSS/JS only. Absolutely never use Tailwind, React and Typescript.
– Use Astro and put independent and reusable UI elements into their own components.
– Don’t add local CSS styles that override global defaults and have no impact on the behaviour of the component (e.g. line-height: 1.5, color: grey).

## HTML
– Do not use BEM convention
– Use semantic tags (header, main, nav, button, dialog where applicable).
– Accessibility baseline: keyboard navigation, focus states, ARIA only when needed (don’t ARIA-overuse).

## CSS
– Don't hold back using cutting edge CSS because of concerns of browser support. E.g. do use anchor-positioning, view-transitions, scroll-driven-animations.
– Use existing Design Tokens from «styles» Folder when available, if none are available use an existing one that comes close. Only if there is absolutely no match use a hard coded value that is obviously in need of fine tuning, like color: red; or border: 10px solid red;

## JS
– Keep the Javascript scoped to the component, only use global JS when absolutely needed.

## Animations
– For animations that are triggered by the user and are not a simple transition, add a class to the DOM while the animation is playing, so it can be triggered again while it is still playing.
– Accoplish animations using CSS Transitions and Keyframes.
– For more complicated animations and SVG animations (paths) use the Motion.dev libary
