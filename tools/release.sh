#!/usr/bin/env bash
set -e

BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

if [ "$BRANCH_NAME" = "master" ]; then
    NX_BASE="$(git describe --tags --abbrev=0 --match='release-*')"
    export NX_BASE

    git fetch --tags
    if git diff --quiet HEAD origin/master; then
        echo "Remote has *no* changes. Performing release."
    else
        echo "Remote has changes. Skipping release."
        exit 0
    fi

    RELEASE_BRANCH_NAME="release-$(date +%s)"
    git checkout -b "$RELEASE_BRANCH_NAME"

    yarn nx affected --target=release --parallel=false --baseBranch="$RELEASE_BRANCH_NAME" --nxBail=true

    git checkout master
    git pull origin master
    git merge --no-ff -m "Merge $RELEASE_BRANCH_NAME into master [skip ci]" "$RELEASE_BRANCH_NAME"
    git push --tags
    git push origin master
else
    COMMIT_HASH=$(git rev-parse --short=8 HEAD)
    yarn nx run-many --target=release --parallel=false --releaseAs=prerelease --preid=dev-"$COMMIT_HASH" --skipCommit --skipProjectChangelog
fi
