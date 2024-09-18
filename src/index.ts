import type {
  OnNameLookupHandler,
  DomainLookupResult,
  AddressLookupResult,
} from '@metamask/snaps-sdk';
import { OneID, init } from './oneidSDK';
import { ChainId } from '@oneid-xyz/base';

export const onNameLookup: OnNameLookupHandler = async (request) => {
  let result = null;
  const { chainId, domain } = request;
  await init()
  try {
    if (domain) {
      const [,numChainId] = chainId.split(':')
      const linkedId = await OneID.getWalletsByID(domain, numChainId as ChainId);

      const linkedAddress = linkedId[0].address;
      if (!linkedAddress) {
        throw new Error('[OneIDError]: Linked OneID not found');
      }
      result = {
        resolvedAddresses: [
          {
            resolvedAddress: linkedAddress,
            protocol: 'OneID Name Service',
            domainName: domain,
          },
        ],
      } as DomainLookupResult;
    }
  } catch (error) {
    console.log({error: (error as any).message})
  }

  return result;
};
