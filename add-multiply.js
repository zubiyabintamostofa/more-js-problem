function woodCalculator(chairQuantity,tableQuentity,bedquentity){
    const perchairWood=3;
    const pertableWood=10;
    const perbedWood=50;

    //wood calculation
const chairwoodQuentity=chairQuantity*perchairWood;
const tablewoodQuentity=tableQuentity*pertableWood;
const bedwoodquentity=bedquentity*perbedWood;
//adding all wood quentity

const totlewood=chairwoodQuentity+tablewoodQuentity+bedwoodquentity;
return totlewood;
}
const firstOption =woodCalculator(1,1,1);
console.log(firstOption)

