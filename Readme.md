# Git SHA trim javascript action

This action trims the Git SHA to desired length and store it to the environment variable - `TRIMMED_SHA`

## Inputs

### `sha-length`

**Required** Desired length of git sha to trim with from the beginning. Default 7.

### `prefix`

**Optional** Prefix the trimmed SHA with. Default `""`.

### `join-by`

**Optional** Character to separate prefix with trimmed SHA. Default `""`.

## Example usage

```
uses: actions/sha-trim-action@v1
with:
  sha-length: 7
  prefix: 'sha'
  join-by: '-'
```
