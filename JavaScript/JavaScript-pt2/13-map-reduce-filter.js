
const list = [20,3,234,12,17,541,6,87,275,1000];


const companies= [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundeOn: 1938},
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundeOn: 1975},
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundeOn: 1968},
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckberg', foundeOn: 2004},
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundeOn: 2006},
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundeOn: 1976},
];


const add10PercentMarketValue = company => {
    company.marketValue = company.marketValue + company.marketValue / 10 
    return company
}

const oldCompanies = company => company.foundeOn < 2000

const allOldCompaniesMarketValue = (acc, company) => acc + company.marketValue



const myBestCompanies = companies.map(add10PercentMarketValue).filter(oldCompanies).reduce(allOldCompaniesMarketValue,0)
console.log(myBestCompanies)
