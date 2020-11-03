#!/bin/bash
PATH="/usr/local/bin:/usr/bin:/bin"
input="cluster_names.txt"
while IFS= read -r line
do
  echo "$line"
  cyclecloud show_nodes -c "$line" -l >> "$line"
done < "$input"

python scrape.py

while IFS= read -r line
do
  rm -f "$line"
done < "$input"
git add .
git commit -m "update graph"
git push origin main --force
<<<<<<< HEAD
echo "just updated!"
=======
>>>>>>> a0afa04ce73e555f017883bed3e37f961a1484b5
