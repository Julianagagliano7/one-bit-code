interface User  {
  name: string;
  age: string;
  address: {
    city: string;
    uf: string;
  };
};

function showUserInfo(user: User) {
  return `Welcome ${user.name} - ${user.age} - ${user.address.city} - ${user.address.uf}`;
}
