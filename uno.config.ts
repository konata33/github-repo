import {defineConfig,presetUno,presetAttributify,transformerDirectives,transformerVariantGroup, transformerAttributifyJsx} from 'unocss'

export default defineConfig({
  presets:[
    presetUno(),
  ],
  transformers: [
    transformerDirectives(), 
    transformerVariantGroup()
  ],
})
