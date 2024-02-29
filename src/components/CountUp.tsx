import { useProgressiveNumber } from "@/hooks/useProgressiveNumbers";
import { useEffect } from "preact/hooks";

export const CountUp = ({
  initial,
  final,
  duration,
}: {
  initial: number;
  final: number;
  duration: number;
}) => {
  const [count, setCount] = useProgressiveNumber(initial, final, duration);
  useEffect(() => {
    setCount(final);
  }, []);
  return <span>{count}</span>;
};
