/* --- Local --- */
import {
  ethLatestBlock,
  getGasEstimate,
  getEthTransaction,
  getEthTransactionReceipt,
  ensResolveAddress,
  ensLookupAddress,
} from '@api/infura';

import { cacheEthTransaction } from '@api/query';

/* ----------------------- */
// Infura : Query : Routes
/* ----------------------- */
export const initInfuraQueryRoutes = app => {
  app.use(`/block`, ethLatestBlock);
  app.use(`/gas`, getGasEstimate);
  app.use(`/transaction/:hash`, getEthTransaction);
  app.use(`/receipt/:hash`, getEthTransactionReceipt);
  app.use(`/ens/resolve/:name`, ensResolveAddress);
  app.use(`/ens/lookup/:name`, ensLookupAddress);
};

export const initCacheRoutes = app => {
  app.use(`/cache/transaction/:hash`, cacheEthTransaction);
};
