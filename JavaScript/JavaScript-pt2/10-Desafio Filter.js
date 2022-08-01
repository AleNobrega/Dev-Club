

const list = [20,3,234,12,17,541,6,87,275,1000];

const newList = list.filter( number => { 
    if(number % 2 !== 0) return false
    if(number % 5 !== 0) return false

    return true 
})

console.log(newList)




const companies= [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundeOn: 1938},
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundeOn: 1975},
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundeOn: 1968},
    { name: 'Facebook', marketValue: 338, CEO: 'Mark Zuckberg', foundeOn: 2004},
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundeOn: 2006},
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundeOn: 1976},
];

const newCompanies = companies.filter(company => { 
    if(company.foundeOn <= 1975) return false
    if(company.marketValue <= 200) return false

    return true
})

console.log(newCompanies)