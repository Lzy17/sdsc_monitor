#!/bin/bash
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
