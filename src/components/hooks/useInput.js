import { useState } from "react";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = (ev) => setValue(ev.target.value);

  return { value, onChange, setValue };
}
