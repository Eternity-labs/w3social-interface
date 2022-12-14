/* eslint-disable no-nested-ternary */
import type { Web3ReactHooks } from '@connector/core';

export function Status({
  isActivating,
  error,
  isActive,
}: {
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
  error: ReturnType<Web3ReactHooks['useError']>;
  isActive: ReturnType<Web3ReactHooks['useIsActive']>;
}) {
  return (
    <div className="text-center" id="web3-status-connected">
      {error ? (
        <>
          🔴 {error.name ?? 'Error'}
          {error.message ? ` ${error.message}` : null}
        </>
      ) : isActivating ? (
        <>🟡 Connecting</>
      ) : isActive ? (
        <>🟢 Connected</>
      ) : (
        <>⚪️ Disconnected</>
      )}
    </div>
  );
}
