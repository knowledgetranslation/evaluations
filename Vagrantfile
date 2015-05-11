# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "hashicorp/precise32"

  config.vm.synced_folder "_html", "/var/www"
  config.vm.provision :shell, path: "_setup/postinstall.sh"
  config.vm.provision :shell, privileged: false, path: "_setup/shell/node.sh"
  config.vm.provision :shell, privileged: false, path: "_setup/node.postinstall.sh"
  config.vm.provision :shell, privileged: false, path: "_setup/shell/mongo.sh"
  config.vm.network "private_network", ip: "192.168.200.2"

end
