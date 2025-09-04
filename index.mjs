import clipboard from "clipboardy";

function clog(data) {
  const output =
    typeof data === "object" ? JSON.stringify(data, null, 2) : String(data);
  console.log(output);

  try {
    if (typeof window === "undefined") {
      clipboard.writeSync(output);
    } else if (navigator.clipboard && document.hasFocus()) {
      navigator.clipboard.writeText(output);
    } else {
      console.warn("Clipboard not supported in this environment.");
    }
  } catch (e) {
    console.warn("Failed to copy to clipboard:", e.message);
  }
}

export { clog };