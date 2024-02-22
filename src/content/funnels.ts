import { FunnelType } from 'src/funnel.types';
import challengeSample from './funnel.sample.json';
import singlePageSample from './funnel.singlePage.sample.json';

type FunnelName = 'perspectiveSample' | 'singlePage';

export const funnels: Record<FunnelName, FunnelType> = {
  perspectiveSample: challengeSample as FunnelType,
  singlePage: singlePageSample as FunnelType,
};
