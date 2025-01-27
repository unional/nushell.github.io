---
title: mv
layout: command
version: 0.62.0
usage: |
  Move files or directories.
---

# `{{ $frontmatter.title }}`

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> mv (source) (destination) --quiet```

## Parameters

 -  `source`: the location to move files/directories from
 -  `destination`: the location to move files/directories to
 -  `--quiet`: suppress output showing files moved

## Examples

Rename a file
```shell
> mv before.txt after.txt
```

Move a file into a directory
```shell
> mv test.txt my/subdirectory
```

Move many files into a directory
```shell
> mv *.txt my/subdirectory
```
