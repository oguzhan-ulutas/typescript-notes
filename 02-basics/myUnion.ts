let score: number | string = 33;

score = 44;
score = '55';

type Users = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let jane: Users | Admin = { name: 'Jane', id: 23 };
jane = { userName: 'Jane', id: 23 };

function getId(id: number | string) {
  console.log(id);
  if (typeof id === 'string') {
    id.toLowerCase();
  }
}

getId(3);
getId('3');

// array
const data: number[] = [1, 2, 3];
const data2: (number | string)[] = [1, '2'];

let userName: 'Jane' | 'Jake' = 'Jake';

userName = 'Jake';
