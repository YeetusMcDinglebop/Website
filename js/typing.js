const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Ingredients 400g all purpose flour 2 tsp baking powder 1/2 tsp baking soda 1 tsp salt 225g unsalted butter, room temp 115g granulated sugar 175g brown sugar 2 eggs 1 tsp vanilla extract or other flavoring 325g chocolate chips (milk, semisweet, or a mix of both) Method Preheat oven to 375ºF/190ºC and line 2 baking sheets with parchment paper or silicone mats. In a bowl, sift flour, baking powder, baking soda, and salt. Mix well and set aside. In a stand mixer or in a separate bowl with an electric mixer, cream the butter with the brown and granulated sugar thoroughly. Add eggs, one at a time., and mix well in between. Add vanilla extract and mix. Add the dry ingredients and mix on low just until incorporated. Remove bowl from mixer and stir in the chocolate chips by hand just until evenly distributed. Gently shape (do not roll) the dough into 80g balls, place them on the baking sheet 3” apart, and cover with plastic wrap Chill the dough in the refrigerator for 2 hours. Once chilled, remove the plastic wrap and bake the cookies for 11-13 minutes. They should be slightly underdone, as they will continue to bake while cooling. Once finished baking in the oven, cool on the baking sheet for 5-7 minutes, then move to a cooling rack to finish cooling. Enjoy!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0,idx)
    idx++
    if (idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value
})