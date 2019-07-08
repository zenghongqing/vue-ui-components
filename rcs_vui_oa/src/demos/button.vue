<template>
    <div style="padding: 10px;">
        <r-button type="primary">primary</r-button>
        <r-button type="warning">warning</r-button>
        <r-button type="danger">danger</r-button>
        <r-button type="primary" plain>plain primary</r-button>
        <r-button type="link">link</r-button>
        <r-button type="primary" size="large">primary large</r-button>
        <r-button type="warning" size="large">warning large</r-button>
        <r-button type="danger" size="large">danger large</r-button>
        <r-button disabled size="large">disabled</r-button>
        <r-button type="primary" size="large" :loading="true">primary</r-button>
    </div>
</template>
<script>
export default {
    name: 'Button'
}
</script>
