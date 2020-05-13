import { StatisticsInfo } from './statisticsinfo';

export class Statistics {

    numberOfBooks : number;
    numberOfAvailableBooks : number;
    oldestBooks : StatisticsInfo = new StatisticsInfo();
    newestBooks : StatisticsInfo = new StatisticsInfo();
    mostExpensiveBooks : StatisticsInfo = new StatisticsInfo();
    cheapestBooks : StatisticsInfo = new StatisticsInfo();

}