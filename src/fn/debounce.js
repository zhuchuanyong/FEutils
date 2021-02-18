const debounce=(callback,delay)=>{
    return (event)=>{
        if(callback.timeid){
            clearTimeout(callback.timeid)
        }

        callback.timeid=setTimeout(() => {
            callback.call(this,event)
            delete callback.timeid
        }, delay);
    }
}

export default debounce