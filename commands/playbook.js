const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const sshSync = require('../lib/ssh');


exports.command = 'playbook <file> <inventory>';
exports.desc = 'Run provided playbook with given inventory';
exports.builder = yargs => {
    yargs.options({
	vaultpass: {
            alias: 'lk30',
            describe: 'the password to use for ansible vault',
            default: 'lkhuran',
            type: 'string',
            nargs: 1
        }    
    });
};


exports.command = 'playbook <file> <inventory>';
exports.desc = 'Run provided playbook with given inventory';
exports.builder = yargs => {
    yargs.options({
    });
};



exports.handler = async argv => {
    const { file, inventory, vaultpass } = argv;

    (async () => {

        if (fs.existsSync(path.resolve(file)) && fs.existsSync(path.resolve(inventory))) {
            await run(file, inventory, vaultpass);
        }

        else {
            console.error(`File or inventory don't exist. Make sure to provide path from root of cm directory`);
        }

    })();

};

async function run(file, inventory, vaultpass) {

    // the paths should be from root of cm directory
    // Transforming path of the files in host to the path in VM's shared folder
    let filePath = '/bakerx/'+ file;
    let inventoryPath = '/bakerx/' +inventory;
    let vaultPass = vaultpass;

    console.log(chalk.blueBright('Running ansible script...'));
    let result = sshSync(`/bakerx/cm/run-ansible.sh ${filePath} ${inventoryPath} ${vaultPass}`, 'vagrant@192.168.33.10');
    if( result.error ) { process.exit( result.status ); }

}
