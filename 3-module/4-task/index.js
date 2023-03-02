function showSalary(users, age) {
  return users
          .filter((user) => user.age <= age)
          .map((user, index) => {
               return index === 0 ? `${user.name}, ${user.balance}` :`\n${user.name}, ${user.balance}`})
          .join('');       
}
