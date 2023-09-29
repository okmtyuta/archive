rm -rf ../{client,server,docs,lab}/src/theme
mkdir -p ../{client,server,docs,lab}/src/theme
echo ../server/src ../client/src ../docs/src ../lab/src | xargs -n 1 -I {} cp -r tools/theme {}
