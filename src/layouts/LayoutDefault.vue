<template>
    <div>
        <header class="header-slot">
            <slot name="header">Default value of header SLOT</slot>
        </header>
        <main class="main-slot">
            <slot></slot>
        </main>
        <footer class="footer-slot">
            <slot name="footer">Default value of footer SLOT</slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'LayoutDefault',
    components: {
    },
};
</script>

<style scoped>
.header-slot {
    background: #eee;
    padding: 10px 6px;
}

.main-slot {
    padding: 16px 6px;
}

.footer-slot {
    background: #eee;
    padding: 10px 6px;
}
</style>