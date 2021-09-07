/**
 * switch
 *
 * switch语句评估一个表达式，将表达式的值与case子句匹配，并执行与该情况相关联的语句
 */

let expr = 'Mangoes';
switch (expr) {
    case 'orange':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Apples':
        console.log('Apples are $0.32 a pound.');
        break;
    case 'Bananas':
        console.log('Bananas are $0.48 a pound.');
        break;
    case 'Cherries':
        console.log('Cherries are $3.00 a pound.');
        break;
    // 如果你忘记添加 break，那么代码将会从值所匹配的 case 语句开始运行，然后持续执行下一个 case 语句而不论值是否匹配
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
    default:
        console.log('Sorry, we are out of ' + expr + '.');
}
// 当遇到 break 时，程序就跳出 switch 然后执行 switch 后的语句。
console.log("Is there anything else you'd like?");