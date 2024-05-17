import {
  DsPropsModel,
  emptyDsProps,
} from '@/desing-sytem/models/ds-props.model'

export interface DsButtonProps extends DsPropsModel {
  nude?: boolean
}

export function emptyDsButtonProps(): DsButtonProps {
  return {
    ...emptyDsProps(),
  }
}
