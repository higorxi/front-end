import { useState } from "react";

type CodeInputProps = {
  maxDigits?: number;
  onCodeChange?: (code: string) => void;
};

const CodeInput: React.FC<CodeInputProps> = ({ maxDigits = 4, onCodeChange }) => {
  const [code, setCode] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= maxDigits) {
      setCode(value);
      if (onCodeChange) {
        onCodeChange(value);
      }
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={code}
        onChange={handleChange}
        maxLength={maxDigits}
        style={styles.input}
        placeholder="0000"
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    width: "6rem",
    marginBottom: "1rem",
  },
  input: {
    fontSize: "1.5rem",
    textAlign: "center" as const,
    borderRadius: "15px",
    border: "1px solid var(--Tokens-Border-border-muted, #E5E7EB)",
    outline: "none",
    width: "100%",
    backgroundColor: "var(--Tokens-Background-bg-surface, #F3F4F6)",
  },
  counter: {
    marginTop: "10px",
    fontSize: "0.9rem",
    color: "#666",
  },
};

export default CodeInput;
