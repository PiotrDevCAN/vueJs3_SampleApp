<template>
    <h1>Samples page</h1>

    <Sample1 />
    <Sample2 />
    <Sample3 />
</template>

<script>
// component functionality here

import Sample1 from '../components/samples/SampleNo1.vue'
import Sample2 from '../components/samples/SampleNo2.vue'
import Sample3 from '../components/samples/SampleNo3.vue'

export default {
    name: "SampesPage",
    components: {
        Sample1,
        Sample2,
        Sample3
    }
}
</script>