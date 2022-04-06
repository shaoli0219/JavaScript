//  可选链
// 代码环境：chrome v99.0.4844.51

// let user = {}
// console.log(user) // {}
// console.log(user.address) // undefined
// // console.log(user.address.street) // Error：Cannot read properties of undefined
// console.log(user.address && user.address.street && user.address.street.name) // undefined

// // 可进if
// if (user) {
//     console.log("if(user)") // if(user)
// }

// // 不可进if
// if (user.address) {
//     console.log("if(user.address)")
// }

// // 报错
// if (user.address.street) { // Error：Cannot read properties of undefined
//     console.log("if(user.address.street)")
// }

let userAdmin = {
    admin() {
        console.log("I am admin");
    }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // 啥都没有（没有这样的方法）





