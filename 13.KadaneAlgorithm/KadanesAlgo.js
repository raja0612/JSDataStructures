function KadanesAlgo(arr) {
    let current_max = arr[0];
    let current_global = current_max;

    for(let i =0; i< arr.length; i++) {
        current_max = Math.max(arr[i], current_max+arr[i]);
        current_global = Math.max(current_max, current_global)

    }

    return current_global;
}


console.log(KadanesAlgo([-2, 3, 2, -1]))

/*

def Kadane(A):
    max_current, max_global = A[0]

    for i from I to length(A) - I: 
       max_current = max(A[i], max_current+A[i])
       if max_current > max_global
          max_global = max_current
    return max_global;      

*/