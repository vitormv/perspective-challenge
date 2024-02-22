import { FunnelType } from 'src/funnel.types';
import challengeSample from './funnel.sample.json';
import singlePageSample from './funnel.singlePage.sample.json';
import sheltieSample from './funnel.sheltie.json';

type FunnelName = 'sample' | 'singlePage' | 'sheltie';

export const funnels: Record<FunnelName, FunnelType> = {
  sheltie: sheltieSample as FunnelType,
  sample: challengeSample as FunnelType,
  singlePage: singlePageSample as FunnelType,
};
