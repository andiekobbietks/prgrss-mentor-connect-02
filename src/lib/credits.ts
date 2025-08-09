// Simple utility to open the Credits popover programmatically from anywhere
export function openCreditsPopover() {
  try {
    console.debug("[credits] openCreditsPopover (lib) dispatch");
    window.dispatchEvent(new Event("prgrss:show-credits"));
  } catch {}
}
