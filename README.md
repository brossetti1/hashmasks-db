## Hashmasks DB

Open datasets for Hashmasks. Data from this repository is used by [HashmaskTools](https://mask-tools-alpha.netlify.app/)

### Content

See below for data schemas

- `hashmasks.json` - Explicit traits of all 16383 Hashmasks
- `collections.json` - Simple collections made by community

There are also Typescript type definitions included that define data format in jsons.

### Explicit traits

Example

```
"0": {
  "index":"10141",
  "character":"Male",
  "mask":"Indian",
  "eyes":"Freak",
  "skin":"Freak",
  "item":"Mirror"
}
```

Use `index` to get correct image, i.e.

```
https://hashmasksstore.blob.core.windows.net/hashmaskspreview/{index}.png
```

### Simple collections

Simple collections are just lists of mask ids, grouped by the same theme or feature.

A simple collection consists of 3 entries in `collections.json`

#### Collection id and full name

```
"fullNames": {
  "flowers": "Flower Eyes"
}
```

#### Collection items

List of mask ids (as numbers) belonging to the collection

```
"ids": {
  "flowers": [15637, 14253, ... ]
}
```

#### Category

For easier discovery, collections are grouped in categories, fell free to create a new category if it makes sense

```
"categories": {
  "masks": [],
  "eyes": ["flowers"],
  "backgrounds": [],
  "items": []
}
```

### How to contribute

- you can edit json files directly from github interface
- add new collection or missing mask ids to existing collections
- commit changes and create new pull request
- I will take care of the rest.
