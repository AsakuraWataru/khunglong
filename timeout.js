module.exports = (time) =>{
    return new Promise(resolve => {
        setTimeout(resolve(''), time*1000)
    })
}