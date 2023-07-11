<template>
  <router-view />
</template>

<script>
import { Capacitor } from '@capacitor/core';
import { SafeArea } from 'capacitor-plugin-safe-area';

if(Capacitor.getPlatform() == 'ios'){

  SafeArea.getSafeAreaInsets().then(({ insets }) => {
    // set safe area
    document.body.style.marginTop = insets.top + 'px';
    document.body.style.marginLeft = insets.left + 'px';
    document.body.style.marginRight = insets.right + 'px';
    document.body.style.marginBottom = insets.bottom + 'px';
  }); 

}

</script>
