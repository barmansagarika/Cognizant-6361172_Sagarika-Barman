# Week 8_Git Hands-On Labs

## Overview
This folder consolidates 5 Git Hands-On Labs into one document. It covers the basics of Git setup, file tracking, `.gitignore` usage, branching/merging, conflict resolution, and pushing changes to remote repositories.

---

## 1. Git Basics & Configuration

**Objectives:**
-Git commands: `git init`, `git status`, `git add`, `git commit`, `git push`, `git pull`
- Configure Git with user details
- Integration of **Notepad++** as the default editor
- Add and track files in a repository

**Prerequisites:**
- Install Git Bash
- Sign up for GitLab account

**Steps:**

```bash
# Configure Git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set Notepad++ as the default editor
git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -nosession"

# Create a new repository
git init GitDemo
cd GitDemo

# Create and commit a file
echo "Welcome to the version control" > welcome.txt
git add welcome.txt
git commit 

# Opens Notepad++
-add commit message 
    and save it. 

# Push to remote
git remote add origin <remote_repo_url>
git push origin master
```

---

## 2. Using `.gitignore`

**Objectives:**
- Understand `.gitignore`
- Ignore unwanted files/folders (e.g., `.log` files, `log` folder)

**Key Steps:**

```bash
# Create files/folders to ignore
echo "Test log" > debug.log
mkdir log

# Create .gitignore file
echo "*.log" > .gitignore
echo "log/" >> .gitignore

# Commit changes
git add .gitignore
git commit -m "Add .gitignore to ignore .log files and  log folder."
```

---

## 3. Branching & Merging

**Objectives:**
- Create and manage branches
- Merge changes into `master`
- Use P4Merge for visual difference viewing

**Key Steps:**

```bash
# Create and switch to a new branch
git checkout -b GitNewBranch

# Add files and commit
echo "New branch content" > branchfile.txt
git add branchfile.txt
git commit -m "Add branch file"

# Switch back to master
git checkout master

# Merge the branch
git merge GitNewBranch

# Delete the branch
git branch -d GitNewBranch
```

---

## 4. Conflict Resolution During Merge

**Objectives:**
- Resolve merge conflicts when changes in `master` and branch conflict

**Key Steps:**

```bash
# Create a branch and modify a file
git checkout -b GitWork
echo "Branch content" > hello.xml
git add hello.xml
git commit -m "Add hello.xml in branch"

# Modify the same file in master
git checkout master
echo "Master content" > hello.xml
git add hello.xml
git commit -m "Add hello.xml in master"

# Merge branch into master (conflict expected)
git merge GitWork

# Use a merge tool like P4Merge to resolve conflict
git mergetool

# After resolving
git add hello.xml
git commit -m "Resolve merge conflict"

# Delete the branch
git branch -d GitWork
```

---

## 5. Clean Up & Push to Remote

**Objectives:**
- Clean the working directory
- Push pending changes to the remote repository

**Key Steps:**

```bash
# Verify clean state
git status

# List all branches
git branch -a

# Pull from remote
git pull origin master

# Push changes
git push origin master
```
---
## Additional Information
- The code and output are provided as screenshot images in Word document in Week 8_GIT folder.