
class storage {


    unique_id(){
        let uniq = 'id' + (new Date()).getTime();
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