import { input } from "./input";

function getInventoryWithMostItems(inventory: string): number | undefined {
  const inventories = inventory.split("\n\n");
  let max = 0;
  let maxInventory = "";
  for (const inv of inventories) {
    const items = inv.split("\n");
    const summedItems = items.reduce((acc, curr) => {
        return acc + parseInt(curr);
    }, 0);
    if (summedItems > max) {
      max = summedItems;
      maxInventory = inv;
    }
  }
  return max
}

function getTopThreeInventories(inventory: string): number {
    const inventories = inventory.split("\n\n");
    const topThreeInventories: number[] = [];

    for (const inv of inventories) {
        const items = inv.split("\n");
        const summedItems = items.reduce((acc, curr) => {
            return acc + parseInt(curr);
        }, 0);

        if (topThreeInventories.length < 3) {
            topThreeInventories.push(summedItems);
        } else {
            topThreeInventories.sort((a, b) => b - a);
            if (summedItems > topThreeInventories[2]) {
                topThreeInventories.pop();
                topThreeInventories.push(summedItems);
            }
        }
    }
    
    return topThreeInventories.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
}

console.log(getInventoryWithMostItems(input));
console.log(getTopThreeInventories(input));
