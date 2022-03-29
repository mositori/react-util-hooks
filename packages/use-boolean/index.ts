import { useState, useCallback } from "react";

type InitialValue = boolean | (() => boolean);

export function useBoolean(initialValue: InitialValue) {
  const [state, setState] = useState(initialValue);

  const on = useCallback(() => {
    setState(true);
  }, []);

  const off = useCallback(() => {
    setState(false);
  }, []);

  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return [state, { on, off, toggle }] as const;
}
