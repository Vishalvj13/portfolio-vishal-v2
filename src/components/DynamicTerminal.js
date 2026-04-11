import React, {useEffect, useRef, useState} from "react";

const terminalLines = [
    { command: 'whoami', output: 'Vishal Junghare' },
    { command: 'echo "Write clean code, test often, refactor always."', output: 'Write clean code, test often, refactor always.' },
    { command: 'pwd', output: '/home/developer/life' },
    { command: 'ls', output: 'Java  SpringBoot  React  MySQL  AWS' },
    { command: 'fortune', output: '“Simplicity is the soul of efficiency.”' },
];

const DynamicTerminal = () => {
    const [displayedLines, setDisplayedLines] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const terminalRef = useRef(null);
    const lineIndex = useRef(0);

    useEffect(() => {
        let typingInterval;

        const scrollToBottom = () => {
            if (terminalRef.current) {
                terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
            }
        };

        const typeLine = (command, output, callback) => {
            let typedCommand = '';
            let charIndex = 0;

            setIsTyping(true);

            typingInterval = setInterval(() => {
                if (charIndex < command.length) {
                    typedCommand += command[charIndex];
                    charIndex++;

                    setDisplayedLines(prev => {
                        const updated = [...prev];
                        updated[updated.length - 1] = { command: typedCommand, output: null };
                        return updated;
                    });

                    scrollToBottom();
                } else {
                    clearInterval(typingInterval);
                    setIsTyping(false);

                    setTimeout(() => {
                        setDisplayedLines(prev => {
                            const updated = [...prev];
                            updated[updated.length - 1].output = output;
                            return updated;
                        });

                        scrollToBottom();

                        setTimeout(() => callback(), 1000);
                    }, 500);
                }
            }, 50);
        };

        const startTyping = () => {
            if (lineIndex.current < terminalLines.length) {
                const { command, output } = terminalLines[lineIndex.current];
                setDisplayedLines(prev => [...prev, { command: '', output: null }]);
                typeLine(command, output, () => {
                    lineIndex.current++;
                    startTyping();
                });
            } else {
                setTimeout(() => {
                    lineIndex.current = 0;
                    setDisplayedLines([]);
                    setTimeout(() => startTyping(), 500);
                }, 2000);
            }
        };

        startTyping();

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="terminal-box" ref={terminalRef}>
            {displayedLines.map((line, idx) => (
                <div key={idx}>
                    <code className="terminal-line">
                        <span className="prompt">&gt; </span>
                        {line.command}
                        {idx === displayedLines.length - 1 && isTyping && <span className="cursor" />}
                    </code>
                    {line.output && <code className="terminal-response">{line.output}</code>}
                </div>
            ))}
        </div>
    );
};

export default DynamicTerminal;