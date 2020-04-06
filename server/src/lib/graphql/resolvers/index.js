import { GraphQLDateTime } from 'graphql-iso-date';
import BigInteger from './custom/BigInt';

import userResolvers from './user';
import block from './block';
import contract from './contract';
import event from './event';
import eventMeta from './eventMeta';
import transaction from './transactions';
import receipt from './receipt';

const customScalarResolver = {
  Date: GraphQLDateTime,
  BigInt: BigInteger,
};

export default [
  customScalarResolver,
  userResolvers,
  block,
  contract,
  event,
  eventMeta,
  transaction,
  receipt,
];
