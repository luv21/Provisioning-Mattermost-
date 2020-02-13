
# HW2-DevOps

## Basic Tasks 

All the basic tasks have been divided into roles as part of good practice:

The roles folder can be found on the cm/roles path

* **ping** -This will check the connectivity beetween the ansible and mattermost server
* **update** -This role will upgrade the required packages
* **database** This role will install the MySQL database
* **mattermost** - This role will deploy the mattermost server

## Bonus Tasks

* **team** - This will automate the user and team creation in mattermost
* **proxy_nginx** - This will create a proxy nginx service(Port 80)
* **ssl_nginx** - This will create a ssl nginx service(Port 443)


## Ansible Playbook Best Practices

1) Both the basic and the bonus tasks have been divided as roles with separate main.yaml files for each role.The variables have been added using the vars and the default folders.

2) The variables have been encrypted using the Vault module.
