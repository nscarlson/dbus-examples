#!/bin/bash

# Define the signal name to listen for
signal_name="random"

# Use dbus-monitor to listen for the signal on any interface and object path
dbus-monitor "interface='*' object-path='*' signal=$signal_name" | while read -r line; do
  # Extract the details of the signal from the captured line
  # (Modify these fields based on the actual signal arguments)
  # signal_path=$(echo $line | grep -oP "(?<=path=')([^']+)(?=')")
  # sender=$(echo $line | grep -oP "(?<=sender=')([^']+)(?=')")
  # arguments=$(echo $line | grep -oP "(?<=args \[)(.*)(?=\])")

  # Print the captured signal details (modify as needed)
  echo "Signal received: $signal_name"
  # echo "  Path: $signal_path"
  # echo "  Sender: $sender"
  # echo "  Arguments: $arguments"
done

