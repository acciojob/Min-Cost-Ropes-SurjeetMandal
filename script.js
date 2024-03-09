function mincost(arr)
{ 
function mincost(arr) {
    arr.sort((a, b) => a - b);

    let cost = 0;

    for (let i = 1; i < arr.length; i++) {
        const mergeCost = arr[i - 1] + arr[i];
        cost += mergeCost;

        arr[i] = mergeCost;
    }

    return cost;
}
	
const arr = [4, 3, 2, 6];
console.log(mincost(arr));
}

module.exports=mincost;
