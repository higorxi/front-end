// components/CodeInput.tsx
import { useState } from "react";

type CodeInputProps = {
  maxDigits?: number;
};

const CodeInput: React.FC<CodeInputProps> = ({ maxDigits = 4 }) => {
  const [code, setCode] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); 
    if (value.length <= maxDigits) {
      setCode(value);
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
    padding: "1rem",
    width: "150px",
  },
  input: {
    fontSize: "1.5rem",
    textAlign: "center" as const,
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    width: "100%",
  },
  counter: {
    marginTop: "10px",
    fontSize: "0.9rem",
    color: "#666",
  },
};

export default CodeInput;
