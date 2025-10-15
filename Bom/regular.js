

/*
    khớp đầu chuỗi : ^;
    khớp cuối chuỗi: $;

    [a-z]
    [A-Z]
    [0-9]
    [charlist]

    {value} : độ dài cố định.
    {min, max}
    {min, }
    

    + {1, }
    * {0, }
    ? {0, 1}

    \d : 0->9
    \D : ngược \d
    \s : khoảng trắng
    \S :
    \w : chữ thường, hoa, số, _;
    \W

    Phủ định ^

*/

// const phone = "0964593968";
// const string

// const pattern = /0\d{9}/;

// console.log(pattern.test(phone));

const pattern = /^[^A-Z]+$/;

const str = 'abc#';
console.log(pattern.test(str));
