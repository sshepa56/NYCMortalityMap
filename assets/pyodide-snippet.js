// Turns every <div class="pyodide-snippet"> on the page into an editable,
// runnable Python snippet. Python runs in the visitor's browser using Pyodide.
//
// Each snippet needs a <textarea> (the code), a <button> (Run), and a
// <pre> (where the output appears). See embedding-code.md for an example.

const PYODIDE_URL = "https://cdn.jsdelivr.net/pyodide/v314.0.8/full/";

let pyodideReady = null; // Pyodide only gets downloaded once, the first time Run is clicked

function loadPython() {
  if (!pyodideReady) {
    pyodideReady = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = PYODIDE_URL + "pyodide.js";
      script.onload = () => loadPyodide({ indexURL: PYODIDE_URL }).then(resolve, reject);
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  return pyodideReady;
}

for (const snippet of document.querySelectorAll(".pyodide-snippet")) {
  const code = snippet.querySelector("textarea");
  const button = snippet.querySelector("button");
  const output = snippet.querySelector("pre");

  button.addEventListener("click", async () => {
    button.disabled = true;
    output.textContent = "Loading Python…";
    try {
      const pyodide = await loadPython();
      output.textContent = "";
      pyodide.setStdout({ batched: (text) => (output.textContent += text + "\n") });
      pyodide.setStderr({ batched: (text) => (output.textContent += text + "\n") });
      await pyodide.loadPackagesFromImports(code.value); // auto-installs numpy, pandas, etc. if imported
      await pyodide.runPythonAsync(code.value);
    } catch (error) {
      output.textContent += error.message;
    }
    button.disabled = false;
  });
}
