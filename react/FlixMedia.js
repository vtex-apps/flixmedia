import React, { Component } from 'react'
import publicAppSettings from './graphql/publicAppSettings.gql'
import { graphql } from 'react-apollo'
import withProductContext from './components/withProductContext'

class FlixMedia extends Component {
  componentDidMount() {
    const { data: { loading }, product } = this.props

    if (!loading) {
      const script = document.createElement("script");
      script.src = "//media.flixfacts.com/js/loader.js";
      script.async = true;
      script.setAttribute('data-flix-distributor', '15486');
      script.setAttribute('data-flix-language', 'f4');
      script.setAttribute('data-flix-brand', 'brand');
      script.setAttribute('data-flix-mpn', product.productReference);
      script.setAttribute('data-flix-ean', product.productReference);
      script.setAttribute('data-flix-sku', product.selectedSku);
      script.setAttribute('data-flix-button', 'flix-minisite');
      script.setAttribute('data-flix-inpage', 'flix-inpage');
      script.setAttribute('data-flix-button', '');
      script.setAttribute('data-flix-price', '');
      script.setAttribute('data-flix-fallback', '');

      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <div>
        <div id="flix-minisite"></div>
        <div id="flix-inpage"></div>
      </div>
    );
  }
}

const withPublicAppSettings = graphql(publicAppSettings, {
  options: () => ({
    ssr: false,
  }),
})

export default withPublicAppSettings(withProductContext(FlixMedia))