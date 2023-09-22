export function calculateRating(entries, dates){ //entries is just the array containing the previous 10 entries, dates is an array containing the date of the previous 10 entries
    if(entries.length === 0){
        return "rating is unknown";
    }
    const proportions = new Map();
    proportions.set('currentDate', 1.00);
    proportions.set('withinThreeDays', 0.75);
    const MIAD = 1000*60*60*24 //MIAD (milliseconds in a day) = 86.4 million milliseconds in a day
    var currentDate = new Date(); //DATE OF THE CURRENT DAY
    var rating = 0;
    var total = 0; //sum of entries being factored into the average rating
    var numOfEntries = 0; //number of entries being factored into the average rating
    let length = entries.length;
    let proportion = 0;
    let i = length - 1;
    var currentEntry = entries[i];
    var entryDate = dates[i];
    if(new Date(currentDate).getTime() - new Date(entryDate).getTime() <= MIAD/2){
        while(new Date(currentDate).getTime() - new Date(entryDate).getTime() <= MIAD/2){ //case where there exists entry from the same day
            total += entries[i];
            numOfEntries++;
            i--;
            currentEntry = entries[i];
            entryDate = dates[i];
        }
        console.log(total);
        console.log(numOfEntries);
        rating = total/numOfEntries;
        return rating*100;
        
    } else if(new Date(currentDate).getTime() - new Date(entryDate).getTime() <= MIAD*3){
        console.log('Most recent entry is within three days');
        while(new Date(currentDate).getTime() - new Date(entryDate).getTime() <= MIAD*3){ //case where there exists entry from the past three days
            total += entries[i];
            numOfEntries++;
            i--;
            currentEntry = entries[i];
            entryDate = dates[i];
        } 
        let withinThreeDaysRating = total/numOfEntries * proportions.get('withinThreeDays'); console.log(withinThreeDaysRating); 
        let notWithinThreeDaysProportion  = 1-(proportions.get('withinThreeDays'));
        let numOfEntriesWithinThreeDays = numOfEntries;
        if(numOfEntries === length){ //if all entries are within three days
            rating = withinThreeDaysRating;
            rating *= (1/proportions.get('withinThreeDays'));
            return rating*100;
        }
        total = 0; //resetting total to sum all entries that are not within the past three days
        numOfEntries = 0;
        for(; i >= 0; i--){
            total += entries[i];
            numOfEntries++;
            i--;
            currentEntry = entries[i];
            entryDate = dates[i];
        }
            //withinThreeDays * proportion + notWithinThreeDays * diffProportion
        rating = withinThreeDaysRating + ((total/(numOfEntries-numOfEntriesWithinThreeDays)*notWithinThreeDaysProportion));
            //rating is calculated using 10 elements, using 75% of the average rating from all entries within the past three days and 25% of the average rating from entries outside of the past three days
        return rating*100;
    } else { //no entry within 3 days
        console.log("Nothing within three days??");
        for(let j = 1; i >= 0; i--, j++){
            currentEntry = entries[i];
            proportion = 1/(Math.pow(2,j));
            rating += currentEntry*proportion;
        }
    }
    rating *= 100;
    console.log(rating);
    return `${rating}`;
}
export default calculateRating