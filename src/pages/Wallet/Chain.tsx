import * as React from 'react';
import { CHAIN_INFO } from '@connector/config/chainIds';
import { Web3ReactHooks } from '@connector/core';

function Chain({ chainId }: { chainId: ReturnType<Web3ReactHooks['useChainId']> }) {
  if (chainId === undefined) {
    return null;
  }
  const name = chainId ? CHAIN_INFO[chainId]?.chainName : undefined;
  if (name) {
    return (
      <div>
        Chain:{' '}
        <b>
          {name} (<span id="js-test-chainid">{chainId}</span>)
        </b>
      </div>
    );
  }
  return (
    <div>
      Chain Id: <b id="js-test-chainid2">{chainId}</b>
    </div>
  );
}

export default Chain;
