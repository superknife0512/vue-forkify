export const mixinFilter = {
    filters:{
        formatTitle(value){
            if(value.length > 17){
                const strArr = value.split(' ');
                let count = 0;
                let newTitle = [];

                strArr.forEach(word => {
                    if(word.length + count < 17){
                        count+=word.length;
                        newTitle.push(word);
                    }
                });
                return `${newTitle.join(' ')}...`
            } else {
                return value
            }
        }
    },
}

