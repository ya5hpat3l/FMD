import * as React from 'react';

import { NativeServicesViewProps } from './NativeServices.types';

export default function NativeServicesView(props: NativeServicesViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
