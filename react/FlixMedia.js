import React, { useEffect } from 'react'
import publicAppSettings from './graphql/publicAppSettings.gql'
import { graphql } from 'react-apollo'
import withProductContext from './components/withProductContext'

function FlixMedia({
  data: { loading, publicAppSettings },
  product,
  selectedItem,
}) {
  useEffect(() => {
    if (loading) {
      return
    }

    const sku = selectedItem ? selectedItem : product.items[0]

    const referenceId =
      sku && sku.referenceId && sku.referenceId.length > 0
        ? sku.referenceId[0].Value
        : ''

    const script = document.createElement('script')
    script.src = '//media.flixfacts.com/js/loader.js'
    script.async = true
    script.setAttribute('id', 'flixmedia')
    script.setAttribute(
      'data-flix-distributor',
      publicAppSettings.flixDistributor
    )

    if (sku.ean) {
      script.setAttribute('data-flix-ean', sku.ean)
    } else {
      script.setAttribute('data-flix-mpn', referenceId)
    }

    script.setAttribute('data-flix-language', publicAppSettings.flixLanguage)
    script.setAttribute('data-flix-brand', publicAppSettings.flixBrand)
    script.setAttribute('data-flix-sku', sku.itemId)
    script.setAttribute('data-flix-inpage', publicAppSettings.flixInpage)
    script.setAttribute('data-flix-button', publicAppSettings.flixButton || '')
    script.setAttribute('data-flix-price', publicAppSettings.flixPrice || '')
    script.setAttribute(
      'data-flix-fallback',
      publicAppSettings.flixFallback || ''
    )

    document.body.appendChild(script)

    return () => {
      const previousScript = document.getElementById('flixmedia')
      if (previousScript && previousScript.parentNode) {
        previousScript.parentNode.removeChild(previousScript)
      }
    }
  }, [loading, product, selectedItem, publicAppSettings])

  return (
    <div>
      <div id="flix-minisite"></div>
      <div id="flix-inpage"></div>
    </div>
  )
}

const withPublicAppSettings = graphql(publicAppSettings, {
  options: () => ({
    ssr: false,
  }),
})

export default withPublicAppSettings(withProductContext(FlixMedia))
