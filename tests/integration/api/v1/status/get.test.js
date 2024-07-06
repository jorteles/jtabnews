test("GET to api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  console.log(responseBody);
  const countresponseBody = Object.keys(
    responseBody.dependencies.database,
  ).length;

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  //expect(responseBody.dependencies.database.opened_connections).toEqual(1);

  expect(Object.keys(responseBody).length).toEqual(2);
  expect(Object.keys(responseBody.dependencies).length).toEqual(1);
  expect(Object.keys(responseBody.dependencies.database).length).toEqual(3);
});
