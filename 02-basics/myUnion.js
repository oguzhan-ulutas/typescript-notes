var score = 33;
score = 44;
score = '55';
var jane = { name: 'Jane', id: 23 };
jane = { userName: 'Jane', id: 23 };
function getId(id) {
    console.log(id);
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
getId(3);
getId('3');
// array
var data = [1, 2, 3];
var data2 = [1, '2'];
var userName = 'Jake';
userName = 'Jake';
