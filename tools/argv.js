class Argv {
    static getParams() {
        let { argv } = process;

        let newArguments = argv;

        argv.shift();
        argv.shift();

        let object = {};
        // console.log(newArguments);
        newArguments.map(item => {
            if (/=/.test(item)) {
                let [key, value] = item.split('=');
                object[key] = value;
            } else {
                object[item] = true;
            }
        });

        return object;
    }
}

module.exports = Argv;