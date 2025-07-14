import { useState, useRef, useEffect } from "react";
import commands from "./commands";

const defaultIntro = [
  "Welcome to Yafer's Terminal Portfolio!",
  "Type `help` to see available commands.",
];

function App() {
  const [history, setHistory] = useState(defaultIntro);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const handleCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    if (command === "clear") {
      setHistory(defaultIntro);
      return;
    }

    const result = commands[command];
    const response =
      typeof result === "function"
        ? result()
        : result || `Command not found: ${cmd}`;
    setHistory((prev) => [...prev, `$ ${cmd}`, response]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    handleCommand(input);
    setInput("");
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [history]);

  return (
    <div
      className="bg-black text-slate-300 font-mono text-sm min-h-screen flex justify-center items-center p-4"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="w-full max-w-3xl flex flex-col">
        {/* Terminal Header */}
        <div className="bg-gray-900 text-white px-4 py-2 rounded-t-md flex items-center justify-between border border-b-0 border-green-500">
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            Yafer Portfolio
          </span>
          <span className="text-xs sm:text-sm text-green-400">
            Command Prompt
          </span>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalRef}
          className="bg-black border border-green-500 rounded-b-md p-4 flex-1 overflow-y-auto whitespace-pre-wrap max-h-[80vh] sm:max-h-[70vh]"
        >
          {history.map((line, i) => (
            <div
              key={i}
              className="mb-1"
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}

          <form onSubmit={handleSubmit} className="flex items-center mt-2">
            <span className="text-green-400 mr-2 select-none shrink-0">
              $yaferdev/
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-black text-green-400 focus:outline-none caret-green-400 w-full sm:text-base text-sm truncate"
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
