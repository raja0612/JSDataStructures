public class StockBuy {
    public static void main(String args[]) {

        //int price[] = {7, 1, 5, 3, 6, 4};
        int price[] = {7, 6, 5, 4, 3, 2, 1};

        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;;

        for(int i = 0; i < price.length; i++) {
            //update min price
            if(price[i] < minPrice) {
                minPrice = price[i];
            }
            // update max profit
            if(price[i]- minPrice > maxProfit) {
                maxProfit = price[i] - minPrice;
            }
        }

        System.out.print("MAX PROFIT....."+maxProfit);
    }
}