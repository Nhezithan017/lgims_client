<template>
<div>
  <input
    :type="inputType"
    :value="value"
    :placeholder="placeholder"
    :class="`form-control ${classType} ${form.errors.has(field) ? ' is-invalid' : ''}`"
     @input="handleInput"
  />
    <has-error :form="form" :field="field"></has-error>
</div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    inputType: {
      type: String,
      default: 'text'
    },
    classType: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput(e){
      this.$emit('input', e.target.value);
    },
  mounted(){
    console.log(this.$attrs);
  }
  }
}
</script>

<style>

</style>
