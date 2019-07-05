# VTEX FlixMedia

## Description
VTEX FlixMedia
https://flixmedia.eu/

## Usage

This app uses our store builder with the blocks architecture. To know more about Store Builder [click here.](https://help.vtex.com/en/tutorial/understanding-storebuilder-and-stylesbuilder#structuring-and-configuring-our-store-with-object-object).

To configure or customize this app, you need to import it in your dependencies in `manifest.json`.

```json
  dependencies: {
    "vtex.flixmedia": "0.x"
  }
```

Just add `product-details.flixmedia` as a child in your `store.product` like so:

```json
"store.product": {
    "children": [
      "product-description",
      "product-description.flixmedia",
    ]
}
```
