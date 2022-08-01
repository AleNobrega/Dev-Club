

const companies= [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundeOn: 1938},
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundeOn: 1975},
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundeOn: 1968},
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckberg', foundeOn: 2004},
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundeOn: 2006},
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundeOn: 1976},
];


const alMarketValues = companies.reduce ( ((acc, current) => acc + current.marketValue) , 0)

console.log(alMarketValues)