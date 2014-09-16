---
layout: default
title: Git
---

Go through this tutorial -- [Git Tutorials](https://www.atlassian.com/git/tutorial)


## Initial Setup
- Setup user name and email that will appear in commits.

```bash
git config --global user.name "Your Name"
git config --global user.email your.email@example.com
```

```bash
git config --global core.editor "subl -w"
```


## Checkout
- Checkout the previous repository and discard all current changes.

```bash
git checkout -f
```


## Setting Github Repo

```bash
git remote add origin https://github.com/<username>/first_app.git
git push -u origin master
```


## Pushing a Local Branch to Github

```bash
git push origin branch-name
```


## Rename Files
- Renaming files with Git tracking.

```bash
git mv README.rdoc README.md
```


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


### Abandon a Feature Branch

```bash
git checkout master
git branch -D bad-branch
```


### Delete Branch

```bash
git branch -d branch-name
```