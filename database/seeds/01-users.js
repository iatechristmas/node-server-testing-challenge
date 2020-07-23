exports.seed = function (knex) {
  const users = [
    {
      username: "test1",
      password: "test",
    },
    {
      username: "test2",
      password: "test",
    },
    {
      username: "test3",
      password: "test",
    },
  ];

  return knex("users").insert(users);
};
