import clipboard from "clipboardy";

export function clog(data) {
  const output =
    typeof data === "object" ? JSON.stringify(data, null, 2) : String(data);
  console.log(output);

  // Format output for objects
  try {
    if (typeof window === "undefined") {
      // Node.js
      clipboard.writeSync(output);
    } else if (navigator.clipboard && document.hasFocus()) {
      // Browser
      navigator.clipboard.writeText(output);
    } else {
      console.warn("Clipboard not supported in this environment.");
    }
  } catch (e) {
    console.warn("Failed to copy to clipboard:", e.message);
  }

  // Copy to clipboard

  try {
    clipboardy.writeSync(output);
    console.log("✅ Copied to clipboard");
  } catch (error) {
    console.error("❌ Failed to copy to clipboard:", error.message);
  }
}
