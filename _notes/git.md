---
layout: default
title: Git
---

Go through this tutorial -- [Git Tutorials](https://www.atlassian.com/git/tutorial)

## Branch, Edit, Commit, Merge

### View All Branches

```bash
git branch
```

### Switch to a Branch

```bash
git checkout branch-name
```

### Create a Branch
- To create a new branch use the `checkout` command.
- Use the `-b` flag to switch to the new branch at creation.

```bash
git checkout -b branch-name
```

### Merge

```bash
git checkout master
git merge branch-name
```

### Delete Branch

```bash
git branch -d branch-name
```