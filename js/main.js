var branches=0;
//board state for tests
var x="x";
var o="o";
var a='';//position is blank
var testBoard=[
    a,a,a,
    o,a,a,
    a,a,a
]

/* checks if someone won the game
returns -1 if O (player) is the winner
and 1 if the X (computer) wins.
return 0 otherwise */
var lineIndex=[ //list od indecies to check if a player completed a line
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function checkForWinner(boardState){
    for(let i=0;i<lineIndex.length;i++){
        let j=0;
        if(boardState[lineIndex[i][j]]!=a&&boardState[lineIndex[i][j]]==boardState[lineIndex[i][j+1]]&&boardState[lineIndex[i][j+1]]==boardState[lineIndex[i][j+2]]){
            if(boardState[lineIndex[i][j]]==x){
                return 1;
            }
            else{
                return -1;
            }
        }
    }

    return 0 //no winner

}

//checks if the board is full
function checkEnd(boardState){
    for(let i=0;i<boardState.length;i++){
        if(boardState[i]===a){
            return false; //game has not ended
        }
    }
    return true;
}

// console.log(checkForWinner(testBoard));
var max=true;
var min=false;

// function minimaxPrune(boardState,depth,alpha,beta,player){
//     if(checkForWinner(boardState)){
//         return [checkForWinner(boardState)];
//     }
//     else if(checkEnd(boardState)||depth==0){
//         return [0];
//     }
//     else if (player){//player is max
//         let maxEval=-Infinity ;
//         let winningMove;
//         for(let i=0;i<boardState.length;i++){
//             if(boardState[i]==a){//if this index is empty
//                 let cloneBoard=[...boardState];
//                 cloneBoard[i]=x;
//                 //should return an array: [estimated move value, index of move, pruneVar]
//                 let eval=minimaxPrune(cloneBoard,depth-1,alpha,beta,min);
//                 if(eval[0]>maxEval){
//                     winningMove=i;
//                 }
//                 maxEval=Math.max(eval[0], maxEval);
//                 alpha=Math.max(eval[0],alpha);
//                 if(alpha>=beta || eval[0]==1){
//                     break;
//                 }
//             }
//         }
//         console.log([depth*maxEval,winningMove,alpha]);
//         return [depth*maxEval,winningMove,alpha];

//     }
//     else{//player is min
//         let minEval=Infinity ;
//         let winningMove;
//         for(let i=0;i<boardState.length;i++){
//             if(boardState[i]==a){//if this index is empty
//                 let cloneBoard=[...boardState];
//                 cloneBoard[i]=x;
//                 //should return an array: [estimated move value, index of move, pruneVar]
//                 let eval=minimaxPrune(cloneBoard,depth-1,alpha,beta,max);
//                 if(eval[0]<minEval){
//                     winningMove=i;
//                 }
//                 minEval=Math.min(eval[0], minEval);
//                 beta=Math.min(eval[0],beta);
//                 if(alpha>=beta || eval[0]==-1){
//                     break;
//                 }
//             }
//         }
//         console.log([depth*minEval,winningMove,beta]);
//         return [depth*minEval,winningMove,beta];

//     }


// }

// console.log(testBoard);
// // console.log(minimaxPrune(testBoard,6,-Infinity,Infinity,max));
// testBoard[minimaxPrune(testBoard,6,-Infinity,Infinity,max)[1]]=x;
// console.log(testBoard);

//minimax ONLY
function minimax(boardState,player){
    if(checkForWinner(boardState)){
        return [checkForWinner(boardState)];
    }
    else if(checkEnd(boardState)){
        return [0];
    }
    
    else if (player){//player is max
        let maxEval=-Infinity ;
        let winningMove;
        for(let i=0;i<boardState.length;i++){
            branches++;
            if(boardState[i]==a){//if this index is empty
                let cloneBoard=[...boardState];
                cloneBoard[i]=x;
                //should return an array: [estimated move value, index of move, pruneVar]
                let eval=minimax(cloneBoard,min);
                if(eval[0]>maxEval){
                     winningMove=i;
                     maxEval=eval[0];

                }
                if(eval[0]==1){
                    break;
                }
            }         
        }
         return [maxEval,winningMove];
         //we multiply by two as an indicator that this solution went through more levels than other solutions

    }
    else{
        let minEval=Infinity ;
        let winningMove;
        for(let i=0;i<boardState.length;i++){
            branches++;

            if(boardState[i]==a){//if this index is empty
                let cloneBoard=[...boardState];
                cloneBoard[i]=o;
                //should return an array: [estimated move value, index of move, pruneVar]
                let eval=minimax(cloneBoard,max);
                if(eval[0]<minEval){
                     winningMove=i;
                     minEval=eval[0];

                }
                if(eval[0]==-1){
                    break;
                }

            }         
        }
         return [minEval,winningMove];
    }

}

