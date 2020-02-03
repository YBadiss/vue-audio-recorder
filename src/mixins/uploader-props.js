export default {
  props: {
    filename  : { type: String, default: 'record'   },
    format    : { type: String, default: 'mp3'      },
    headers   : { type: Object, default: () => ({}) },
    uploadCallback: { type: Function },
    uploadUrl : { type: String                      }
  }
}
