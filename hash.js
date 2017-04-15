class Hash {
    constructor() {

    }

    getHash() {
        var hashString = location.hash.slice(1);
        return hashString.split('/')[0];
    }

    getArgs() {
        var hashString, argsString, argsArray, argsObj = {};

        hashString = location.hash.slice(1);
        argsString = hashString.split('/')[1];

        if(argsString){
            argsArray = argsString.split('&');
        }
        if(argsArray && argsArray.length){
            argsArray.forEach(item => {
                let arg = item.split('=');
                argsObj[arg[0]] = arg[1]
            })
        }
        return argsObj;
    }

    setArgs(obj) {
        var args = this.getArgs();
        $.extend(args, obj);
        location.hash = `#${this.getHash()}/${this.parse(args)}`;
    }

    parse(obj) {
        var argsArray = [];
        for(let key in obj){
            argsArray.push([key, obj[key]].join('='))
        }
        return argsArray.join('&')
    }
};
Hash.hash = new Hash;
module.exports = Hash;
