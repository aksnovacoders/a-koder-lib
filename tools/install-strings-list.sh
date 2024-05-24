#!/usr/bin/env bash

json="{}"

while IFS= read -r -d $'\0' FILE; do
    PACKAGE_NAME=$(jq -r ".name" "$FILE")
    PACKAGE_VERSION=$(jq -r ".version" "$FILE")

    json=$(jq --arg key "$PACKAGE_NAME" --arg value "$PACKAGE_VERSION" '. + {($key): $value}' <<<"$json")
done < <(find ./dist -name 'package.json' -print0)

echo "export A_KODER_LIB_VERSIONS='$json' && echo \$A_KODER_LIB_VERSIONS | jq -c --slurpfile updates /dev/stdin '.dependencies |= with_entries(.key as \$k | if \$updates[0] | has(\$k) then .value = \$updates[0][\$k] else . end)' package.json > temp.json && mv temp.json package.json && echo \$A_KODER_LIB_VERSIONS | jq -c --slurpfile updates /dev/stdin '.devDependencies |= with_entries(.key as \$k | if \$updates[0] | has(\$k) then .value = \$updates[0][\$k] else . end)' package.json > temp.json && mv temp.json package.json && yarn prettier -w package.json && yarn setup"
