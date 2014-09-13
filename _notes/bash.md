---
layout: default
title: Bash
---

# Bash Commands

## Which
- To find where a program is located.

```bash
which $SHELL
/bin/bash
```


## Echo
- Echoes back whatever was typed in.

```bash
echo 'hello'
hello
```

```bash
echo $PATH
/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/local/git/bin:/Users/vadimbrodsky/bin
```


## Cat
- Outputs the contents of a file.

```bash
cat ~/.bash_profile
```


# Editing the Bash Profile
- To customize the bash environment.

```bash
vim ~/.bash_profile
```


# Initializing the New Profile
- Either open a new terminal window to have the changes take effect.
- Or run the command:

```bash
source ~/.bash_profile
```


## Customize Prompt
- Uses the `PS1` setting.

```
PS1="\u$ "
```


## Alias
- Create aliases or shortcuts to different files and programs.

```
alias ll="ls -lahG"
```

## Export Path
- Customize the paths at which Unix will look for commands.

```
export PATH="/usr/local/bin:/usr/local/sbin:/usr/local/mysql/bin:$PATH"
```