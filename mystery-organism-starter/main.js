// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (specimenNum, dna) => {
  //converts the 2 provided params into objects
  return {
    specimenNum,
    dna,
    // method:
    mutate () {
      // returns a random letter in the dna A T C G
      const randIndex = Math.floor(Math.random() * this.dna.length)
      // newBase picks a random dnaBase
      let newBase = returnRandBase()
      //when the 
      while(this.dna[randIndex] === newBase) {
        newBase = returnRandBase()
      }
      this.dna[randIndex] = newBase
      return this.dna
    }
    // compareDNA(otherOrg)
  }
  // returns an obj containing props params provided
}

console.log(pAequorFactory(1, mutate()))







