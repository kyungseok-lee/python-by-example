declare global {
  interface Window {
    loadPyodide: any;
  }
}

let pyodideInstance: any = null;
let pyodidePromise: Promise<any> | null = null;

export async function initPyodide() {
  if (pyodideInstance) {
    return pyodideInstance;
  }

  if (pyodidePromise) {
    return pyodidePromise;
  }

  pyodidePromise = (async () => {
    try {
      // Load Pyodide script if not already loaded
      if (!window.loadPyodide) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      pyodideInstance = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
      });

      // Set up stdout capture
      pyodideInstance.runPython(`
import sys
from io import StringIO
_stdout_backup = sys.stdout
      `);

      return pyodideInstance;
    } catch (error) {
      pyodidePromise = null;
      throw error;
    }
  })();

  return pyodidePromise;
}

export async function runPythonCode(code: string): Promise<string> {
  try {
    const pyodide = await initPyodide();
    
    // Capture stdout
    pyodide.runPython(`
sys.stdout = StringIO()
    `);

    // Run the user code
    pyodide.runPython(code);

    // Get the output
    const output = pyodide.runPython(`
output = sys.stdout.getvalue()
sys.stdout = _stdout_backup
output
    `);

    return output || '';
  } catch (error: any) {
    return `오류: ${error.message}`;
  }
}
