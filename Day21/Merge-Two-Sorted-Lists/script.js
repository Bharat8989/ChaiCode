//Merge two sorted lists
function mergeSortedLists(list1, list2) {
    let mergedList = [];
    let i = 0, j = 0;

    // Traverse both lists and insert smaller value from list1 or list2 into mergedList
    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            mergedList.push(list1[i]);
            i++;
        } else {
            mergedList.push(list2[j]);
            j++;
        }
    }

    // If there are remaining elements in list1, add them to mergedList
    while (i < list1.length) {
        mergedList.push(list1[i]);
        i++;
    }

    // If there are remaining elements in list2, add them to mergedList
    while (j < list2.length) {
        mergedList.push(list2[j]);
        j++;
    }

    return mergedList;
}

// Example usage:
let list1 = [1, 3, 5, 7];
let list2 = [2, 4, 6, 8];
let mergedList = mergeSortedLists(list1, list2);
console.log(mergedList); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


//valid parentheses
