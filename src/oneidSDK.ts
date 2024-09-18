import { OneID as OneIDInspect } from '@oneid-xyz/inspect';

const OneID = new OneIDInspect();
async function init() {
  const tlds = OneID.systemConfig.getAvailableTld();
  try {
    if (tlds.length <= 1) {
      await OneID.systemConfig.initConfig()
    }
  } catch (error) {
    console.log({error});
  }
}

export { init, OneID };
