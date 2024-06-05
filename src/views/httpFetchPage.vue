<template>
    <el-tabs type="border-card">
        <el-tab-pane label="GET">
            HTTP fetch GET Sample
            <http-fetch-get-sample />
        </el-tab-pane>
        <el-tab-pane label="POST">
            HTTP fetch POST Sample
            <http-fetch-post-sample />
        </el-tab-pane>
        <el-tab-pane label="PUT">
            HTTP fetch PUT Sample
            <p>HTTP fetch is able to send PUT type requests</p>
        </el-tab-pane>
        <el-tab-pane label="PATH">
            HTTP fetch PATH Sample
            <p>HTTP fetch is able to send PATH type requests</p>
        </el-tab-pane>
        <el-tab-pane label="DELETE">
            HTTP fetch DELETE Sample
            <p>HTTP fetch is able to send DELETE type requests</p>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import httpFetchGetSample from '@/components/HTTPFetchGETSample.vue';
import httpFetchPostSample from '@/components/HTTPFetchPOSTSample.vue';

export default {
    name: "httpFetchGETSample",
    components: {
        httpFetchGetSample,
        httpFetchPostSample
    }
}
</script>