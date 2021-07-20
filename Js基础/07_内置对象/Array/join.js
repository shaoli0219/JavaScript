/**
 * Array.prototype.join()
 * 
 * 把数组转换为字符串,并返回结果
 * 该方法不会对原数组产生影响
 * 可以指定字符串作为参数，这个参数将成为新字符串的连接符(默认逗号)ce
 */

newArr = arr.join()
console.log(newArr) // Harry,Ian,Frank,Tom,John,Ari,Bob,Clare,Dan

newArr = arr.join("@_@")
console.log(newArr) // Harry@_@Ian@_@Frank@_@Tom@_@John@_@Ari@_@Bob@_@Clare@_@Dan