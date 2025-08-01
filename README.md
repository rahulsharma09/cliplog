# 📋 cliplog

> Console.log that copies to clipboard automatically 🔥

---

## 🚀 Features

✅ Instantly copies console logs to clipboard  
✅ Works with strings, numbers, objects, arrays  
✅ Automatically formats objects as pretty JSON  
✅ Great for debugging, sharing logs, tokens, IDs  
✅ Zero config — just plug and play

---

## 📦 Installation

```bash
npm install cliplog

📖 How to Use
Import the function:
js
Copy
Edit
import { clog } from 'cliplog';
Use it like console.log, but better:
js
Copy
Edit
clog('Hello world!');
clog({ name: 'Alice', age: 25 });
✅ Logs the data to the console
✅ Copies it to your system clipboard
✅ Pretty prints objects

📂 Example Output
json
Copy
Edit
{
  "name": "Alice",
  "age": 25
}
✅ Copied to clipboard!
Now you can paste it anywhere — Notion, Slack, terminal, etc.

📌 Why Use cliplog?
Tired of copy-pasting your console logs manually?
clog() automatically logs and copies the output so you don’t have to.

Great for:

Sharing debug info with teammates

Copying tokens or IDs quickly

Exporting formatted logs for docs

Rapid prototyping

🔧 API
clog(data: any)
data — The value to log (string, number, object, array, etc.)

Automatically:

Logs to the console

Copies output to your system clipboard

Pretty-prints objects and arrays

🧪 Try It Locally
bash
Copy
Edit
import { clog } from 'cliplog';

clog({ user: 'Bob', role: 'admin', token: 'abc123xyz' });
✅ Output is logged and copied to your clipboard.

Paste it anywhere using Ctrl+V.

🛠️ Works In:
Node.js (preferably 14+)

ES Module (add "type": "module" to your package.json)

Terminal environments

🐛 Troubleshooting
If clipboard copy fails, ensure your environment supports clipboardy

Works in Node.js (not browser)

📄 License
MIT

🙌 Author
Made with ❤️ by Rahul Sharma