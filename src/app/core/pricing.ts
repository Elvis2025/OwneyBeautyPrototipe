export interface TravelQuote { simulatedDistanceKm:number; ratePerKm:number; travelFee:number; }
export interface TravelPricingStrategy { quote(distanceKm:number):TravelQuote; }
export class FlatRatePerKmStrategy implements TravelPricingStrategy {
  constructor(private readonly ratePerKm=40) {}
  quote(distanceKm:number):TravelQuote { const safeDistance=Math.max(0,distanceKm); return {simulatedDistanceKm:safeDistance,ratePerKm:this.ratePerKm,travelFee:Math.round(safeDistance*this.ratePerKm)}; }
}
export function calculatePercentageDiscount(subtotal:number,percentage:number,isActive=true):number {
  if(!isActive)return 0;
  return Math.min(Math.max(0,subtotal),Math.max(0,subtotal*percentage/100));
}
export function calculateRating(ratings:readonly number[]):number {
  return ratings.length===0?0:ratings.reduce((sum,rating)=>sum+rating,0)/ratings.length;
}
