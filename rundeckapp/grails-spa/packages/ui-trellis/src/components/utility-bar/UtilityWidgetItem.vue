<template>
    <li class="utility-bar__item" @click="handleClick">
        <i :class="item.class"/>
        <span>{{item.label}}</span>
        <Popper v-if="open">
            <component :is="item.widget"/>
        </Popper>
    </li>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue'
import {Observer} from 'mobx-vue'

import {UtilityItem} from '../../stores/UtilityBar'

import Popper from './Popper.vue'

export default Observer(Vue.extend({
    data() { return {
        open: false
    }},
    components: {
        Popper
    },
    props: {
        item: Object as PropType<UtilityItem>
    },
    methods: {
        handleClick() {
            this.open = !this.open
        },
        key() {
            return Date.now()
        }
    }
}))
</script>
