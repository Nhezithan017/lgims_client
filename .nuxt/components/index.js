export { default as Logo } from '../../components/Logo.vue'
export { default as Global } from '../../components/_global/index.js'
export { default as BaseButton } from '../../components/buttons/_base-button.vue'
export { default as BaseInput } from '../../components/inputs/_base-input.vue'
export { default as BaseTextarea } from '../../components/inputs/_base-textarea.vue'
export { default as BaseUsers } from '../../components/modals/_base-users.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
export const LazyGlobal = import('../../components/_global/index.js' /* webpackChunkName: "components/_global/index'}" */).then(c => c.default || c)
export const LazyBaseButton = import('../../components/buttons/_base-button.vue' /* webpackChunkName: "components/buttons/_base-button'}" */).then(c => c.default || c)
export const LazyBaseInput = import('../../components/inputs/_base-input.vue' /* webpackChunkName: "components/inputs/_base-input'}" */).then(c => c.default || c)
export const LazyBaseTextarea = import('../../components/inputs/_base-textarea.vue' /* webpackChunkName: "components/inputs/_base-textarea'}" */).then(c => c.default || c)
export const LazyBaseUsers = import('../../components/modals/_base-users.vue' /* webpackChunkName: "components/modals/_base-users'}" */).then(c => c.default || c)
