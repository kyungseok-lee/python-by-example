import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Play, X } from "lucide-react";
import { runPythonCode } from "@/lib/pyodide";
import { highlightPythonCode } from "@/lib/examples-data";

interface CodeBlockProps {
  code: string;
  filename?: string;
  showRunButton?: boolean;
}

export default function CodeBlock({ code, filename = "code.py", showRunButton = true }: CodeBlockProps) {
  const [output, setOutput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const handleRun = async () => {
    setIsRunning(true);
    setShowOutput(true);
    setOutput("실행 중...");
    
    try {
      const result = await runPythonCode(code);
      setOutput(result || "(출력 없음)");
    } catch (error: any) {
      setOutput(`오류: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const handleClearOutput = () => {
    setShowOutput(false);
    setOutput("");
  };

  return (
    <div className="space-y-4">
      <div className="bg-code-bg border border-code-border rounded-lg overflow-hidden">
        <div className="flex items-center justify-between bg-muted px-4 py-2 border-b border-code-border">
          <span className="text-sm font-medium text-muted-foreground">{filename}</span>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground"
            >
              <Copy className="w-4 h-4" />
              <span className="text-sm">{copySuccess ? "복사됨" : "복사"}</span>
            </Button>
            {showRunButton && (
              <Button
                variant="default"
                size="sm"
                onClick={handleRun}
                disabled={isRunning}
                className="flex items-center space-x-1"
              >
                <Play className="w-4 h-4" />
                <span className="text-sm">{isRunning ? "실행 중..." : "실행"}</span>
              </Button>
            )}
          </div>
        </div>
        <div className="p-4">
          <pre 
            className="code-block syntax-python text-sm leading-relaxed overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: highlightPythonCode(code) }}
          />
        </div>
      </div>

      {showOutput && (
        <div className="run-result rounded-lg p-4 font-mono text-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground">실행 결과:</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearOutput}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="whitespace-pre-wrap">{output}</div>
        </div>
      )}
    </div>
  );
}
