<style lang="scss">
  @import '../scss/icons';
</style>

<template>
  <icon-button name="save" class="ar-icon ar-icon__xs ar-icon--no-border" @click.native="upload"/>
</template>

<script>
  import IconButton from './icon-button'
  import UploaderPropsMixin from '@/mixins/uploader-props'

  export default {
    mixins: [UploaderPropsMixin],
    props: {
      record: { type: Object }
    },
    components: {
      IconButton
    },
    methods: {
      upload () {
        this.$eventBus.$emit('start-upload', `${this.filename}.mp3`, this.record.blob)

        // this.uploadCallback(`${this.filename}.mp3`, this.record.blob).then(resp => {
        //   this.$eventBus.$emit('end-upload', { status: 'success', response: resp });
        // }).catch(error => {
        //   this.$eventBus.$emit('end-upload', { status: 'fail', response: error });
        // })

        // const data = new FormData()
        // data.append('audio', this.record.blob, `${this.filename}.mp3`)

        // const headers = Object.assign(this.headers, {})
        // headers['Content-Type'] = `multipart/form-data; boundary=${data._boundary}`

        // this.$http.post(this.uploadUrl, data, { headers: headers }).then(resp => {
        //   this.$eventBus.$emit('end-upload', { status: 'success', response: resp })
        // }).catch(error => {
        //   this.$eventBus.$emit('end-upload', { status: 'fail', response: error })
        // })
      }
    }
  }
</script>
