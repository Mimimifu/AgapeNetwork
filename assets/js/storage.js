
class storage {


    unique_id(){
        let uniq = window.crypto.randomUUID();
        return uniq;
    }

    set(key,value){
        localStorage.setItem(key,value)
    }

    get(key){
        localStorage.getItem(key)
    }

    save(){

    }

    load(){

    }

}