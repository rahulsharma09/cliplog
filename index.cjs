async function clog(data) {
  const clipboard = await import('clipboardy');
  const output =
    typeof data === "object" ? JSON.stringify(data, null, 2) : String(data);
  console.log(output);

  // Format output for objects
  try {
    if (typeof window === "undefined") {
      // Node.js
      await clipboard.default.write(output);
    } else if (navigator.clipboard && document.hasFocus()) {
      // Browser
      navigator.clipboard.writeText(output);
    } else {
      console.warn("Clipboard not supported in this environment.");
    }
  } catch (e) {
    console.warn("Failed to copy to clipboard:", e.message);
  }
}

module.exports = {clog};