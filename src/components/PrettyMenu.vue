<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <router-link :to="{ name: 'Home' }">Home</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <IconMenu />
            </el-icon>
            <router-link :to="{ name: 'samples' }">Samples</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <router-link :to="{ name: 'componentWithSlot' }">component With Slot</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <router-link :to="{ name: 'counterPage' }">counter Page</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <IconMenu />
            </el-icon>
            <router-link :to="{ name: 'vuexStore' }">VUEX Store Page</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <router-link :to="{ name: 'piniaStore' }">PINIA Store Page</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <Document />
            </el-icon>
            <router-link :to="{ name: 'formPage' }">form Page</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <IconMenu />
            </el-icon>
            <router-link :to="{ name: 'fullNamePage' }">fullName Page</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <router-link :to="{ name: 'modelBindPage' }">model Bind Page</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <router-link :to="{ name: 'templateRefPage' }">template Ref Page</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <router-link :to="{ name: 'provideAndInjectPage' }">provide And Inject Page</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <Document />
            </el-icon>
            <router-link :to="{ name: 'iterationPage' }">iteration Page</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <Document />
            </el-icon>
            <router-link :to="{ name: 'helloWorld' }">hello World</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <location />
            </el-icon>
            <router-link :to="{ name: 'httpFetch' }">HTTP Fetch</router-link>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon><router-link :to="{ name: 'httpAxios' }">HTTP Axios</router-link>
            <router-link :to="{ name: 'localStorage' }">Local storage</router-link>
        </el-menu-item>

        <el-sub-menu index="1">
            <template #title>
                <i class="el-icon-location"></i>
                <span>Users</span>
            </template>

            <el-menu-item index="1" v-for="user in users" :key="user.id">
                <router-link :to="{
        name: 'singleRecord',
        params: {
            id: user.id
        }
    }">
                    ({{ user.id }}) {{ user.name }}
                </router-link>
            </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="1">
            <template #title>
                <i class="el-icon-location"></i>
                <span>Users with Query</span>
            </template>

            <el-menu-item index="1" v-for="user in usersWithQuery" :key="user.id">
                <router-link :to="{
        name: 'singleRecordWithQuery',
        params: {
            id: user.id
        },
        // ?name=John
        query: { name: user.name }
    }">
                    ({{ user.id }}) {{ user.name }}
                </router-link>
            </el-menu-item>
        </el-sub-menu>

    </el-menu>
</template>

<script>
import { Menu as IconMenu, Location, Document, Setting } from '@element-plus/icons-vue'

export default {
    components: {
        IconMenu,
        Location,
        Document,
        Setting
    },
    data() {
        return {
            users: [
                { id: 1, name: 'John' },
                { id: 2, name: 'Jane' },
                { id: 3, name: 'Jack' },
                { id: 4, name: 'Jill' }
            ],
            usersWithQuery: [
                { id: 1, name: 'John' },
                { id: 2, name: 'Jane' },
                { id: 3, name: 'Jack' },
                { id: 4, name: 'Jill' }
            ]
        }
    },
    methods: {
        handleOpen() {
            console.log('handleOpen')
        },
        handleClose() {
            console.log('handleClose')
        }
    }
}
</script>