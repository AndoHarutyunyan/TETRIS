const bigDiv=document.getElementById('bigDiv')
const quadratic=document.getElementsByClassName('quadratic')
const nestDiv=document.getElementsByClassName('nestDiv')

for(let j=0; j<20; j++) {
    let nestDiv=document.createElement('div')
    nestDiv.className='nestDiv'
    for (let i = 0; i < 10; i++) {
        let div = document.createElement('div')
        div.className = 'quadratic'
        nestDiv.append(div)
    }
    bigDiv.append(nestDiv)
}

let start=confirm('START GAME')
if(start===true){
    tetris()
}

function tetris(){
    let x=(function randomInRange() {
        let c = Math.floor(2 + Math.random() *7) ;
        return c;
    })()

    let figur=Math.floor(1 + Math.random() *7)
    let y,z,k;
    if(figur===1){
        y=x+1 , z=x+11 , k=x+10
    }else if(figur===2){
        y=x+1 , z=x-1 , k=x-2
    }else if(figur===3){
        y=x+1 , z=x-1 , k=x+9
    }else if( figur===4){
        y=x+1 , z=x-1 , k=x+11
    }else if(figur===5){
        y=x+1 , z=x-1 , k=x+10
    }else if(figur===6){
        y=x+10 , z=x-1 , k=x+11
    }else if(figur===7){
        y=x+1 , z=x+9 , k=x+10
    }

    quadratic[x].style.backgroundColor='red'
    quadratic[y].style.backgroundColor='red'
    quadratic[z].style.backgroundColor='red'
    quadratic[k].style.backgroundColor='red'

    addEventListener('keydown', left)
    function left(el) {
        if( el.keyCode===37 && (x-1)%10!==9 && (y-1)%10!==9 && (z-1)%10!==9 && (k-1)%10!==9 ) {
            if(figur===1 && quadratic[x-1].style.backgroundColor === '' && quadratic[k-1].style.backgroundColor === '') {

                quadratic[x].style.backgroundColor = ''
                quadratic[y].style.backgroundColor = ''
                quadratic[z].style.backgroundColor = ''
                quadratic[k].style.backgroundColor = ''
                x = x - 1 , y = y - 1
                z = z - 1 , k = k - 1
                quadratic[x].style.backgroundColor = 'red'
                quadratic[y].style.backgroundColor = 'red'
                quadratic[z].style.backgroundColor = 'red'
                quadratic[k].style.backgroundColor = 'red'

            }else if(figur===2 && (y===x+1 && quadratic[k-1].style.backgroundColor ==='' && k>k%10 ||
                y===x+10 &&  quadratic[x-1].style.backgroundColor === '' && quadratic[y-1].style.backgroundColor === '' &&
                quadratic[z-1].style.backgroundColor === '' && quadratic[k-1].style.backgroundColor === '')){

                quadratic[x].style.backgroundColor = ''
                quadratic[y].style.backgroundColor = ''
                quadratic[z].style.backgroundColor = ''
                quadratic[k].style.backgroundColor = ''
                x = x - 1 , y = y - 1
                z = z - 1 , k = k - 1
                quadratic[x].style.backgroundColor = 'red'
                quadratic[y].style.backgroundColor = 'red'
                quadratic[z].style.backgroundColor = 'red'
                quadratic[k].style.backgroundColor = 'red'

            }else if(figur===3 && (y===x+1 && quadratic[z-1].style.backgroundColor === '' &&
                quadratic[k-1].style.backgroundColor === '' ||
                y===x-10 && quadratic[x-1].style.backgroundColor === '' && quadratic[y-1].style.backgroundColor === '' &&
                quadratic[z-1].style.backgroundColor === '' || y===x-1 && quadratic[y-1].style.backgroundColor === '' &&
                quadratic[k-1].style.backgroundColor === '' || y===x+10 && quadratic[x-1].style.backgroundColor === '' &&
                quadratic[y-1].style.backgroundColor === '' && quadratic[k-1].style.backgroundColor === '')){

                quadratic[x].style.backgroundColor = ''
                quadratic[y].style.backgroundColor = ''
                quadratic[z].style.backgroundColor = ''
                quadratic[k].style.backgroundColor = ''
                x = x - 1 , y = y - 1
                z = z - 1 , k = k - 1
                quadratic[x].style.backgroundColor = 'red'
                quadratic[y].style.backgroundColor = 'red'
                quadratic[z].style.backgroundColor = 'red'
                quadratic[k].style.backgroundColor = 'red'

            }else if(figur===4 && (y===x+1 && quadratic[z-1].style.backgroundColor === '' && z>z%10 &&
                quadratic[k-1].style.backgroundColor === '' ||
                y===x-10 && quadratic[x-1].style.backgroundColor === '' && quadratic[y-1].style.backgroundColor === '' &&
                quadratic[z-1].style.backgroundColor === '' || y===x-1 && quadratic[y-1].style.backgroundColor === '' &&
                quadratic[k-1].style.backgroundColor === '' || y===x+10 && quadratic[x-1].style.backgroundColor === '' &&
                quadratic[z-1].style.backgroundColor === '' && quadratic[k-1].style.backgroundColor === '')){

                quadratic[x].style.backgroundColor = ''
                quadratic[y].style.backgroundColor = ''
                quadratic[z].style.backgroundColor = ''
                quadratic[k].style.backgroundColor = ''
                x = x - 1 , y = y - 1
                z = z - 1 , k = k - 1
                quadratic[x].style.backgroundColor = 'red'
                quadratic[y].style.backgroundColor = 'red'
                quadratic[z].style.backgroundColor = 'red'
                quadratic[k].style.backgroundColor = 'red'

            }else if(figur===5 && (y===x+1 && quadratic[z-1].style.backgroundColor === '' && quadratic[k-1].style.backgroundColor === '' && z>z%10 ||
                y===x-10 && quadratic[x-1].style.backgroundColor === '' && quadratic[y-1].style.backgroundColor === '' &&
                quadratic[z-1].style.backgroundColor === '' || y===x-1 && quadratic[y-1].style.backgroundColor === '' &&
                quadratic[k-1].style.backgroundColor === '' || y===x+10 && quadratic[z-1].style.backgroundColor === '' &&
                quadratic[y-1].style.backgroundColor === '' && quadratic[k-1].style.backgroundColor === '')){

                quadratic[x].style.backgroundColor = ''
                quadratic[y].style.backgroundColor = ''
                quadratic[z].style.backgroundColor = ''
                quadratic[k].style.backgroundColor = ''
                x = x - 1 , y = y - 1
                z = z - 1 , k = k - 1
                quadratic[x].style.backgroundColor = 'red'
                quadratic[y].style.backgroundColor = 'red'
                quadratic[z].style.backgroundColor = 'red'
                quadratic[k].style.backgroundColor = 'red'

            }else if (figur===6 && (y===x+10 &&  quadratic[y-1].style.backgroundColor === '' && quadratic[z-1].style.backgroundColor ==='' && z>z%10||
                y===x+1 &&  quadratic[x-1].style.backgroundColor === '' && quadratic[z-1].style.backgroundColor === '' &&
                quadratic[k-1].style.backgroundColor === '')){

                quadratic[x].style.backgroundColor = ''
                quadratic[y].style.backgroundColor = ''
                quadratic[z].style.backgroundColor = ''
                quadratic[k].style.backgroundColor = ''
                x = x - 1 , y = y - 1
                z = z - 1 , k = k - 1
                quadratic[x].style.backgroundColor = 'red'
                quadratic[y].style.backgroundColor = 'red'
                quadratic[z].style.backgroundColor = 'red'
                quadratic[k].style.backgroundColor = 'red'

            }else if(figur===7 && (y===x+1 && quadratic[x-1].style.backgroundColor === '' && quadratic[z-1].style.backgroundColor === '' ||
                y===x-10 && quadratic[x-1].style.backgroundColor === '' && quadratic[y-1].style.backgroundColor === '' &&
                quadratic[z-1].style.backgroundColor === '')){

                quadratic[x].style.backgroundColor = ''
                quadratic[y].style.backgroundColor = ''
                quadratic[z].style.backgroundColor = ''
                quadratic[k].style.backgroundColor = ''
                x = x - 1 , y = y - 1
                z = z - 1 , k = k - 1
                quadratic[x].style.backgroundColor = 'red'
                quadratic[y].style.backgroundColor = 'red'
                quadratic[z].style.backgroundColor = 'red'
                quadratic[k].style.backgroundColor = 'red'
            }
        }
    }

    addEventListener('keydown', right)
    function right(el) {
        if(el.keyCode===39 && (x+1)%10!==0 && (y+1)%10!==0 && (z+1)%10!==0 && (k+1)%10!==0 ){
            if(figur===1 && quadratic[y+1].style.backgroundColor === '' && quadratic[z+1].style.backgroundColor === '') {

                quadratic[x].style.backgroundColor = ''
                quadratic[y].style.backgroundColor = ''
                quadratic[z].style.backgroundColor = ''
                quadratic[k].style.backgroundColor = ''
                x = x + 1 , y = y + 1
                z = z + 1 , k = k + 1
                quadratic[x].style.backgroundColor = 'red'
                quadratic[y].style.backgroundColor = 'red'
                quadratic[z].style.backgroundColor = 'red'
                quadratic[k].style.backgroundColor = 'red'

            }else if(figur===2 && (y===x+1 && quadratic[y+1].style.backgroundColor ==='' ||
                y===x+10 &&  quadratic[x+1].style.backgroundColor === '' && quadratic[y+1].style.backgroundColor === '' &&
                quadratic[z+1].style.backgroundColor === '' && quadratic[k+1].style.backgroundColor === '')) {

                quadratic[x].style.backgroundColor = ''
                quadratic[y].style.backgroundColor = ''
                quadratic[z].style.backgroundColor = ''
                quadratic[k].style.backgroundColor = ''
                x = x + 1 , y = y + 1
                z = z + 1 , k = k + 1
                quadratic[x].style.backgroundColor = 'red'
                quadratic[y].style.backgroundColor = 'red'
                quadratic[z].style.backgroundColor = 'red'
                quadratic[k].style.backgroundColor = 'red'

            }else if(figur===3 && (y===x+1 && quadratic[y+1].style.backgroundColor === '' &&
                quadratic[k+1].style.backgroundColor === '' ||
                y===x-10 && quadratic[x+1].style.backgroundColor === '' && quadratic[y+1].style.backgroundColor === '' &&
                quadratic[k+1].style.backgroundColor === '' || y===x-1 && quadratic[z+1].style.backgroundColor === '' &&
                quadratic[k+1].style.backgroundColor === '' || y===x+10 && quadratic[x+1].style.backgroundColor === '' &&
                quadratic[y+1].style.backgroundColor === '' && quadratic[z+1].style.backgroundColor === '')){

                quadratic[x].style.backgroundColor = ''
                quadratic[y].style.backgroundColor = ''
                quadratic[z].style.backgroundColor = ''
                quadratic[k].style.backgroundColor = ''
                x = x + 1 , y = y + 1
                z = z + 1 , k = k + 1
                quadratic[x].style.backgroundColor = 'red'
                quadratic[y].style.backgroundColor = 'red'
                quadratic[z].style.backgroundColor = 'red'
                quadratic[k].style.backgroundColor = 'red'

            }else if(figur===4 && (y===x+1 && quadratic[y+1].style.backgroundColor === '' &&
                quadratic[k+1].style.backgroundColor === '' ||
                y===x-10 && quadratic[x+1].style.backgroundColor === '' && quadratic[k+1].style.backgroundColor === '' &&
                quadratic[z+1].style.backgroundColor === '' || y===x-1 && quadratic[z+1].style.backgroundColor === '' &&
                quadratic[k+1].style.backgroundColor === '' || y===x+10 && quadratic[x+1].style.backgroundColor === '' &&
                quadratic[y+1].style.backgroundColor === '' && quadratic[z+1].style.backgroundColor === '')){

                quadratic[x].style.backgroundColor = ''
                quadratic[y].style.backgroundColor = ''
                quadratic[z].style.backgroundColor = ''
                quadratic[k].style.backgroundColor = ''
                x = x + 1 , y = y + 1
                z = z + 1 , k = k + 1
                quadratic[x].style.backgroundColor = 'red'
                quadratic[y].style.backgroundColor = 'red'
                quadratic[z].style.backgroundColor = 'red'
                quadratic[k].style.backgroundColor = 'red'

            }else if(figur===5 && (y===x+1 && quadratic[y+1].style.backgroundColor === '' && quadratic[k+1].style.backgroundColor === '' ||
                y===x-10 && quadratic[y+1].style.backgroundColor === '' && quadratic[z+1].style.backgroundColor === '' &&
                quadratic[k+1].style.backgroundColor === '' || y===x-1 &&  quadratic[z+1].style.backgroundColor === '' &&
                quadratic[k+1].style.backgroundColor === '' || y===x+10 && quadratic[y+1].style.backgroundColor === '' &&
                quadratic[z+1].style.backgroundColor === '' && quadratic[x+1].style.backgroundColor === '')){

                quadratic[x].style.backgroundColor = ''
                quadratic[y].style.backgroundColor = ''
                quadratic[z].style.backgroundColor = ''
                quadratic[k].style.backgroundColor = ''
                x = x + 1 , y = y + 1
                z = z + 1 , k = k + 1
                quadratic[x].style.backgroundColor = 'red'
                quadratic[y].style.backgroundColor = 'red'
                quadratic[z].style.backgroundColor = 'red'
                quadratic[k].style.backgroundColor = 'red'

            }else if(figur===6 && (y===x+10 &&  quadratic[x+1].style.backgroundColor === '' && quadratic[k+1].style.backgroundColor ===''||
                y===x+1 &&  quadratic[y+1].style.backgroundColor === '' && quadratic[z+1].style.backgroundColor === '' &&
                quadratic[k+1].style.backgroundColor === '')){

                quadratic[x].style.backgroundColor = ''
                quadratic[y].style.backgroundColor = ''
                quadratic[z].style.backgroundColor = ''
                quadratic[k].style.backgroundColor = ''
                x = x + 1 , y = y + 1
                z = z + 1 , k = k + 1
                quadratic[x].style.backgroundColor = 'red'
                quadratic[y].style.backgroundColor = 'red'
                quadratic[z].style.backgroundColor = 'red'
                quadratic[k].style.backgroundColor = 'red'

            }else if(figur===7 && (y===x+1 && quadratic[y+1].style.backgroundColor === '' && quadratic[k+1].style.backgroundColor === '' ||
                y===x-10 && quadratic[k+1].style.backgroundColor === '' && quadratic[y+1].style.backgroundColor === '' &&
                quadratic[z+1].style.backgroundColor === '')){

                quadratic[x].style.backgroundColor = ''
                quadratic[y].style.backgroundColor = ''
                quadratic[z].style.backgroundColor = ''
                quadratic[k].style.backgroundColor = ''
                x = x + 1 , y = y + 1
                z = z + 1 , k = k + 1
                quadratic[x].style.backgroundColor = 'red'
                quadratic[y].style.backgroundColor = 'red'
                quadratic[z].style.backgroundColor = 'red'
                quadratic[k].style.backgroundColor = 'red'
            }
        }
    }

    addEventListener('keydown', upArrow)
    function upArrow(el) {
        if(el.keyCode===38 && x>10 && x<190){
            if(figur===2 && y===x+1 && x>19){
                if(quadratic[x+10].style.backgroundColor === '' ) {

                    quadratic[x].style.backgroundColor = ''
                    quadratic[y].style.backgroundColor = ''
                    quadratic[z].style.backgroundColor = ''
                    quadratic[k].style.backgroundColor = ''
                    y = x + 10 , z = x - 10 , k = x - 20
                    quadratic[x].style.backgroundColor = 'red'
                    quadratic[y].style.backgroundColor = 'red'
                    quadratic[z].style.backgroundColor = 'red'
                    quadratic[k].style.backgroundColor = 'red'
                }
            }else if(figur===2 && y===x+10 && x>20) {
                if (x % 10 === 0 || x % 10 === 1) {
                    if(quadratic[x+1].style.backgroundColor === '' && quadratic[x+2].style.backgroundColor === '' &&
                        quadratic[x+3].style.backgroundColor === '') {

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x + 1 , z = x + 2 , k = x + 3
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                } else if (x % 10 === 9) {
                    if(quadratic[y-1].style.backgroundColor === '' && quadratic[x-1].style.backgroundColor === '' &&
                        quadratic[x-2].style.backgroundColor === ''){

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        x = y - 1 , z = x - 1 , k = x - 2
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                } else {
                    if (quadratic[x + 1].style.backgroundColor === '' && quadratic[x - 1].style.backgroundColor === '' &&
                        quadratic[x - 2].style.backgroundColor === '') {

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x + 1 , z = x - 1 , k = x - 2
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }
            }else if(figur===3 && y===x+1){
                if( quadratic[x+11].style.backgroundColor === '' && quadratic[x+10].style.backgroundColor === '') {

                    quadratic[x].style.backgroundColor = ''
                    quadratic[y].style.backgroundColor = ''
                    quadratic[z].style.backgroundColor = ''
                    quadratic[k].style.backgroundColor = ''
                    y = x - 10 , z = x + 10 , k = x + 11
                    quadratic[x].style.backgroundColor = 'red'
                    quadratic[y].style.backgroundColor = 'red'
                    quadratic[z].style.backgroundColor = 'red'
                    quadratic[k].style.backgroundColor = 'red'
                }
            }else if(figur===3 && y===x-10){
                if(x%10===0 ) {
                    if (quadratic[x - 1].style.backgroundColor === '' && quadratic[x - 9].style.backgroundColor === '' &&
                        quadratic[x + 1].style.backgroundColor === '') {
                        x = x + 1

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x - 1 , z = x + 1 , k = x - 9
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                } else {
                    if (quadratic[x - 1].style.backgroundColor === '' && quadratic[x - 9].style.backgroundColor === '' &&
                        quadratic[x + 1].style.backgroundColor === '') {

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x - 1 , z = x + 1 , k = x - 9
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }
            }else if(figur===3 && y===x-1){
                if(quadratic[x-11].style.backgroundColor === '' && quadratic[x+10].style.backgroundColor === '' ) {

                    quadratic[x].style.backgroundColor = ''
                    quadratic[y].style.backgroundColor = ''
                    quadratic[z].style.backgroundColor = ''
                    quadratic[k].style.backgroundColor = ''
                    y = x + 10 , z = x - 10 , k = x - 11
                    quadratic[x].style.backgroundColor = 'red'
                    quadratic[y].style.backgroundColor = 'red'
                    quadratic[z].style.backgroundColor = 'red'
                    quadratic[k].style.backgroundColor = 'red'
                }

            }else if(figur===3 && y===x+10){
                if(x%10===9){
                    if(quadratic[x+9].style.backgroundColor === '' && quadratic[x+1].style.backgroundColor === '' &&
                        quadratic[x-1].style.backgroundColor === '') {
                        x=x-1

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x + 1 , z = x - 1 , k = x + 9
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }else {
                    if (quadratic[x + 9].style.backgroundColor === '' && quadratic[x + 1].style.backgroundColor === '' &&
                        quadratic[x - 1].style.backgroundColor === '') {

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x + 1 , z = x - 1 , k = x + 9
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }
            }else if(figur===4 && y===x+1) {
                if (quadratic[x + 10].style.backgroundColor === '' && quadratic[x - 10].style.backgroundColor === '' &&
                    quadratic[x - 9].style.backgroundColor === '') {

                    quadratic[x].style.backgroundColor = ''
                    quadratic[y].style.backgroundColor = ''
                    quadratic[z].style.backgroundColor = ''
                    quadratic[k].style.backgroundColor = ''
                    y = x - 10 , z = x + 10 , k = x - 9
                    quadratic[x].style.backgroundColor = 'red'
                    quadratic[y].style.backgroundColor = 'red'
                    quadratic[z].style.backgroundColor = 'red'
                    quadratic[k].style.backgroundColor = 'red'
                }
            }else if(figur===4 && y===x-10){
                if(x%10===0){
                    if (quadratic[x - 1].style.backgroundColor === '' && quadratic[x - 11].style.backgroundColor === '' &&
                        quadratic[x +1].style.backgroundColor === '') {
                        x=x+1

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x - 1 , z = x + 1 , k = x - 11
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }else {
                    if (quadratic[x - 1].style.backgroundColor === '' && quadratic[x - 11].style.backgroundColor === '' &&
                        quadratic[x + 1].style.backgroundColor === '') {
                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x - 1 , z = x + 1 , k = x - 11
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }
            }else if(figur===4 && y===x-1){
                if (quadratic[x - 10].style.backgroundColor === '' && quadratic[x + 10].style.backgroundColor === '' &&
                    quadratic[x +9].style.backgroundColor === '') {

                    quadratic[x].style.backgroundColor = ''
                    quadratic[y].style.backgroundColor = ''
                    quadratic[z].style.backgroundColor = ''
                    quadratic[k].style.backgroundColor = ''
                    y = x + 10 , z = x - 10 , k = x + 9
                    quadratic[x].style.backgroundColor = 'red'
                    quadratic[y].style.backgroundColor = 'red'
                    quadratic[z].style.backgroundColor = 'red'
                    quadratic[k].style.backgroundColor = 'red'
                }
            }else if(figur===4 && y===x+10){
                if (x%10===9){
                    if (quadratic[x + 1].style.backgroundColor === '' && quadratic[x+11].style.backgroundColor === '' &&
                        quadratic[x - 1].style.backgroundColor === '') {
                        x=x-1

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x + 1 , z = x - 1 , k = x + 11
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }else {
                    if (quadratic[x + 1].style.backgroundColor === '' && quadratic[x+11].style.backgroundColor === '' &&
                        quadratic[x - 1].style.backgroundColor === '') {

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x + 1 , z = x - 1 , k = x + 11
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }
            }else if(figur===5 && y===x+1){
                if (quadratic[x - 10].style.backgroundColor === '') {

                    quadratic[x].style.backgroundColor = ''
                    quadratic[y].style.backgroundColor = ''
                    quadratic[z].style.backgroundColor = ''
                    quadratic[k].style.backgroundColor = ''
                    y = x - 10 , z = x + 10 , k = x + 1
                    quadratic[x].style.backgroundColor = 'red'
                    quadratic[y].style.backgroundColor = 'red'
                    quadratic[z].style.backgroundColor = 'red'
                    quadratic[k].style.backgroundColor = 'red'
                }
            }else if(figur===5 && y===x-10){
                if(x%10===0){
                    if (quadratic[x - 1].style.backgroundColor === '') {
                        x=x+1

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x - 1 , z = x + 1 , k = x - 10
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }else {
                    if (quadratic[x - 1].style.backgroundColor === '') {

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x - 1 , z = x + 1 , k = x - 10
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }
            }else if(figur===5 && y===x-1){
                if (quadratic[x + 10].style.backgroundColor === '' ) {

                    quadratic[x].style.backgroundColor = ''
                    quadratic[y].style.backgroundColor = ''
                    quadratic[z].style.backgroundColor = ''
                    quadratic[k].style.backgroundColor = ''
                    y = x + 10 , z = x - 10 , k = x - 1
                    quadratic[x].style.backgroundColor = 'red'
                    quadratic[y].style.backgroundColor = 'red'
                    quadratic[z].style.backgroundColor = 'red'
                    quadratic[k].style.backgroundColor = 'red'
                }
            }else if(figur===5 && y===x+10){
                if(x%10===9){
                    if (quadratic[x + 1].style.backgroundColor === '') {
                        x=x-1

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x + 1 , z = x - 1 , k = x + 10
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }else {
                    if (quadratic[x + 1].style.backgroundColor === '') {
                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x + 1 , z = x - 1 , k = x + 10
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }
            }else if(figur===6 && y===x+10){
                if (quadratic[y + 10].style.backgroundColor === '') {

                    quadratic[x].style.backgroundColor = ''
                    quadratic[y].style.backgroundColor = ''
                    quadratic[z].style.backgroundColor = ''
                    quadratic[k].style.backgroundColor = ''
                    y = x + 1 , z = x - 9 , k = x + 10
                    quadratic[x].style.backgroundColor = 'red'
                    quadratic[y].style.backgroundColor = 'red'
                    quadratic[z].style.backgroundColor = 'red'
                    quadratic[k].style.backgroundColor = 'red'
                }
            }else if(figur===6 && y===x+1){
                if(x%10===0){
                    if (quadratic[x - 1].style.backgroundColor === '' && quadratic[x + 11].style.backgroundColor === '') {
                        x = x + 1

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x + 10 , z = x - 1 , k = x + 11
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }else {
                    if (quadratic[x - 1].style.backgroundColor === '' && quadratic[x + 11].style.backgroundColor === '') {

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x + 10 , z = x - 1 , k = x + 11
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }
            }else if(figur===7 && y===x+1){
                if(quadratic[x + 11].style.backgroundColor === ''){

                    quadratic[x].style.backgroundColor = ''
                    quadratic[y].style.backgroundColor = ''
                    quadratic[z].style.backgroundColor = ''
                    quadratic[k].style.backgroundColor = ''
                    y = x - 10 , z = x + 11 , k = x + 1
                    quadratic[x].style.backgroundColor = 'red'
                    quadratic[y].style.backgroundColor = 'red'
                    quadratic[z].style.backgroundColor = 'red'
                    quadratic[k].style.backgroundColor = 'red'
                }
            }else if(figur===7 && y===x-10){
                if(x%10===0){
                    if(quadratic[x + 10].style.backgroundColor === '' && quadratic[x + 9].style.backgroundColor === '') {
                        x=x+1

                        quadratic[x-1].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y=x+1 , z=x+9 , k=x+10
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }else {
                    if(quadratic[x + 10].style.backgroundColor === '' && quadratic[x + 9].style.backgroundColor === '') {

                        quadratic[x].style.backgroundColor = ''
                        quadratic[y].style.backgroundColor = ''
                        quadratic[z].style.backgroundColor = ''
                        quadratic[k].style.backgroundColor = ''
                        y = x + 1 , z = x + 9 , k = x + 10
                        quadratic[x].style.backgroundColor = 'red'
                        quadratic[y].style.backgroundColor = 'red'
                        quadratic[z].style.backgroundColor = 'red'
                        quadratic[k].style.backgroundColor = 'red'
                    }
                }
            }
        }
    }
    let coordinat=[x,y,z,k]
    addEventListener('keydown', downArrow)
    function downArrow(el) {

        if(el.keyCode===40 && coordinat!==null){
            down()

        }
    }

    let clear=setInterval(down,800)
    function down() {
        coordinat=[x,y,z,k]
        let arr=[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190]
        if (Math.max(x,y,z,k) < 200 && Math.max(x,y,z,k)>= 190)  {
            clearInterval(clear)
            removeEventListener('keydown',left)
            removeEventListener('keydown',right)
            removeEventListener('keydown',upArrow)

            let rows = []
            for (let i = 0; i < arr.length; i++) {
                let row = []
                for (let j = arr[i]; j < arr[i] + 10; j++) {
                    if (quadratic[j].style.backgroundColor === 'red') {
                        row.push(j)
                    }
                }
                if (row.length !== 0) {
                    rows.push(row)
                }
            }
            for (let i = 0; i < rows.length; i++) {
                if (rows[i].length === 10) {
                    nestDiv[rows[i][0] / 10].childNodes.forEach(el=>el.style.backgroundColor='')
                    bigDiv.prepend( nestDiv[rows[i][0] / 10])
                }
            }
            coordinat=null
            tetris()
            return
        }

        for(let i=0; i<coordinat.length; i++){
            if(coordinat.indexOf(coordinat[i] + 10) === -1 && quadratic[coordinat[i] + 10].style.backgroundColor=== 'red'){
                clearInterval(clear)
                removeEventListener('keydown',left)
                removeEventListener('keydown',right)
                removeEventListener('keydown',upArrow)

                let rows = []
                for (let i = 0; i < arr.length; i++) {
                    let row = []
                    for (let j = arr[i]; j < arr[i] + 10; j++) {
                        if (quadratic[j].style.backgroundColor === 'red') {
                            row.push(j)
                        }
                    }
                    if (row.length !== 0) {
                        rows.push(row)
                    }
                }
                for (let i = 0; i < rows.length; i++) {
                    if (rows[i].length === 10) {
                        //  nestDiv[rows[i][0] / 10].remove()
                        nestDiv[rows[i][0] / 10].childNodes.forEach(el=>el.style.backgroundColor='')
                        bigDiv.prepend( nestDiv[rows[i][0] / 10])
                    }
                }

                let end=0
                for(let i=0; i<10; i++) {
                    if (quadratic[i].style.backgroundColor === 'red') {
                        end++
                    }
                }
                if(end>4){
                    alert('GAME OVER')
                }else{
                    coordinat=null
                    tetris()
                }
                return
            }
        }

        quadratic[x].style.backgroundColor = ''
        quadratic[y].style.backgroundColor = ''
        quadratic[z].style.backgroundColor = ''
        quadratic[k].style.backgroundColor = ''
        x = x + 10 , y = y + 10
        z = z + 10 , k = k + 10
        quadratic[x].style.backgroundColor = 'red'
        quadratic[y].style.backgroundColor = 'red'
        quadratic[z].style.backgroundColor = 'red'
        quadratic[k].style.backgroundColor = 'red'
    }
}
