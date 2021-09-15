document.getElementById('change-color').addEventListener('click',function(){
    document.body.style.backgroundColor='red';
})


function changeBackground(){
    document.getElementById('bag').style.backgroundColor='yellow';
}
document.getElementById('card-change').addEventListener('click',function(){
    const cards = document.getElementsByClassName('card');
    for(const card of cards){
        let card = document.style.borderRadius='20px';
    }
})

