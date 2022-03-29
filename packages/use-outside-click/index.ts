import { useEffect, RefObject } from "react";

export type OutsideClickConfig = {
  enabled?: boolean;
  onClickDown: (e: Event) => void;
  onClickUp: (e: Event) => void;
  excludes: RefObject<HTMLElement>[];
};

export function useOutsideClick({
  enabled = true,
  excludes,
  onClickDown,
  onClickUp,
}: OutsideClickConfig) {
  useEffect(() => {
    const handleClickUp = (event: Event) => {
      if (!enabled) {
        return;
      }

      if (
        excludes.some(
          (ref) =>
            ref.current && ref.current.contains(event.target as HTMLElement)
        )
      ) {
        return;
      }
      onClickUp(event);
    };
    const handleClickDown = (event: Event) => {
      if (!enabled) {
        return;
      }

      if (
        excludes.some(
          (ref) =>
            ref.current && ref.current.contains(event.target as HTMLElement)
        )
      ) {
        return;
      }

      onClickDown(event);
    };

    document.addEventListener("mouseup", handleClickUp);
    document.addEventListener("touchend", handleClickUp);
    document.addEventListener("mousedown", handleClickDown);
    document.addEventListener("touchstart", handleClickDown);

    return () => {
      document.removeEventListener("mouseup", handleClickUp);
      document.removeEventListener("touchend", handleClickUp);
      document.removeEventListener("mousedown", handleClickDown);
      document.removeEventListener("touchstart", handleClickDown);
    };
  }, [enabled, excludes, onClickDown, onClickUp]);
}
