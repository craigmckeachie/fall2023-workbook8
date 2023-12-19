# Git Collaboration

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
   - Collaborate should get latest changes `git pull origin main`
   - resolve any conflicts
   - push their code to the owners repository
1. Check pull request to verify there are no longer conflicts.
1. Merge pull request.
