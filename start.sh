#!/bin/bash
input="cluster_names.txt"
while IFS= read -r line
do
  echo "$line"
  cyclecloud show_nodes -c "$line" -l >> "$line"
  python try.py "$line"
  rm -f "$line"
done < "$input"
