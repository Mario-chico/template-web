import { useProgressiveNumber } from "@/hooks/useProgressiveNumbers";
import { useEffect } from "preact/hooks";

export const CountUp = ({
  initial,
  final,
  decimals,
  duration,
}: {
  initial: number;
  final: number;
  decimals?: number;
  duration?: number;
}) => {
  const [count, setCount] = useProgressiveNumber(initial, duration, decimals);
  useEffect(() => {
    setCount(String(final));
  }, []);
  return <span>{count}</span>;
};
