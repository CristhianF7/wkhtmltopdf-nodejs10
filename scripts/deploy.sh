#!/usr/bin/env bash
rm -rf deploy
mkdir deploy
cp -R wktools src index.js package.json deploy
cp dependencies/* deploy
cd deploy
npm install --production

zip -q -r deployPackage.zip *
cp -r deployPackage.zip ../
rm -rf deploy

