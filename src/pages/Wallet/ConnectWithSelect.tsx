/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import { CHAIN_INFO, getAddChainParameters } from '@connector/config/chainIds';
import type { Web3ReactHooks } from '@connector/core';
import { MetaMask } from '@connector/metaMaskConnector';
import * as React from 'react';
import { useCallback, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

function ChainSelect({
  chainId,
  switchChain,
  chainIds,
}: {
  chainId: number;
  switchChain: (chainId: number) => void | undefined | Promise<void>;
  chainIds: number[];
}) {
  const handleChange = (event: SelectChangeEvent) => {
    switchChain?.(Number(event.target.value));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">请选择链</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={`${chainId}`}
        label="请选择链"
        onChange={handleChange}
      >
        {chainIds.map(_chainId => (
          <MenuItem key={_chainId} value={_chainId}>
            {CHAIN_INFO[_chainId]?.chainName ?? _chainId}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export function ConnectWithSelect({
  connector,
  chainId,
  isActivating,
  error,
  isActive,
}: {
  connector: MetaMask;
  chainId: ReturnType<Web3ReactHooks['useChainId']>;
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
  error: ReturnType<Web3ReactHooks['useError']>;
  isActive: ReturnType<Web3ReactHooks['useIsActive']>;
}) {
  const chainIds = Object.keys(CHAIN_INFO).map(_chainId => Number(_chainId));
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [desiredChainId, setDesiredChainId] = useState<number>(chainId!);
  const switchChain = useCallback(
    async (_desiredChainId: number) => {
      setDesiredChainId(_desiredChainId);
      // if we're already connected to the desired chain, return
      if (_desiredChainId === chainId) return;
      // if they want to connect to the default chain and we're already connected, return
      if (_desiredChainId === -1 && chainId !== undefined) return;
      await connector.activate(
        _desiredChainId === -1 ? undefined : getAddChainParameters(_desiredChainId)
      );
    },
    [connector, chainId]
  );

  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ChainSelect chainId={desiredChainId} switchChain={switchChain} chainIds={chainIds} />
        <Button
          fullWidth
          className="my-[10px]"
          variant="contained"
          onClick={() =>
            connector.activate(
              desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId)
            )
          }
        >
          Try Again?
        </Button>
      </div>
    );
  }
  if (isActive && chainId) {
    return (
      <div className="px-[20px]">
        <ChainSelect
          chainId={desiredChainId === -1 ? -1 : chainId}
          switchChain={switchChain}
          chainIds={chainIds}
        />
        <Button
          fullWidth
          className="my-[10px]"
          variant="contained"
          onClick={() => connector?.deactivate()}
        >
          Disconnect
        </Button>
      </div>
    );
  }
  return (
    <div className="px-[20px]">
      <ChainSelect
        chainId={desiredChainId}
        switchChain={isActivating ? () => {} : switchChain}
        chainIds={chainIds}
      />
      <Button
        fullWidth
        id="js-test-btn"
        variant="contained"
        className="my-[10px]"
        onClick={
          isActivating
            ? undefined
            : () =>
                connector.activate(
                  desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId)
                )
        }
        disabled={isActivating}
      >
        Connect
      </Button>
    </div>
  );
}
