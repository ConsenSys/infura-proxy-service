/* --- Local --- */
import {
  ethLatestBlock,
  getGasEstimate,
  getEthTransaction,
  getEthTransactionReceipt,
  ensResolveAddress,
  ensLookupAddress,
} from '@api/infura';

import {
  cacheEthBlock,
  cacheEthTransaction,
  cacheEthReceipt,
} from '@api/query';

import { getEvent, listEvents, eventTester } from '@api/event';

import { newContract, validation, listContracts } from '@api/contract';
/* ----------------------- */
// Infura : Query : Routes
/* ----------------------- */
export const initCoreRoutes = app => {
  app.use(`/block`, ethLatestBlock);
  app.use(`/gas`, getGasEstimate);
  app.use(`/transaction/:hash`, getEthTransaction);
  app.use(`/receipt/:hash`, getEthTransactionReceipt);
  app.use(`/ens/resolve/:name`, ensResolveAddress);
  app.use(`/ens/lookup/:name`, ensLookupAddress);
};

export const initCacheRoutes = app => {
  app.use(`/cache/block/:block`, cacheEthBlock);
  app.use(`/cache/transaction/:hash`, cacheEthTransaction);
  app.use(`/cache/receipt/:hash`, cacheEthReceipt);
};

export const initEventRoutes = app => {
  app.use(`/event/:eventHash`, getEvent);
  app.use(`/events`, listEvents);
  app.use(`/testevent/:eventName`, eventTester);
};

export const initContractRoutes = app => {
  app.post(`/contract/truffle`, validation.truffle, newContract);
  app.post(`/contract/raw`, validation.raw, newContract);
  app.post(`/contract/embark`, validation.embark, newContract);

  app.get(`/contracts`, listContracts);

};
