/**
 * Class name utility (from V0/shadcn). Use for conditional Tailwind classes.
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}
