<template>
<div>
    <div class="row">
        <div class="col-12">
            <b-card no-body class="journey-tab-bar">
                <b-tabs pills card vertical>
                    <b-tab v-for="item in categories" :key="item.id">
                        <template v-slot:title class="journey-navar-top">
                            <i :class="item.icon"></i>
                            <strong>{{item.name}}</strong>
                        </template>
                        <GenericLayouts v-bind:name="item.name ? item.name : 'Template Category'" v-bind:layouts="item.layouts ? item.layouts : []" v-bind:subcategories="item.subcategories ? item.subcategories : []" />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</div>
</template>

<script>
import GenericLayouts from "@/components/journey/GenericLayouts.vue";

export default {
    name: "Navbar",
    props: ['categories'],
    components: {
        GenericLayouts
    }
};
</script>

<style>
.journey-tab-bar {
    text-align: left;
}

.nav-pills .nav-link {
    border-radius: 0.25rem;
    color: black;
    line-height: 70px;
    font-weight: 200;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: #fff;
    background-color: black;
}

.journey-icon-navar {
    margin-right: 5px;
    color: gray;
}

.col-auto {
    background-color: white;
    border-right-style: groove;
}

[id*="__BVID__8__BV_tab_controls_"] {
    padding-top: 10%;
    padding-bottom: 10%;
    padding-left: 10%;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 0rem;
}

.card-header {
    background: #ffffff;
}
</style>
