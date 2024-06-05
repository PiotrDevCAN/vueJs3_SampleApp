<template>
    <el-tabs type="border-card">
        <el-tab-pane label="GET">
            HTTP Axios GET Sample
            <http-axios-get-sample />
        </el-tab-pane>
        <el-tab-pane label="POST">
            HTTP Axios POST Sample
            <http-axios-post-sample />
        </el-tab-pane>
        <el-tab-pane label="PUT">
            HTTP Axios PUT Sample
            <p>HTTP Axios is able to send PUT type requests</p>
        </el-tab-pane>
        <el-tab-pane label="PATH">
            HTTP Axios PATH Sample
            <p>HTTP Axios is able to send PATH type requests</p>
        </el-tab-pane>
        <el-tab-pane label="DELETE">
            HTTP Axios DELETE Sample
            <p>HTTP Axios is able to send DELETE type requests</p>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import httpAxiosGetSample from '@/components/HTTPAxiosGETSample.vue';
import httpAxiosPostSample from '@/components/HTTPAxiosPOSTSample.vue';

export default {
    name: "httpAxiosPage",
    components: {
        httpAxiosGetSample,
        httpAxiosPostSample
    }
}
</script>