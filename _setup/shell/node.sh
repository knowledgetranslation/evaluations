#!/usr/bin/env bash

curl -sL https://deb.nodesource.com/setup | sudo bash -
cd ~
sudo apt-get install -y nodejs -y
npm config set prefix ~/npm
echo "PATH=$PATH:$HOME/npm/bin" >> /home/vagrant/.bashrc
source /home/vagrant/.bashrc