type User = {
  readonly id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
  creditCartDetail?: number;
};

const myUser: User = {
  id: 'asda',
  name: 'Jane',
  email: 'j@j.com',
  isLoggedIn: false,
};

myUser.email = 'jane@j.com';

type cardNumber = {
  cardNum: string;
};
type cardDate = {
  date: string;
};

type card = cardNumber &
  cardDate & {
    cvv: string;
  };

console.log(myUser);
function createUser(user: User) {}
