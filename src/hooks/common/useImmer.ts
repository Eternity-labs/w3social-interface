import produce, { freeze, Draft } from 'immer';
import { useCallback, useState } from 'react';

export type DraftFunction<S> = (draft: Draft<S>) => void;
export type Updater<S> = (arg: S | DraftFunction<S>) => void;
export type ImmerHook<S> = [S, Updater<S>];

export function useImmer<S = unknown>(initialValue: S | (() => S)): ImmerHook<S>;
export function useImmer<S>(initialValue: unknown) {
  const [val, updateVal] = useState(() =>
    freeze(typeof initialValue === 'function' ? initialValue() : initialValue, true)
  );
  return [
    val,
    useCallback(
      (updater: Updater<S>) => {
        if (typeof updater === 'function') {
          updateVal(produce(val, updater));
        } else {
          updateVal(freeze(updater));
        }
      },
      [val]
    ),
  ];
}
