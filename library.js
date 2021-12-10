const fs = require('fs')

function eucledianDistance(p1,p2){
    let num = 0
    for(i=0; i<p1.length; i++){
        num+=Math.pow((p1[i]-p2[i]),2)
    }
    return Math.sqrt(num)
}
point1 = [3,6,5]
point2 = [7,-5,1]

function determineMatrixType(m){
    for (let i = 0; i < m.length; i++) {
        if(Array.isArray(m[i])){
            continue
        }
        return -1
    }
    for (let i = 0; i < m.length; i++) {
        if(m[i].length === m[0].length){
            continue
        }
        return 0
    }
    if (m[0].length===m.length) {
        return 2
    }
    return 1
}

function transposeMatrix(m){
    let cols = m[0].length
    let rows = m.length
    let res = []
    if(determineMatrixType(m)!=1){
        return null
    }
    for (let i = 0; i < cols; i++) {
        res[i] = Array(rows)
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            res[j][i] = m[i][j]
        }
    }
    return res
}

function spiralArray(n){
    let num = n*n
    let firstRow = 0, firstCol = 0
    let lastRow = n-1, lastCol = n-1
    let res = Array(n)
    for (let i = 0; i < res.length; i++) {
        res[i] = Array(n)
    }
    while(firstRow<=lastRow&&firstCol<=lastCol){
        for (let i = firstRow; i <=lastRow; i++) {
              res[i][firstCol] = num
              num--
        }
        firstCol++
        for(i = firstCol; i<=lastCol;i++){
              res[lastRow][i] = num
              num--
        }
        lastRow--
        if(firstCol<=lastCol){
            for(i = lastRow; i>=firstRow; i--){
                res[i][lastCol] = num
                num--
            }
            lastCol--
        }
        if(firstRow<=lastRow){
            for(i = lastCol; i>=firstCol; i--){
                res[firstRow][i] = num
                num--
            }
            firstRow++
        }
    }
    return res
}

function stringToMatrix(str){
    let res = str.split("\n")
    for(i=0;i<res.length;i++){
        res[i] = res[i].split(",")
    }
    for(i=0;i<res.length;i++){
        for(j=0;j<res[i].length; j++){
            res[i][j] = parseInt(res[i][j])
        }
    }
    return res
}

function matrixToString(mat){
    arr = []
    for(i=0;i<mat.length;i++){
        arr.push(mat[i].join(","))
    }
    res = arr.join("\n")
    return res
}

function saveMatrixToFile(matrix, path){
    newText = matrixToString(matrix)
    fs.writeFileSync(path, newText, (error) => {
        if (error) throw error;})
}

testPath = "C:/Users/OMEN/Desktop/test/test.txt"

function loadMatrixFromFile(path){
    res = fs.readFileSync(path, (err, data) => {
        if (err) throw err;
    }).toString()
    return stringToMatrix(res)
}
module.exports.eucledianDistance = eucledianDistance
module.exports.determineMatrixType = determineMatrixType
module.exports.transposeMatrix = transposeMatrix
module.exports.spiralArray = spiralArray
module.exports.saveMatrixToFile = saveMatrixToFile
module.exports.loadMatrixFromFile = loadMatrixFromFile