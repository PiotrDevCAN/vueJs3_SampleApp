<template>
    
    <button v-if="!isMenuOpen" @click="$emit('openMenuEvent', this.attachedDataOpen)">Open Menu</button>
    <button v-else @click="$emit('closeMenuEvent', this.attachedDataClose)">Close Menu</button>

    <ul v-show="isMenuOpen">
        <li>
            <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'samples' }">Samples</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'componentWithSlot' }">component With Slot</router-link>
        </li>
        <li>-----</li>
        <li>
            <router-link :to="{ name: 'counterPage' }">counter Page</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'vuexStore' }">VUEX Store Page</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'piniaStore' }">PINIA Store Page</router-link>
        </li>
        <li>-----</li>
        <li>
            <router-link :to="{ name: 'formPage' }">form Page</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'fullNamePage' }">fullName Page</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'modelBindPage' }">model Bind Page</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'templateRefPage' }">template Ref Page</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'provideAndInjectPage' }">provide And Inject Page</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'iterationPage' }">iteration Page</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'helloWorld' }">hello World</router-link>
        </li>
        <li>----</li>
        <li>
            <router-link :to="{ name: 'httpFetch' }">HTTP Fetch</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'httpAxios' }">HTTP Axios</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'localStorage' }">Local storage</router-link>
        </li>
        <li>----</li>
        <li v-for="user in users" :key="user.id">
            <router-link :to="{
        name: 'singleRecord',
        params: {
            id: user.id
        }
    }">
                ({{ user.id }}) {{ user.name }}
            </router-link>
        </li>

        <li v-for="user in usersWithQuery" :key="user.id">
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
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        isMenuOpen: {
            type: Boolean,
            default: false,
        },
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
    emits: ['openMenuEvent', 'closeMenuEvent']
}
</script>
