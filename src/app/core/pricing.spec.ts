import { FlatRatePerKmStrategy, calculatePercentageDiscount, calculateRating } from './pricing';

describe('pricing strategies',()=>{
  it('calculates transparent travel pricing',()=>expect(new FlatRatePerKmStrategy(40).quote(8.2).travelFee).toBe(328));
  it('never discounts below zero',()=>expect(calculatePercentageDiscount(100,150)).toBe(100));
  it('does not apply inactive promotions',()=>expect(calculatePercentageDiscount(1000,15,false)).toBe(0));
  it('calculates average rating',()=>expect(calculateRating([5,4,5])).toBeCloseTo(4.67,1));
});
