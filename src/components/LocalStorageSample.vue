<template>
    <p v-for="user in users" :key="user.id">
        {{ user.name }}
    </p>
</template>

<script>
import userData from '@/assets/users.json'

export default {
    data() {
        return {
            users: userData,
        };
    },
};
</script>