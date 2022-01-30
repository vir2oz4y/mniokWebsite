export function SetStateObject(newValue, setState, key){

    function deepClone(obj, key, value) {
        const clObj = {};
        for(const i in obj) {

            if (Array.isArray(obj[i])){
                clObj[i] = obj[i];

                if (i === key){
                    clObj[i] = value
                }

                continue;
            }

            if (obj[i] instanceof Object) {
                if (i === key){
                    clObj[i] = value
                    continue;
                }
                clObj[i] = deepClone(obj[i], key, value);
                continue;
            }



            clObj[i] = obj[i];
            if (i === key){
                clObj[i] = value
            }
        }
        return clObj;
    }


    setState((prev) => deepClone(prev, key, newValue))
}