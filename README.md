# VTEX FlixMedia

## Description
VTEX FlixMedia
https://flixmedia.eu/

## Usage

This app uses our store builder with the blocks architecture. To know more about Store Builder [click here.](https://help.vtex.com/en/tutorial/understanding-storebuilder-and-stylesbuilder#structuring-and-configuring-our-store-with-object-object).

We add the product-details as a block in our [Store](https://github.com/vtex-apps/store/blob/master/store/interfaces.json).

To configure or customize this app, you need to import it in your dependencies in `manifest.json`.

```json
  dependencies: {
    "vtex.flixmedia": "1.x"
  }
```

Then, add `product-details` block into your `interfaces.json` theme as we do in our [Store theme app](https://github.com/vtex-apps/store-theme/blob/master/store/blocks.json).
Now, select the desired blocks, for example:

```json
"product-details#default": {
    "allowed" : [
        "flixmedia"
    ],
    ...
}
```

### Blocks API

Add `flexmidia` in your` blocks.json`

```json
  "product-details#default": {
    "blocks": [
      "flixmedia"
      ...
    ]
  }
```