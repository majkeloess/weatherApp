#!/bin/bash

parametr=$1

echo "Pushing data to GH! with commit name : $parametr" 

git add .
git commit -m "$parametr"
git push origin main  