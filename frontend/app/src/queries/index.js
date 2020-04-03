import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
      id
      username
      email
      role
    }
  }
`;

/* ----------------------- */
// Event : Query
/* ----------------------- */
export const GET_EVENT = gql`
  query($hash: ID!) {
    event(hash: $hash) {
      transaction_hash
      event_topic_hash
      contract_address
    }
  }
`;

export const GET_EVENT_LIST = gql`
  query($limit: Int) {
    eventList(limit: $limit) {
      transaction_hash
      event_topic_hash
      contract_address
      event_abi
      raw_event
      json_event
    }
  }
`;

export const EVENT_CREATED = gql`
  subscription {
    eventCreated {
      event {
        transaction_hash
        event_topic_hash
        contract_address
      }
    }
  }
`;

/* ----------------------- */
// Event : Query
/* ----------------------- */
export const GET_EVENT_META = gql`
  query($hash: ID!) {
    eventMeta(hash: $hash) {
      event_topic_hash
      event_name
      event_bare_name
    }
  }
`;

export const GET_EVENT_META_LIST = gql`
  query($limit: Int) {
    eventMetaList(limit: $limit) {
      event_topic_hash
      event_name
      event_bare_name
    }
  }
`;

export const EVENT_META_CREATED = gql`
  subscription {
    eventMetaCreated {
      eventMeta {
        event_topic_hash
        event_name
        event_bare_name
      }
    }
  }
`;

/* ----------------------- */
// Transaction : Query
/* ----------------------- */
export const GET_TRANSACTION = gql`
  query($hash: ID!) {
    transaction(hash: $hash) {
      hash
      blockHash
      blockNumber
      to
      from
      data
      gasLimit {
        _hex
      }
      gasPrice {
        _hex
      }
      transactionIndex
      nonce
      confirmations
    }
  }
`;

export const GET_TRANSACTIONS = gql`
  query($limit: Int) {
    transactions(limit: $limit) {
      hash
      blockHash
      blockNumber
      to
      from
      data
      gasLimit {
        _hex
      }
      gasPrice {
        _hex
      }
      transactionIndex
      nonce
      confirmations
    }
  }
`;

export const TRANSACTION_CREATED = gql`
  subscription {
    transactionCreated {
      transaction {
        hash
        blockHash
        blockNumber
        to
        from
        data
        gasLimit {
          _hex
        }
        gasPrice {
          _hex
        }
        transactionIndex
        nonce
        confirmations
      }
    }
  }
`;

/* ----------------------- */
// Block : Query
/* ----------------------- */
export const GET_BLOCK = gql`
  query($hash: ID!) {
    block(hash: $hash) {
      hash
      parentHash
      hash
      parentHash
      number
      timestamp
      nonce
      difficulty
      gasLimit {
        _hex
      }
      gasUsed {
        _hex
      }
      miner
      extraData
      transactions
    }
  }
`;

export const GET_BLOCKS = gql`
  query($limit: Int) {
    blockList(limit: $limit) {
      hash
      parentHash
      hash
      parentHash
      number
      timestamp
      nonce
      difficulty
      gasLimit {
        _hex
      }
      gasUsed {
        _hex
      }
      miner
      extraData
      transactions
    }
  }
`;

export const BLOCK_CREATED = gql`
  subscription {
    blockCreated {
      block {
        hash
        parentHash
        hash
        parentHash
        number
        timestamp
        nonce
        difficulty
        gasLimit {
          _hex
        }
        gasUsed {
          _hex
        }
        miner
        extraData
        transactions
      }
    }
  }
`;
