<template>
    <div>
        <h1>{{ message }}</h1>
        <Preview></Preview>
    </div>
</template>

<script>
    //import Preview from '../components/Preview'

    export default {
        data() {
            return {
                message: 'Webpack Test'
            }
        },
        components: {
            /*Preview*/
            Preview: {
                props: [],
                render(createElement) {
                    return createElement('span', {
                            attrs: {
                                style: "float: right; margin-right: 20px"
                            }
                        },
                        [
                            createElement('button', {
                                attrs: {
                                    style: "font-size: 18px; color: #00b5ad"
                                }, on: {
                                    click() {
                                        console.log("点击了节点的修改按钮");
                                    }
                                }
                            }, "修改"),
                        ]
                    )
                }
            }
        },
        methods: {
            renderContent(createElement, {data}) {
                return createElement('span', {
                        attrs: {
                            style: "float: right; margin-right: 20px"
                        }
                    },
                    [
                        createElement('button', {
                            attrs: {
                                style: {'font-size': '15px', 'color': '#00b5ad'}
                            }, on: {
                                click() {
                                    console.log("点击了节点的"+ data.id +"修改按钮");
                                }
                            }
                        }, "修改"),
                    ]
                )
            }
        }
    }
</script>