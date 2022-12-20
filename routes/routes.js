const csvToJson = require('csvtojson');

const updateRoutesWithDistances = (distances, routes) => routes.map((route) => ({ ...route, Distance: processDistances(distances, route.Stops) }))

const displayDistances = (totalDistances) => console.log(totalDistances);

const getRouteDistance = (distances, stops) => stops.map((stop, currentStopIndex) => getDistance(distances, stop, stops[currentStopIndex + 1]))

const getTotalDistance = (routeDistance) => routeDistance.reduce((totalDistance, currentDistance) => totalDistance + currentDistance);

const processDistances = (distances, routesVia) => {
  const stops = routesVia.split('-');
  const routeDistance = getRouteDistance(distances, stops)
  const totalDistance = getTotalDistance(routeDistance);
  return totalDistance;
}

const getDistance = (distances, from, to) => {
  const oneStopDistance = distances.find(distance => (distance.From === from && distance.To === to)
    || (distance.To === from && distance.From === to))

  return oneStopDistance !== undefined && Number(oneStopDistance.Distance);
}

const main = async () => {
  const distances = await csvToJson().fromFile('./distances.csv')
  const routes = await csvToJson().fromFile('./routes.csv')
  const routesWithDistances = updateRoutesWithDistances(distances, routes);
  displayDistances(routesWithDistances);
}

main();