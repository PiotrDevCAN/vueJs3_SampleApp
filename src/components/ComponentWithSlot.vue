<template>
    <div class="card">
        <slot>
            // HTML elements here
            <p>Default content</p>
        </slot>
    </div>
</template>

<style>
.card {
    max-width: 250px;
    text-align: center;
    margin: 2rem auto;
    padding: .6rem .8rem;
    border: .1rem solid #94A3B8;
    color: #64748B;
}
</style>