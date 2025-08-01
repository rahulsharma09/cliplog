import clipboardy from "clipboardy";

export function clog(data) {
  let output;

  // Format output for objects
  if (typeof data === "object") {
    try {
      output = JSON.stringify(data, null, 2);
    } catch {
      output = String(data);
    }
  } else {
    output = String(data);
  }

  console.log(output);

  // Copy to clipboard

  try {
    clipboardy.writeSync(output);
    console.log("✅ Copied to clipboard");
  } catch (error) {
    console.error("❌ Failed to copy to clipboard:", err.message);
  }
}