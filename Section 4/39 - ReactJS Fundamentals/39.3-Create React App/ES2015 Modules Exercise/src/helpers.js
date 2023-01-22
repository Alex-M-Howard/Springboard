const choice = (items) => {
    let randomIndex = Math.floor(Math.random() * items.length)

    return items[randomIndex]
}

const remove = (items, item) =>{
    if(item in items){
        return items.splice(items.indexOf(item),1)
    }

    return undefined
}

export default choice;
export {choice, remove}