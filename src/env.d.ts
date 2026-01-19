/// <reference path="../.astro/types.d.ts" />
declare namespace astro.JSX {
  interface HTMLAttributes {
    popover?: boolean | "auto" | "manual";
    anchor?: string;
  }
}
