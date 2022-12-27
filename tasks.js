const data = {
    cost: 10,
    name: 'buildHouse',
    tasks: [
        {
            cost: 5,
            name: 'purchase material',
            tasks: [
                {
                    cost: 10,
                    name: 'purchase cement',
                },
                {
                    cost: 15,
                    name: 'purchase steel',
                },
            ],
        },
        {
            cost: 0,
            name: 'invite people',
        },
    ],
};

const processTotalCost = (houseData) => {
    return houseData.cost + (houseData.tasks ? houseData.tasks.map((task) => getTotalCost(task)).reduce((acc, cur) => acc.totalCost + cur.totalCost) : 0);
}

const getTotalCost = (houseData) => ({
    ...houseData, totalCost: processTotalCost(houseData)
})

const main = () => {
    const output = getTotalCost(data);
    console.log(output);
}
main();

/*const data = {
  cost: 10,
  name: 'buildHouse',
  totalCost: 40,
  tasks: [
      {
          cost: 5,
          name: 'purchase material',
          tasks: [
              {
                  cost: 10,
                  name: 'purchase cement',
                  totalCost: 10
              },
              {
                  cost: 15,
                  name: 'purchase steel',
                  totalCost: 15
              },
          ],
          totalC
*/
