import { FunnelType } from 'src/funnel.types';
import { parseJsonSilent } from 'src/utils/parseJsonSilent';
import funnelSchema from 'src/content/schema.json';

import Ajv from 'ajv';

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

type ParseOutput = {
  funnel?: FunnelType;
  errorCode?: undefined | 'INVALID_FILE' | 'INVALID_JSON';
};

export const parseFunnelFile = (value: string): ParseOutput => {
  const funnelObject = parseJsonSilent(value);

  if (!funnelObject) {
    return { errorCode: 'INVALID_FILE' };
  }

  const validate = ajv.compile(funnelSchema);
  const valid = validate(funnelObject);

  if (!valid) {
    console.log(validate.errors);
    return { errorCode: 'INVALID_JSON' };
  }

  return {
    funnel: funnelObject as FunnelType,
  };
};
