import React, { useEffect } from 'react';
import { VCContainer, VCWeb } from '../../components';
import { requestPermission } from '../../helpers/permissions';

function CallScreen({route}) {
  useEffect(() => {
    requestPermission('camera')
    requestPermission('microphone')
  })
  return (
    <VCContainer>
      <VCWeb uri={route.params.uri}/>
    </VCContainer>
  )
}

export default CallScreen;
