# thaiastro.or.th

## FrontMatter Metadata

| Field         | Required? | Type                  | Example                                 |
| ------------- | --------- | --------------------- | --------------------------------------- |
| title         | ✓         | `string`              | 9 Reasons Why Pluto should be a Planet! |
| date          | ✓         | `YYYY-MM-DD`          | 1970-12-32                              |
| categories    | ✓         | `[kebab-string]`      | [discovery, exo-planet]                 |
| tags          | ✓         | `[kebab-string]`      | [jupiter, cassini]                      |
| author        | ✓         | `[lowercase]`         | [author1, author2]                      |
| featuredImage | ✗         | `file/kebab-path.ext` | jupiter/jupiter-from-cassini-2007.jpg   |
| isFeatured    | ✗         | `boolean`             | false                                   |
| isUnpublished | ✗         | `boolean`             | false                                   |
| slug          | ✗         | `kebab-string`        | 9-reasons-why-pluto-should-be-a-planet  |

### To Add

| Field       | Required? | Type                     | Example              |
| ----------- | --------- | ------------------------ | -------------------- |
| isPinned    | ✗         | `boolean`                | false                |
| unpublishBy | ✗         | `YYYY-MM-DD` / `ISO8601` | 2020-12-31T01:23:45Z |
