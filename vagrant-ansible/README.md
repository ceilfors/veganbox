1. Install Ansible
`brew install ansible`
1. Install VirtualBox
`brew cask install virtualbox`
1. Install Vagrant
`brew cask install vagrant`
1. Install Vagrant Manager (optional)
`brew cask install vagrant-manager`
1. Create a Vagrant box
`vagrant init ubuntu/trusty64`
1. Start the VM and run the provisioning playbook (on the first VM startup)
`vagrant up`
1. Re-run a playbook on an existing VM
`vagrant provision`
1. SSH into the box
`vagrant ssh`
1. Suspend Vagrant machine
`vagrant suspend`

# Resources:
- https://adamcod.es/2014/09/23/vagrant-ansible-quickstart-tutorial.html
- http://sourabhbajaj.com/mac-setup/Vagrant/README.html
- http://docs.ansible.com/ansible/latest/guide_vagrant.html
