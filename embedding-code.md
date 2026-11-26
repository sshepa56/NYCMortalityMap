# Code Examples

[← Back to home](README.md)

## Showing Code with Markdown

To show code on a page, put it between two lines of three backticks. Add the language name after the first set of backticks to turn on syntax highlighting:

````markdown
```python
print("hello world")
```
````

Here's a full example:

```python
# another example, for generating angry text from normal text

def angry(text):
    text = text.upper() # makes text uppercase
    exclamations = "!"*len(text)
    return text + exclamations

print(angry("hello world"))
```

This is static: visitors can read and copy the code, but can't run it. It looks the same on GitHub.com and on the published site.

## Running a Code Snippet in the Page (Pyodide)

Here's the same code as a snippet that runs in the browser with [Pyodide](https://pyodide.org/). Click **Run**, then try editing the code and running it again:

<div class="pyodide-snippet">
<textarea rows="9" spellcheck="false" style="width: 100%; font-family: monospace;">
# another example, for generating angry text from normal text

def angry(text):
    text = text.upper() # makes text uppercase
    exclamations = "!"*len(text)
    return text + exclamations

print(angry("hello world"))
</textarea>
<button>Run</button>
<pre></pre>
</div>
<script src="assets/pyodide-snippet.js"></script>

*(The runnable snippet only works on the published site. On GitHub.com you'll just see the code.)*

### How to Add Your Own

Paste this HTML into any Markdown page and replace the code inside the `<textarea>`:

```html
<div class="pyodide-snippet">
<textarea rows="9" spellcheck="false" style="width: 100%; font-family: monospace;">
print("your code here")
</textarea>
<button>Run</button>
<pre></pre>
</div>
<script src="assets/pyodide-snippet.js"></script>
```

- `rows="9"` sets how many lines tall the code box is.
- You can have several snippets on one page, but include the `<script>` line only **once**, after the last snippet.
- All the snippets on a page share the same Python session, so a function defined in one snippet can be used in the next.
- The code in `assets/pyodide-snippet.js` loads Pyodide the first time someone clicks **Run**, so pages stay fast for visitors who only read. The first run takes a few seconds.
- Packages built into Pyodide, like `numpy` and `pandas`, load automatically when your code imports them.
- Snippets show printed text only. For charts and whole projects, use JupyterLite (below).

## Running a Whole Notebook in the Browser (JupyterLite)

This site includes [JupyterLite](https://jupyterlite.readthedocs.io/), a version of Jupyter that runs entirely in the web browser. Visitors can open, edit, and run your notebook without installing Python, Anaconda, or Jupyter. The Python code runs on *their* computer, inside the browser, using [Pyodide](https://pyodide.org/) (Python compiled to WebAssembly).

**[Open the example notebook →](notebook/notebooks/index.html?path=week10.ipynb)**

Or try it right here, as an iFrame embedded in this page:

<iframe src="notebook/notebooks/index.html?path=week10.ipynb" width="100%" height="600" style="border: 1px solid #ccc;"></iframe>

*(The embedded notebook only appears on the published site, not when viewing this file on GitHub.com.)*

### How It's Set Up

Three pieces make this work:

1. **The `notebook/` folder.** Everything in it (notebooks, `.csv` files, images) gets copied into JupyterLite and appears in its file browser. Your notebook can open data files with normal relative paths, like `pd.read_csv("senate_average_recent.csv")`.
2. **The build workflow** in `.github/workflows/pages.yml`. Each time you push, a GitHub Action builds the Markdown pages with Jekyll, then runs `jupyter lite build` on the `notebook/` folder and publishes the result at `/notebook/` on your site.
3. **The Pages setting.** In **Settings → Pages**, **Source** must be set to **GitHub Actions** (not "Deploy from a branch"), so GitHub publishes what the workflow built.

### Adding Your Own Notebook

1. Put your `.ipynb` file, and any data files it reads, in the `notebook/` folder.
2. Link to it from any page. Replace `YOUR-NOTEBOOK.ipynb` with your file's name:

   ```markdown
   [Open my notebook](notebook/notebooks/index.html?path=YOUR-NOTEBOOK.ipynb)
   ```

   To embed it in a page instead, paste this HTML into your Markdown file:

   ```html
   <iframe src="notebook/notebooks/index.html?path=YOUR-NOTEBOOK.ipynb" width="100%" height="600"></iframe>
   ```

3. Commit and push. The **Actions** tab on GitHub will show the build process.

There are two interfaces to choose from:

| URL | Opens |
| --- | --- |
| `notebook/notebooks/index.html?path=FILE.ipynb` | One notebook, in the simple Jupyter Notebook view |
| `notebook/lab/index.html?path=FILE.ipynb` | The full JupyterLab interface, with a file browser |

### Installing Packages

In JupyterLite, many common packages load automatically when you `import` them, including `pandas`, `numpy`, `matplotlib`, and `wordcloud`. Other Python packages can be installed with `%pip`. Add a cell like this at the top of your notebook:

```python
# Running in the browser (JupyterLite)? Install the packages that aren't
# built into Pyodide first. On a regular Jupyter install this cell does nothing.
import sys

if "pyodide" in sys.modules:
    %pip install plotly nbformat pydeck
```

Because of the `if` check, the same notebook still works in regular Jupyter on your own computer. Plotly charts also need `nbformat` installed, as shown above.

### Things to Know

- **Changes are saved in the visitor's browser only.** If a visitor edits your notebook, their changes stay in their own browser storage. They never change the files in your repo. To get back to the original, they can clear the site's data in their browser.
- **Loading data from other websites may be blocked.** Browsers only let pages load data from other sites that allow it. A best practice is to put your data files directly in the `notebook/` folder.

---

Previous: [← About the Project](about.md)
