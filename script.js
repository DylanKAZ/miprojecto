let a = [9, 7, 6, 8, 1, 3, 4, 5, 2];

function bubbleSort(){
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a.length - i; j++){
            if(a[j] > a[j+1]){
                temp = a[j];
                a[j] = a[j+1]
                a[j+1] = temp;
            }
            console.log(a);
        }
    }
}
bubbleSort();
console.log(a);