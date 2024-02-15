#!/usr/bin/env sh

## Permet de deployer le projet sur github pages
## Cela utilise le workflow par défaut de github pages
## Pour modifier : https://stackoverflow.com/a/76960283

# abort on errors
set -e

# build
echo '[INFO] Building...'
npm run build
echo '[INFO] End of build.'
# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
echo '[INFO] Initialising git...'
git init

echo '[INFO] Changing paths...'
# Ajouter un "." devant les attributs href
sed -i 's/href="\//href=".\//g' index.html

# Ajouter un "." devant les attributs src
sed -i 's/src="\//src=".\//g' index.html

echo '[INFO] Preparing the deploy commit...'
git checkout -b main
git add -A
git commit --allow-empty -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
echo '[INFO] Pushing to github pages...'
git push -f git@github.com/kilca/kilca.github.io.git main:gh-pages
cd -