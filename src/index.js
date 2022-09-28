// write your code here
// I still have a ways to go to get this... 
//hopefully I can make big strides in the next 22 hours.


const fetchRamen = () => {
    const url = 'http://localhost:3000/ramens'
    fetch(url)
    .then(resp => resp.json())
    //.then(resp => console.log(json))
    //Crap! Nothing was logged
    .then(json => renderRamenToScreen(json))
}

const renderRamenToScreen = ramens => {
    const ramenImage = document.getElementById('ramen-menu')
    ramens.forEach(ramens => {
        makeRamenCard(ramens)
    })
}

const displayRamen = ramens => {



}


const makeRamenCard = ramen => {
    const newRamenName = document.getElementById('new-name')
    const newRamenRestaurant = document.createElement('new-restaurant')
    const newRamenImage = document.createElement('new-image')
    const newRamenRating = document.createElement('new-rating')
    const newRamenComment = document.createElement('new-comment')

    ramenName.textContent = ramen.name
    ramenRestaurant.textConent = ramen.restaurant
    ramenImage = ramen.image
    ramenRating.textContent = ramen.rating
    ramenComment.textContent = ramen.content


}







