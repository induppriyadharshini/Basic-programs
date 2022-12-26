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
          cost:0,
          name: 'invite people',
      },
],
};

const updateTotalCost = (data, totalCost) => ({
  ...data, cost : totalCost
})

const getTaskCosts = (data) => { 
  const cost = data.tasks ? data.tasks.map(getTaskCosts).reduce((acc, curVal) => acc.cost + curVal.cost) : 0
  const totalCost = data.cost + cost
  return updateTotalCost(data, totalCost);
}

const displayTotalCost = (totalCost) => console.log(totalCost)

const main = () => {
  const dataWithTotalCost = getTaskCosts(data);
  displayTotalCost(dataWithTotalCost);
}

main();

