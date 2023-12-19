# Git Collaboration

## Normal Flow

1. 1 repo per team
1. owner adds collaborators
1. collabs accept invite from owner
1. collabs clone repo
1. collabs make new feature branch

```
git branch feature-branch
git checkout feature-branch
```

1. collab make changes
1. collab stage, commit, and sync changes to owner repo
1. sync updates from main (changes from main branch into local feature branch)

```
git pull origin main
```

1. if conflicts, resolve
1. collab stage, commit, and sync changes to owner repo
1. create pull request on github

1. before creating another feature branch

```
git checkout main
git pull origin main
```

1. if owner needs to see feature branches

```
git fetch
```

> Or configure VS Code to automatically fetch in background


## Exercise

1. Form small teams of 3-4 people.

1. Decide who is the project owner.
1. Project owner creates a new project/repository.
   - Create project locally, push up to Github
1. Project owner configures repository on Github
   - add collaborators
   - lock down main branch
1. Team collaborators clone repository.
1. Each collaborator creates a feature branch.
1. Feature branches are pushed up into the owners repository.
1. Each collaborator makes a pull request for their feature branch to be pulled into main.
1. If there are conflicts
   - collaborator should get latest changes `git pull origin main`
   - resolve any conflicts
   - push their code to the owners repository
1. Check/Refresh pull request to verify there are no longer conflicts.
1. Merge pull request.
