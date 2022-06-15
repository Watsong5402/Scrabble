const BoardGenerator = (seed) => {
    return seed !== undefined ? seed : Math.random() * 10000; 
}

export default BoardGenerator;